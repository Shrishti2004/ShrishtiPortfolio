import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Skills,
  Certificates, // new import
} from '@/containers';

import type { NextPage } from 'next';



const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <Certificates /> {/* new Certificates section */}
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
