import Decimal from "decimal.js";

export class Money {

  constructor(
    private readonly amount: Decimal
  ) {}

  public getAmount(): Decimal {
    return this.amount
  }

  public isGreaterThanZero(): boolean {
    return this.amount !== null && this.amount.greaterThan(0)
  }

  public isGreaterThan(money: Money): boolean {
    return this.amount !== null && this.amount.greaterThan(money.getAmount())
  }

  public add(money: Money): Money {
    return new Money(this.toFixed(this.amount.add(money.getAmount())) )
  }

  public subtract(money: Money): Money {
    return new Money(this.toFixed(this.amount.minus(money.getAmount())))
  }

  public multiply(multiplier: number): Money {
    return new Money(this.toFixed(this.amount.mul(multiplier)))
  }

  private toFixed(amount: Decimal): Decimal {
    return amount.toDP(2)
  }

}