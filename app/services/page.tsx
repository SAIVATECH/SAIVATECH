import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'AI Chatbots & WhatsApp Funnels | SaivaTech Services',
  description: 'Explore our automation services: official WhatsApp API funnels, custom AI conversational chatbot agents, and fast high-conversion web development.',
  keywords: ["WhatsApp funnels Tamil Nadu", "AI chatbot services Kovilpatti", "Next.js web development Madurai", "lead generation engines"],
};

export default function ServicesPage() {
  return <ServicesClient />;
}
