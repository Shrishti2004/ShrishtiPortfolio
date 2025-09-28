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
            className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(${cert.img})`,
                filter: 'brightness(0.35) contrast(1.1)',
              }}
            >
              <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/40"></div>
            </div>

            {/* Overlay Text */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <h3
                  className="text-2xl md:text-3xl font-serif font-extrabold mb-2"
                  style={{ color: '#38bdf8' }}
                >
                  {cert.title}
                </h3>
                <p className="text-sm md:text-base font-mono text-gray-300 mb-4">
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
                  className="flex items-center text-blue-400 font-semibold text-sm hover:text-blue-500 hover:underline"
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
