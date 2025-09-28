import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'BanduCart',
      description: 'An E-Commerce Electronics Web Platform',
      tasks:
        "Built a responsive e-commerce web app for electronic items with React.js, MySQL, and Clerk authentication. Enhanced UX with cart persistence, toast notifications, and deployed on Vercel.",
      url: 'https://bandu-cart.vercel.app/',
      img: '/images/banducart.png',
      tags: [
        'React',
        'TailwindCSS',
        'Github',
        'Vercel',
        
      ],
    },
    {
      id: getId(),
      name: 'NetflixCloud',
      description: 'A Netflix clone deployed on Cloud',
      tasks:
        'I deployed a Netflix clone application on AWS using containerized deployment and Configured monitoring using CloudWatch',
      url: 'https://github.com/Shrishti2004/Netflix-Cloud.git',
      img: '/images/netflix.png',
      tags: ['HTML', 'CSS', 'AWS', 'CloudWatch', 'Docker'],
    },
    {
      id: getId(),
      name: 'Personal Portfolio',
      description:
        'A personal portfolio to share my details',
      tasks:
        'I have created a personal portfolio using Typescript to showcase my Career, Education, Projects and Certification.',
      url: 'https://shrishti-portfolio-nu.vercel.app/',
      img: '/images/portfolio.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'Verccel'],
    },

  ],
};

export default featuredProjectsSection;
