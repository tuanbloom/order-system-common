export abstract class BaseEntity<ID> {

  constructor (private id: ID) {}

  public getId(): ID {
    return this.id
  }


  public setId(id: ID) {
    this.id = id
  }


}