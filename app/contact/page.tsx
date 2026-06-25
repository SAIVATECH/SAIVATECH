import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Get a Free Automation Audit | Contact SaivaTech',
  description: 'Book your free 15-minute WhatsApp automation audit. Chat directly with Gajendran and our engineering team in Kovilpatti, Tamil Nadu.',
  keywords: ["Contact SaivaTech", "automation audit call", "Kovilpatti office phone", "WhatsApp API developer contact"],
};

export default function ContactPage() {
  return <ContactClient />;
}
