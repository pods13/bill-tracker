import {Component, Input, OnInit} from '@angular/core';
import {MeterType} from '../meter.model';
import {Reading} from '../reading.model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  @Input()
  meterNumberByType: { [meterNumber: string]: MeterType };
  @Input()
  lastReading: Reading;

  period: { from: Date, to: Date };

  form: FormGroup;
  meterData: FormArray;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.definePeriod();
    this.meterData = this.fb.array([]);
    this.form = this.fb.group({
      readDate: Timestamp.now(),
      meterData: this.meterData
    });
    this.composeMeterData().forEach(group => this.meterData.push(group));
  }

  private composeMeterData(): FormGroup[] {
    return Object.keys(this.meterNumberByType).map(meterNumber => {
      if (!this.lastReading) {
        return this.fb.group({
          meterNumber, currentRead: null, previousRead: null
        });
      }
      const meterData = this.lastReading.meterData.find((data) => data.meterNumber === meterNumber);
      if (this.isCurrentMonth(this.lastReading.readDate.toDate())) {
        return this.fb.group(meterData);
      } else {
        return this.fb.group({
          meterNumber,
          currentRead: null,
          previousRead: meterData.currentRead
        });
      }
    });
  }

  private definePeriod() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const from = new Date(year, month, 1);
    const to = new Date(year, month + 1, 0);
    this.period = {from, to};
  }

  private isCurrentMonth(date: Date): boolean {
    const now = new Date();
    return now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear();
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
