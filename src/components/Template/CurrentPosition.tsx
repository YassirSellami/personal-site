'use client';
import { useEffect, useState } from 'react';

const EXPERIENCE_START = '2018-02-01T00:00:00';

function experience() {
  const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2421897;

  const UPDATE_INTERVAL = 25;

  const PRECISION = 7;

  const [experience, setExperience] = useState<string>('');

  const tick = () => {
    const birthTime = new Date(EXPERIENCE_START);
    setExperience(((Date.now() - birthTime.getTime()) / MS_PER_YEAR).toFixed(PRECISION));
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), UPDATE_INTERVAL);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return experience;
}
export default function CurrentPosition() {
  return (
    <div>
      <p className="hero-tagline">
        Currently a Tech Lead at{' '}
        <a href="https://gaia-x.eu" className="hero-highlight">
          Gaia-X AISBL
        </a>{' '}
          with <span className="resume-strong">{experience()}</span> years of experience in Software
          Engineering.
      </p>
    </div>
  );
}
