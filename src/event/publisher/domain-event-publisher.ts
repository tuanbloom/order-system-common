import { DomainEvent } from "../domain-event";

export interface DomainEventPublisher<T extends DomainEvent<T>> {
  publish(domainEvent: T): void;
}
