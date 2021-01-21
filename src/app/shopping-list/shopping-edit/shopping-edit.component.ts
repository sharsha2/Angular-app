import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {setupTestingRouter} from '@angular/router/testing';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
@Output() ingredentAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredentAdded.emit(newIngredient);
  }

}
