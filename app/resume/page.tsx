import type { Metadata } from 'next';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import Languages from '@/components/Resume/Languages';
import References from '@/components/Resume/References';
import ResumeHeader from '@/components/Resume/ResumeHeader';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import degrees from '@/data/resume/degrees';
import languages from '@/data/resume/languages';
import { categories, skills } from '@/data/resume/skills';
import { currentPosition, work } from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description: currentPosition,
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <ResumeHeader />

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="languages" className="resume-section">
            <Languages data={languages} />
          </section>

          {/*<section id="certifications" className="resume-section">*/}
          {/*  <Certifications data={certifications} />*/}
          {/*</section>*/}

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
