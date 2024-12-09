import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.css'
})
export class CarbonFootprintFormComponent {

  email : string = '';
  password : string = '';

  public onClick(){

  }
}
