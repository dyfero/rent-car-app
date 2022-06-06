export interface IRent {
  id?: number,
  customer?: number,
  car?: number,
  start_date?: Date,
  end_date?: Date,
  price?: number,
}

export class Rent implements IRent {
  constructor(
    public id?: number,
    public customer?: number,
    public car?: number,
    public start_date?: Date,
    public end_date?: Date,
    public price?: number,
  ) {
  }
}
