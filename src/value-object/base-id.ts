export abstract class BaseID<T> {
  protected constructor(private value: T) {}

  public getValue(): T {
    return this.value;
  }

  public setValue(value: T) {
    this.value = value;
  }

  public equals(id: T): boolean {
    return id === this.value;
  }
}
