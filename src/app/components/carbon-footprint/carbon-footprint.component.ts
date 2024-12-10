import { Component } from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {DecimalPipe, NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    NgClass,
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {


  public randomConsommationPour100Km? : number;
  public voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ]



  public readonly maxConsumtion : number = 7;
  public readonly minConsumption : number = 4;
  public distanceKm : number = this.voyages.length;
  public consommationPour100Km :  number =  3;
  public consomationTotale : number =  this.distanceKm / 100 * this.consommationPour100Km;
  public randomDistanceKm? : number;


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

  addVoyage(){
    this.randomDistanceKm = Math.floor(Math.random() * 100);
    this.randomConsommationPour100Km = Math.floor(Math.random() * 10);
    this.voyages.push({
      distanceKm : this.randomDistanceKm, consommationPour100Km : this.randomConsommationPour100Km
    })
    this.calculateDistanceAndAverage()
    // this.distanceKm++;
  }

  public calculateDistanceAndAverage(){
    let totalDistance  = 0;
    let average = 0;
    for (const voyage of this.voyages){
      totalDistance += voyage.distanceKm;
      average += voyage.consommationPour100Km;
    }
    this.distanceKm = totalDistance;
    this.consommationPour100Km =  average / this.voyages.length;
  }
}
