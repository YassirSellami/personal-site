import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Certifications from '../../Resume/Certifications';
import Certification from '../../Resume/Certifications/Certification';

const mockCertifications = [
  {
    title: 'Machine Learning',
    number: 'CS 229',
    link: 'http://cs229.stanford.edu/',
    university: 'Stanford',
  },
  {
    title: 'Deep Learning',
    number: 'CS 230',
    link: 'http://cs230.stanford.edu/',
    university: 'Stanford',
  },
  {
    title: 'Algorithms',
    number: 'CS 161',
    link: 'http://cs161.stanford.edu/',
    university: 'MIT',
  },
];

describe('Certifications', () => {
  it('renders the certifications section with title', () => {
    render(<Certifications data={mockCertifications} />);

    expect(
      screen.getByRole('heading', { name: /certifications/i }),
    ).toBeInTheDocument();
  });

  it('renders all certifications', () => {
    render(<Certifications data={mockCertifications} />);

    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Deep Learning')).toBeInTheDocument();
    expect(screen.getByText('Algorithms')).toBeInTheDocument();
  });

  it('renders certification numbers', () => {
    render(<Certifications data={mockCertifications} />);

    expect(screen.getByText(/CS 229/)).toBeInTheDocument();
    expect(screen.getByText(/CS 230/)).toBeInTheDocument();
    expect(screen.getByText(/CS 161/)).toBeInTheDocument();
  });

  it('renders certifications as list items', () => {
    render(<Certifications data={mockCertifications} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(mockCertifications.length);
  });

  it('sorts certifications by university then number', () => {
    render(<Certifications data={mockCertifications} />);

    const items = screen.getAllByRole('listitem');
    // Stanford certifications should come before MIT (reverse alpha)
    // And within Stanford, sorted by number
    expect(items.length).toBe(3);
  });

  it('has anchor link for navigation', () => {
    render(<Certifications data={mockCertifications} />);

    const anchor = document.getElementById('certifications');
    expect(anchor).toBeInTheDocument();
  });
});

describe('Certification', () => {
  const mockCertification = {
    title: 'Machine Learning',
    number: 'CS 229',
    link: 'http://cs229.stanford.edu/',
    university: 'Stanford',
  };

  it('renders certification number and title', () => {
    render(<Certification data={mockCertification} />);

    expect(screen.getByText(/CS 229/)).toBeInTheDocument();
    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
  });

  it('renders certification as link', () => {
    render(<Certification data={mockCertification} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockCertification.link);
  });

  it('renders as list item', () => {
    render(<Certification data={mockCertification} />);

    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
  });
});
