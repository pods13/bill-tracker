import {Component, Input, OnInit} from '@angular/core';
import {Meter} from '../meter.model';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  @Input()
  meters: Meter[];

  constructor() { }

  ngOnInit() {
  }

}
