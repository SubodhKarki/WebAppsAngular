import { Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges { // OnChanges lifesycle hooks, implementing OnChanges Interface
  @Input() rating: number; // input decorator function(), no need to pass anything this function
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();


ngOnChanges(): void { // OnChanges method identified in the OnChanges interface above.
  this.starWidth = this.rating * 75 / 5;

  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);

  }

}
