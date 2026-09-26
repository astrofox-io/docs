import { type ReactNode } from 'react';
import { Link } from '@umami/shiso/components';

/** Everything on the home page that changes between languages. */
export interface HomePageCopy {
  /** Hero heading. Wrap words in <HeroMuted> and <HeroShimmer> for emphasis. */
  title: ReactNode;
  heroAlt: string;
  intro: string;
  downloadLabel: string;
  getStartedLabel: string;
  /** Download page in this language, e.g. "/ja/download". */
  downloadHref: string;
  /** Docs home in this language, e.g. "/docs/ja". */
  docsHref: string;
}

/** De-emphasized word in the hero heading, e.g. "audio". */
export function HeroMuted({ children }: { children: ReactNode }) {
  return <span className="text-foreground/50">{children}</span>;
}

/** Shimmering word in the hero heading, e.g. "visuals." */
export function HeroShimmer({ children }: { children: ReactNode }) {
  return <span className="home-title-shimmer">{children}</span>;
}

export function HomePage({ copy }: { copy: HomePageCopy }) {
  return (
    <div className="mx-auto w-160">
      <section className="my-20 flex flex-col gap-10">
        {/* auto-phrase keeps Japanese words together when the heading wraps. */}
        <h1 className="text-8xl font-bold [word-break:auto-phrase]">{copy.title}</h1>
        <img src="/hero.png" alt={copy.heroAlt} />
        <p className="text-foreground/60">{copy.intro}</p>
        <div className="flex gap-4">
          <Link
            to={copy.downloadHref}
            data-umami-event="home-download"
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-md border border-border bg-background px-6 text-base font-medium text-foreground transition-colors hover:bg-accent"
          >
            <svg
              aria-hidden="true"
              className="size-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            {copy.downloadLabel}
          </Link>
          <Link
            to={copy.docsHref}
            data-umami-event="home-get-started"
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-md bg-secondary px-6 text-base font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            <svg
              aria-hidden="true"
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            {copy.getStartedLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
