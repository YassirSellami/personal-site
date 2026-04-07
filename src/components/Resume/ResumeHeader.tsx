'use client';
import Link from 'next/link';
import CurrentPosition from '@/components/Template/CurrentPosition';

export default function ResumeHeader() {
  return (
    <header className="resume-header">
      <h1 className="resume-title">Resume</h1>
      <CurrentPosition />
      <Link
        className="button button-primary"
        type="button"
        href={
          'https://github.com/YassirSellami/personal-site/releases/download/v1/resume-en.pdf'
        }
        target={'_blank'}
      >
        Download PDF
      </Link>
    </header>
  );
}
