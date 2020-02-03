import {Component, OnInit} from '@angular/core';
import {MeterService} from '../meter.service';
import {Meter} from '../meter.model';

@Component({
  selector: 'app-readings-page',
  templateUrl: './readings-page.component.html',
  styleUrls: ['./readings-page.component.scss']
})
export class ReadingsPageComponent implements OnInit {

  meters: Meter[];

  constructor(private meterService: MeterService) {
  }

  ngOnInit() {
    this.meterService.getMeters()
      .subscribe((meters) => {
        this.meters = meters;
      });
  }

}
