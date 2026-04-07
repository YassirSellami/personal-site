import { describe, expect, it } from 'vitest';

import certifications from '../resume/certifications';

describe('certifications data', () => {
  it('exports an array of certifications', () => {
    expect(Array.isArray(certifications)).toBe(true);
    expect(certifications.length).toBeGreaterThan(0);
  });

  it('each certification has required properties', () => {
    for (const certification of certifications) {
      expect(certification).toHaveProperty('title');
      expect(certification).toHaveProperty('number');
      expect(certification).toHaveProperty('link');
      expect(certification).toHaveProperty('university');

      expect(typeof certification.title).toBe('string');
      expect(typeof certification.number).toBe('string');
      expect(typeof certification.link).toBe('string');
      expect(typeof certification.university).toBe('string');
    }
  });

  it('certification numbers are non-empty', () => {
    for (const certification of certifications) {
      expect(certification.number.trim().length).toBeGreaterThan(0);
    }
  });

  it('certification titles are non-empty', () => {
    for (const certification of certifications) {
      expect(certification.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('links are valid URLs', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const certification of certifications) {
      expect(certification.link).toMatch(urlRegex);
    }
  });

  it('has unique certification titles', () => {
    const titles = certifications.map((c) => c.title);
    const uniqueTitles = new Set(titles);

    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('has unique certification numbers', () => {
    const numbers = certifications.map((c) => c.number);
    const uniqueNumbers = new Set(numbers);

    expect(uniqueNumbers.size).toBe(numbers.length);
  });

  it('all certifications have valid university names', () => {
    for (const certification of certifications) {
      expect(certification.university.trim().length).toBeGreaterThan(0);
    }
  });
});
