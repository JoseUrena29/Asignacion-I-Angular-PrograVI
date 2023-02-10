import { Component } from '@angular/core';
import { bikeData } from 'src/data/bike.data';
import { tableData } from 'src/data/table.data';
import { Bike } from 'src/model/bike.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  bikeList = bikeData;
  tableList = tableData;

  onBikeSelected(bike: Bike){
    console.log("Card onCardClick", bike);
  }
}
