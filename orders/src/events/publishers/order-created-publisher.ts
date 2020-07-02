import { Publisher, OrderCreatedEvent, Subjects } from '@jwtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
};