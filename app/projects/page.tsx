import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Case Studies & Automation Results | SaivaTech',
  description: 'See the results we achieved for Tamil Nadu businesses, including Ayyappas Academy, Arnold Gym, and Siva Sakthi Transports.',
  keywords: ["SaivaTech case studies", "WhatsApp automation results", "software project deployments", "local business success stories"],
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
