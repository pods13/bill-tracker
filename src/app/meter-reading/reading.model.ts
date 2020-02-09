import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

export class Reading {
  readDate: Timestamp;
  meterData: [{
    meterNumber: string;
    currentRead: number;
    previousRead: number;
  }];
}
