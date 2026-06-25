import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About SaivaTech | Tech & Automation Agency in Kovilpatti',
  description: 'Meet Durai Gajendran and the SaivaTech team based in Kovilpatti, Tamil Nadu. Learn how we build custom software and WhatsApp automation systems to scale local businesses.',
  keywords: ["About SaivaTech", "Durai Gajendran", "Kavilpatti software agency", "Tamil Nadu automation team"],
};

export default function AboutPage() {
  return <AboutClient />;
}
