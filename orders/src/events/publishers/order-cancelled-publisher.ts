import { Publisher, OrderCancelledEvent, Subjects } from '@jwtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
};