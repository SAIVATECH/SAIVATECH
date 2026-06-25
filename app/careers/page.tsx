import type { Metadata } from 'next';
import CareersClient from './CareersClient';

export const metadata: Metadata = {
  title: 'Careers | Join SaivaTech Automation Agency',
  description: 'Join SaivaTech in Kovilpatti. We are looking for talented developers, designers, and automation specialists to help scale businesses across Tamil Nadu.',
  keywords: ["SaivaTech careers", "Kovilpatti developer jobs", "automation agency hiring", "React developer Tamil Nadu"],
};

export default function CareersPage() {
  return <CareersClient />;
}
