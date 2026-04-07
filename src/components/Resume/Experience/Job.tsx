import dayjs from 'dayjs';

import type { Position } from '@/data/resume/work';

import JobSummary from './JobSummary';

interface JobProps {
  data: Position;
}

export default function Job({ data }: JobProps) {
  const {
    name,
    position,
    url,
    startDate,
    endDate,
    summary,
    highlights,
    techStack,
    projectName,
  } = data;

  return (
    <article className="jobs-container">
      <header>
        <span className="daterange">
          {' '}
          <time dateTime={startDate}>
            {dayjs(startDate).format('MMMM YYYY')}
          </time>{' '}
          -{' '}
          {endDate ? (
            <time dateTime={endDate}>{dayjs(endDate).format('MMMM YYYY')}</time>
          ) : (
            'Present'
          )}
        </span>
        <h4>
          {name} - {position}
        </h4>
        {projectName && (
          <a className={'project-name'} href={url}>
            {projectName}
          </a>
        )}
      </header>
      {summary ? <JobSummary summary={summary} /> : null}
      {highlights ? (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
      {techStack ? (
        <div className="tech-chips">
          {techStack.map((tech) => (
            <a className="tech-chip" href="#skills" key={tech}>
              {tech}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
