'use client';

import React from 'react';
import { Wrapper } from '@/components';
import certificatesSection from '@/lib/content/certificates';
import { motion } from 'framer-motion';
import { getSectionAnimation } from '@/styles/animations';
import { Icon } from '@iconify/react';

const Certificates = () => {
  return (
    <Wrapper id="certificates" {...getSectionAnimation}>
      <div className="mb-16 text-center lg:text-left">
        <h2 className="heading-secondary !mb-0 capitalize">
          {certificatesSection.title}
        </h2>
        <p className="font-mono lg:hidden text-accent capitalize text-xs mt-2">
          certifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificatesSection.certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ 
              backgroundImage: `url(${cert.img})`, 
              filter: 'brightness(0.4)' // makes image slightly darker/transparent
              }
              }>
              <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/40"></div>
          </div>

            {/* Text Overlay */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-1" style={{ color: '#38bdf8' }}>
  {cert.title}
</h3>
<p className="text-sm md:text-base font-mono text-gray-200 mb-4">
  {cert.date}
</p>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
  {cert.description}
              </p>

              </div>

              {/* See Certificate Button */}
              <div className="mt-6 flex justify-end">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-accent font-semibold text-sm hover:underline"
                >
                  See Certificate <Icon icon="akar-icons:arrow-right" className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Certificates;
