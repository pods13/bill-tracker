import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Meter, MeterType} from '../user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.createMeterForm();
    this.userService.getUserMeters().subscribe((doc) => {
      if (doc.exists) {
        this.router.navigate(['/bills']).catch(console.error);
      }
    });
  }

  private createMeterForm() {
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
    console.log(meters);
    this.userService.saveMeters(meters).subscribe(() => {
      // TODO show snackbar that meters were saved
      // TODO route to next page
    });
  }
}
