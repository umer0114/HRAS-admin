import { NgModule } from '@angular/core';
import {ImageUploadComponent} from "./components/image-upload/image-upload.component";
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const sharedModules = [
  ImageUploadComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [
    ImageUploadComponent
  ],
  exports: [...sharedModules]
})
export class sharedModule {
}
