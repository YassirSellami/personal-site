import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Yassir Sellami');
  });

  it('displays hero chips for credentials', () => {
    render(<Hero />);
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile apps')).toBeInTheDocument();
    expect(screen.getByText('Technical Architecture')).toBeInTheDocument();
    expect(screen.getByText('Decentralized systems')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Hero />);

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('button-primary');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
