import { BaseID } from "./base-id";

export class CustomerID extends BaseID<string> {


  constructor(value: string) {
    super(value)
  }

}