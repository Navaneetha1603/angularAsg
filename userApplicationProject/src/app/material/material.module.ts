import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
const materialcomponents=[
  MatToolbarModule,
  MatButtonModule,
  MatInputModule
]

@NgModule({
  exports:[materialcomponents],
  imports: [
    materialcomponents
  ]
})
export class MaterialModule { }
