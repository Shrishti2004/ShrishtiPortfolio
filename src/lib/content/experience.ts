import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked & Trained",
  experiences: [
    {
      company: 'Java SDE Trainee - MyAnatomy',
      companyUrl: 'https://myanatomy.ai/',
      role: 'Java SDE Trainee',
      started: 'aug 2025',
      upto: 'sep 2025',
      tasks: [
        'Trained in Java (OOP, Spring Boot basics), SQL (CRUD, Joins), and Cloud fundamentals. ',
        'Built a capstone project following SDLC practices. ',
        'Certified with Grade A+.'
      ],
    },
    {
      company: 'Cloud Computing Trainee - NIET',
      companyUrl: 'https://www.niet.co.in/',
      role: 'Cloud Computing',
      started: 'Oct 2024',
      upto: 'nov 2024',
      tasks: [
        'Practiced AWS services including EC2, S3, IAM, and CloudWatch.',
        'Worked on small-scale deployments and basic cloud security concepts. ',
        'Gained exposure to Docker for containerization.',
      ],
    },
  ],
};
