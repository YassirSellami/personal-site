import Link from 'next/link';
import CurrentPosition from '@/components/Template/CurrentPosition';
import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={200} height={200} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Yassir Sellami</span>
        </h1>

        <CurrentPosition />

        <div className="hero-chips">
          <span className="hero-chip">Web Development</span>
          <span className="hero-chip">Mobile apps</span>
          <span className="hero-chip">Technical Architecture</span>
          <span className="hero-chip">Decentralized systems</span>
        </div>

        <div className="hero-cta">
          <Link href="/resume" className="button button-primary">
            View Resume
          </Link>
          <Link href="/contact" className="button button-secondary">
            Get in touch
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
