import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';



export const projectsSection: ProjectsSectionType = {
  title: 'Certifications',
  projects: [
    {
      id: getId(),
      name: 'BanduCart',
      url: 'https://bandu-cart.vercel.app/',
      repo: 'https://github.com/Shrishti2004/BanduCart.git',
      img: '/images/banducart.png',
      year: 2025,
      tags: ['React', 'TailwindCSS','Vercel'],
    },
    {
      id: getId(),
      name: 'Netflix-Cloud',
      url: '',
      repo: 'https://github.com/Shrishti2004/Netflix-Cloud.git',
      img: '/images/netflix.png',
      year: 2025,
      tags: ['HTML','CSS Animations', 'AWS'],
    },
    {
      id: getId(),
      name: 'Personal Portfolio',
      url: 'https://buttons-animations-kv.vercel.app/',
      repo: 'https://github.com/vatsalsinghkv/button-animations',
      img: 'https://buttons-animations-kv.vercel.app/og.png',
      year: 2025,
      tags: ['Typescript','CSS Animations', 'Vercel'],
    },
  ],
};
