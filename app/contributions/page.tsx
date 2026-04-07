import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import contributions from '@/data/contributions';
import { createPageMetadata } from '@/lib/metadata';
import { getAllPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Contributions',
    description: 'Papers, Articles and other contributions.',
    path: '/contributions/',
  })
};

interface UnifiedItem {
  title: string;
  url: string;
  authors: string[];
  date: string;
  description: string;
  isExternal: boolean;
}

// Extracted component to reduce duplication
interface ContributionsItemProps {
  item: UnifiedItem;
  showDate?: boolean;
}

function ContributionsItem({ item, showDate = true }: ContributionsItemProps) {
  const content = (
    <>
      {showDate && item.date && (
        <time className="contributions-date" dateTime={item.date}>
          {formatDate(item.date)}
        </time>
      )}
      <h2 className="contributions-title">{item.title}</h2>
      <p className="contributions-date">
        {item.authors.join(', ')}
      </p>
      <p className="contributions-description">{item.description}</p>
      {item.isExternal && (
        <span className="contributions-external" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );

  if (item.isExternal) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="contributions-item">
        {content}
      </a>
    );
  }

  return (
    <Link href={item.url} className="contributions-item">
      {content}
    </Link>
  );
}

export default function ContributionsPage() {
  // Get internal posts from markdown files
  const internalPosts = getAllPosts();
  const internalItems: UnifiedItem[] = internalPosts.map((post) => ({
    title: post.title,
    url: `/contributions/${post.slug}`,
    authors: post.authors,
    date: post.date,
    description: post.description,
    isExternal: false,
  }));

  // Get external articles from data file
  const externalItems: UnifiedItem[] = contributions.map((item) => ({
    ...item,
    isExternal: true,
  }));

  // Merge and sort all items
  const allItems = [...internalItems, ...externalItems];
  const dated = allItems
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const undated = allItems.filter((item) => !item.date);

  return (
    <PageWrapper>
      <article className="contributions-page">
        <header className="contributions-header">
          <div className="contributions-header-row">
            <h1 className="page-title">Contributions</h1>
          </div>
        </header>

        <div className="contributions-list">
          {dated.map((item) => (
            <ContributionsItem key={item.url} item={item} />
          ))}

          {undated.length > 0 && (
            <>
              <div className="contributions-section-label">Guides</div>
              {undated.map((item) => (
                <ContributionsItem key={item.url} item={item} showDate={false} />
              ))}
            </>
          )}
        </div>
      </article>
    </PageWrapper>
  );
}
