import {Component, Output, EventEmitter} from '@angular/core';
import {outputPath} from '@angular-devkit/build-angular/src/test-utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<string>();

  // tslint:disable-next-line:typedef
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
