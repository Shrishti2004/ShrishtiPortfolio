import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Cloud Computing',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/Cloud.json',
        dark: '/lotties/Cloud.json',
      },
      points: [
        'I design and deploy applications on AWS using EC2, S3, IAM, and CI/CD pipelines with Jenkins, Docker, and SonarQube.',
        'Experienced in automation, monitoring, and secure deployments.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'aws', icon: 'vscode-icons:file-type-aws' },
        { name: 'azure', icon: 'vscode-icons:file-type-azure' },
        { name: 'mongodb', icon: 'vscode-icons:file-type-sql' },
        { name: 'docker', icon: 'vscode-icons:file-type-docker'},
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'github', icon: "simple-icons:github" },
      ],
    },
    {
      id: getId(),
      title: 'Web Development',
      lottie: {
        light: '/lotties/fullstack.json',
        dark: '/lotties/fullstack.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'github', icon: "simple-icons:github" },
      ],
    },
    {
      id: getId(),
      title: 'Database Design & Management',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        "Designing efficient database schemas and relationships.",
        "Experience with relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.",
      ],
      softwareSkills: [
        { name: "MySQL", icon: "logos:mysql" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "MongoDB", icon: "vscode-icons:file-type-mongo" },
        { name: "SQLite", icon: "vscode-icons:file-type-sqlite" },
      ],
    }
  ]

};
