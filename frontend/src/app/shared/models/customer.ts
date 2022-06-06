export interface ICustomer {
  id?: number,
  first_name?: string,
  last_name?: string,
  city?: string,
  postal_code?: string,
  street?: string,
  street_number?: string
  flat_number?: string
}

export class Customer implements ICustomer {
  constructor(
    public id?: number,
    public first_name?: string,
    public last_name?: string,
    public city?: string,
    public postal_code?: string,
    public street?: string,
    public street_number?: string,
    public flat_number?: string,
  ) {
  }
}
