export interface Pollution {
  id:number; 
  period: string;
  subject: string;
  municipality: string;
  settlement: string;
  oktmo: string;
  water_body: string;
  indicator: string;
  hazard_class: string;
  cnt_cases: number;
  value_min: number;
  value_max: number;
  unit: number;
  lat: number;
  lon: number;
}
