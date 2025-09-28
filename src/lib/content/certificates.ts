// lib/content/certificates.ts
import { getId } from '@/lib/utils/helper';
import { CertificatesSectionType, CertificateType } from '@/lib/types/sections';

const certificates: CertificateType[] = [
  {
    id: getId(),
    date: 'January 2023',
    title: 'Introduction to Artificial Intelligence (AI)',
    description:
      'IBM certification covering AI fundamentals, machine learning, deep learning, and neural networks. Includes practical insights into generative AI, its applications in business, and designing AI-driven solutions with ethical considerations.',
    link: 'https://www.coursera.org/account/accomplishments/verify/3VWT7GFNX49U',
    img: '/card-background/card-bg-1.jpeg',
  },
  {
    id: getId(),
    date: 'January 2023',
    title: 'Python Basics',
    description:
      'University of Michigan certification for learning Python 3 basics, including conditional statements, loops, and data structures like strings and lists. Developing practical programming skills by creating drawings and building your debugging abilities.',
    link: 'https://www.coursera.org/account/accomplishments/verify/A5TLQZD69PGZ',
    img: '/card-background/card-bg-2.jpg',
  },
  {
    id: getId(),
    date: 'March 2023',
    title: 'Python for Data Science, AI & Development',
    description:
      'IBM certification covering Python fundamentals, data structures, web scraping, APIs, and data analysis. Includes hands-on projects in data science and AI development.',
    link: 'https://www.coursera.org/account/accomplishments/verify/VX9TBCVXNNVW',
    img: '/card-background/card-bg-3.jpg',
  },
  {
    id: getId(),
    date: 'March 2023',
    title: 'Human-Centered Design for Inclusive Innovation',
    description:
      'University of Toronto certification on human-centered design. Focused on understanding user perspectives, uncovering hidden needs, reframing problems, and involving stakeholders through ideation, prototyping, and testing.',
    link: 'https://www.coursera.org/account/accomplishments/verify/MMQZ9VWSYN3F',
    img: '/card-background/card-bg-4.jpg',
  },
  {
    id: getId(),
    date: 'May 2024',
    title: 'Java Programming Fundamentals',
    description:
      'This Comprehensive certification covers basic concepts of Java like, DataTypes, Loops, Conditional Statements, Arrays.',
    link: 'https://drive.google.com/file/d/17mCN6j3BfQ3DyP90DTmUZjxy5W-xRF53/view?usp=sharing',
    img: '/card-background/card-bg-10.jpg',
  },
  {
    id: getId(),
    date: 'November 2023',
    title: 'Java Programming: Arrays, Lists, and Structured Data',
    description:
      'Duke University certification on advanced Java programming. Covers arrays, ArrayLists, HashMaps, file handling, and data analysis. Includes projects like text analysis, log processing, encryption (Vigenère Cipher), and multi-class OOP design.',
    link: 'https://www.coursera.org/account/accomplishments/verify/T5XGSM4CRWZA',
    img: '/card-background/card-bg-5.jpg',
  },

  {
    id: getId(),
    date: 'November 2023',
    title: 'Object Oriented Programming in Java',
    description:
      'UC San Diego certification in Java OOP concepts including inheritance, polymorphism, encapsulation, and abstraction. Covers advanced Java programming techniques and best practices.',
    link: 'https://www.coursera.org/account/accomplishments/verify/L5XBQARPXKMX',
    img: '/card-background/card-bg-6.jpg',
  },
  {
    id: getId(),
    date: 'September 2024',
    title: 'Database Management System - Science Graduates',
    description:
      'Comprehensive certification covering relational database fundamentals, ER diagrams, and SQL concepts including DDL, DML, functions, sorting, grouping, joins, and subqueries. Includes hands-on assignments with real-world database queries and assessments.',
    link: 'https://drive.google.com/file/d/1b5T2Xj183dYDd5vVcZCZjaVTL-1TME7S/view?usp=drive_link',
    img: '/card-background/card-bg-7.jpg',
  },
  {
    id: getId(),
    date: 'September 2024',
    title: 'Network Management Systems Fundamentals',
    description:
      'Certification on fundamentals of Network Management Systems (NMS), covering architecture, FCAPS (fault, config, accounting, performance, security), TMN layers, and practical NMS implementation.',
    link: 'https://drive.google.com/file/d/14aiE4Js8b0StyyMMTr_6UH1vHhZL2_JH/view?usp=drive_link',
    img: '/card-background/card-bg-8.jpg',
  },
  {
    id: getId(),
    date: 'March 2025',
    title: 'Introduction to AI & ML',
    description:
      'Comprehensive certification covering Python programming, data analysis, visualization, and machine learning fundamentals. Includes hands-on projects on exploratory data analysis, regression, classification, clustering, and an introduction to deep learning with neural networks.',
    link: 'https://drive.google.com/file/d/1mS6hq0jfbJ-24NhDRTBm45_V3ohgGmpW/view?usp=drive_link',
    img: '/card-background/card-bg-9.jpg',
  },
  
  {
    id: getId(),
    date: 'August 2025',
    title: 'Deep Learning for Developers',
    description:
      'Comprehensive certification on Deep Learning, covering neural networks, CNNs, RNNs, autoencoders, GANs, optimization, and practical AI applications using Python and TensorFlow.',
    link: 'https://drive.google.com/file/d/1j5u4-lLDghUZoQZbkxgBkUz1P4K00eEk/view?usp=sharing',
    img: '/card-background/card-bg-11.jpeg',
  },

  {
    id: getId(),
    date: 'August 2025',
    title: 'Continuous Integration and Delivery - DevOps',
    description:
      'Certification on DevOps principles with a focus on CI/CD. Covers fundamentals, tool stacks, version control, automated testing, build automation, artifact management, containerization, environment provisioning, and delivery & deployment.',
    link: 'https://drive.google.com/file/d/1esXCKsa4Vb4jloJb-h01WzMMqMyYk8Fb/view?usp=sharing',
    img: '/card-background/card-bg-12.jpeg',
  },
];

const certificatesSection: CertificatesSectionType = {
  title: "Certifications I've Earned",
  certificates,
};

export default certificatesSection;
