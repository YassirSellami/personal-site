import type { Metadata } from 'next';

import { PersonSchema } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';

import { currentPosition } from '@/data/resume/work';

export const metadata: Metadata = {
  description: currentPosition,
};

export default function HomePage() {
  return (
    <PageWrapper>
      <PersonSchema />
      <Hero />
    </PageWrapper>
  );
}
