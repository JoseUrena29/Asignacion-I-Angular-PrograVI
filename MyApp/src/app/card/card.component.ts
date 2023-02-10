import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bike } from 'src/model/bike.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
    bike!: Bike

    @Output()
    BikeSelected = new EventEmitter<Bike>();

    onCardClick(){
      console.log("Card onCardClick");
      this.BikeSelected.emit(this.bike);
    };
}

