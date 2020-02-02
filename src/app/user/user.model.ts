export enum MeterType {
  COLD_WATER_METER = 'COLD_WATER_METER',
  HOT_WATER_METER = 'HOT_WATER_METER'
}

export interface Meter {
  meterNumber: string;
  type: MeterType;
}

export interface User {
  meters: Meter[];
}
