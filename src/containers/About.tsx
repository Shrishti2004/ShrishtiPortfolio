'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Shrishti Bandooni, a final-year B.Tech student at{' '}
            <Link
              href="https://niet.co.in/"
              target="_blank"
              className="text-accent"
            >
              Noida Institute of Engineering and Technology, Greater Noida.</Link> Percentage: 71.50% .
              </p>
             <p>I'm a Cloud and Web Development enthusiast with hands-on practice in AWS, Docker, Java, SQL, and Web Technologies.</p>
          
          <p>
             I am focused on learning, applying skills, and contributing to practical solutions.{' '}
            {/* <Link
              href="https://www.pixelwand.live/"
              target="_blank"
              className="text-accent"
            >
              Pixelwand
            </Link> */}
            .
          </p>
          <p>
            My main focus these days is Cloud Computing and finding
            a decent job.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
