export interface ICar {
  id?: number,
  brand?: string,
  model?: string,
  manufacture_year?: string,
  engine_power?: number,
  fuel_type?: string,
  price_per_day?: number
}

export class Car implements ICar {
  constructor(
    public id?: number,
    public brand?: string,
    public model?: string,
    public manufacture_year?: string,
    public engine_power?: number,
    public fuel_type?: string,
    public price_per_day?: number,
  ) {
  }
}
