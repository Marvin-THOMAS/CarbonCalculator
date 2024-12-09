import { Component } from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    NgClass
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {


  public distanceKm : number = 501;
  public consommationPour100Km :  number =  3;
  public consomationTotale : number =  this.distanceKm * this.consommationPour100Km;
  public voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ]

  constructor() {
    console.log('Composant instancié');
  }


  public ngOnInit(){
    console.log('CarbonFootprintComponent instancié');
  }

  ngAfterViewInit(){
    console.log('Vu chargééééééeeee')
  }

  ngOnDestroy(){
    console.log('Le composant est détruit !')
  }

  ajouter100KM() {
    this.distanceKm+= 100;
  }
}
