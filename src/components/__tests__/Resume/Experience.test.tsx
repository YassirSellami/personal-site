import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Experience from '../../Resume/Experience';
import { Position } from '@/data/resume/work';

const mockJobs: Position[] = [
  {
    name: 'Acme Corp',
    position: 'Senior Engineer',
    url: 'https://acme.com',
    startDate: '2020-01-01',
    endDate: '2023-06-30',
    summary: 'Led engineering team.',
    highlights: ['Built features', 'Improved performance'],
    projectName: 'test'
  },
  {
    name: 'Startup Inc',
    position: 'Software Engineer',
    url: 'https://startup.com',
    startDate: '2018-01-01',
    endDate: '2019-12-31',
    highlights: ['Wrote code'],
    projectName: 'test'
  },
];

describe('Experience', () => {
  it('renders the experience section with title', () => {
    render(<Experience data={mockJobs} />);

    expect(
      screen.getByRole('heading', { name: /experience/i }),
    ).toBeInTheDocument();
  });

  it('renders all jobs', () => {
    render(<Experience data={mockJobs} />);

    expect(screen.getByText('Acme Corp - Senior Engineer')).toBeInTheDocument();
    expect(screen.getByText('Startup Inc - Software Engineer')).toBeInTheDocument();
  });

  it('renders job positions', () => {
    render(<Experience data={mockJobs} />);

    expect(screen.getByText(/Senior Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/)).toBeInTheDocument();
  });

  it('has anchor link for navigation', () => {
    render(<Experience data={mockJobs} />);

    const anchor = document.getElementById('experience');
    expect(anchor).toBeInTheDocument();
  });

  it('handles empty jobs array', () => {
    render(<Experience data={[]} />);

    expect(
      screen.getByRole('heading', { name: /experience/i }),
    ).toBeInTheDocument();
    // No job articles
    const articles = document.querySelectorAll('.jobs-container');
    expect(articles.length).toBe(0);
  });
});
