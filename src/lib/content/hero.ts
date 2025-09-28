import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Shrishti Bandooni.',
  tagline: 'I create solutions for Cloud and web Development.',
  description:
    "I'm a passionate Cloud and Web Development enthusiast with hands-on practice in AWS, Docker, Java, SQL, and Web Technologies. Focused on learning, applying skills, and contributing to practical solutions. ",
  specialText: 'Currently available for Job',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
