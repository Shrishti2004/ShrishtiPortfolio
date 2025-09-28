'use client';
import { useState } from 'react';
import { TabList } from '@/components';
import { experienceSection } from '../lib/content/experience';
import { educationSection } from '../lib/content/education';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const section = activeTab === 'experience' ? experienceSection : educationSection;

  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{section.title}</h2>

      {/* Toggle buttons */}
      <div className="flex gap-4 my-6">
        <button
          onClick={() => setActiveTab('experience')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'experience'
              ? 'bg-primary text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          Training & Experience
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'education'
              ? 'bg-primary text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          Education
        </button>
      </div>

      {/* Tab list renders either experiences or education */}
      <TabList experiences={section.experiences} />
    </motion.section>
  );
};

export default Experience;
