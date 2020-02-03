import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Meter, MeterType} from '../meter.model';
import {MeterService} from '../meter.service';

@Component({
  selector: 'app-register-meters',
  templateUrl: './register-meters.component.html',
  styleUrls: ['./register-meters.component.scss']
})
export class RegisterMetersComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private meterService: MeterService) {
  }

  ngOnInit() {
    this.createMetersForm();
  }

  private createMetersForm() {
    this.form = this.formBuilder.group({
      coldWaterMeter: ['', Validators.required],
      hotWaterMeter: ['', Validators.required]
    });
  }

  onSubmit() {
    const meters: Meter[] = [
      {meterNumber: this.form.get('coldWaterMeter').value, type: MeterType.COLD_WATER_METER},
      {meterNumber: this.form.get('hotWaterMeter').value, type: MeterType.HOT_WATER_METER},
    ];
    this.meterService.saveMeters(meters).subscribe(() => {
      console.log(`Meters saved`, meters);
    });
  }
}
