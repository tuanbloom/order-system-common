import { BaseID } from "./base-id";

export class OrderID extends BaseID<string> {


  constructor(value: string) {
    super(value)
  }

}