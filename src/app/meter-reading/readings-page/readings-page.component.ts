import {Component, OnInit} from '@angular/core';
import {MeterService} from '../meter.service';
import {Meter, MeterType} from '../meter.model';
import {ReadingService} from '../reading.service';
import {combineLatest, forkJoin} from 'rxjs';
import {Reading} from '../reading.model';

@Component({
  selector: 'app-readings-page',
  templateUrl: './readings-page.component.html',
  styleUrls: ['./readings-page.component.scss']
})
export class ReadingsPageComponent implements OnInit {

  meterNumberByType: {[key: string]: MeterType};
  lastReading: Reading;

  constructor(private meterService: MeterService, private readingService: ReadingService) {
  }

  ngOnInit() {
    combineLatest([this.meterService.getMeters(), this.readingService.getReadings()])
      .subscribe(([meters, readings]) => {
        this.meterNumberByType = meters.reduce((res, {meterNumber, type}) => {
          res[meterNumber] = type;
          return res;
        }, {});
        this.lastReading = readings[0];
      }, (err) => console.error(err));
  }
}
