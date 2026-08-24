export const frontmatter = {
  title: 'Audio-reactive motion graphics',
  description:
    'Create music visualizers, animated artwork, and live visuals that react to sound with Astrofox.',
};

export default function HomePage() {
  return (
    <div className="mx-auto w-160">
      <section className="my-20 flex flex-col gap-10">
        <h1 className="text-8xl font-bold">
          Turn <span className="text-foreground/50">audio</span> into stunning{' '}
          <span className="home-title-shimmer">visuals.</span>
        </h1>
        <img src="/hero.png" alt="Astrofox audio-reactive visual editor" />
        <p className="text-foreground/60">
          Astrofox is a free, open-source motion graphics application designed
          to convert audio into audio-reactive visuals. Used by musicians,
          podcasters, and content creators to turn songs, beats, or spoken
          audio into videos suitable for platforms like YouTube, Instagram,
          and TikTok.
        </p>
        <div className="flex gap-4">
          <a
            href="/download"
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-md border border-border bg-background px-6 text-base font-medium text-foreground transition-colors hover:bg-accent"
          >
            <svg
              aria-hidden="true"
              className="size-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Download Astrofox
          </a>
          <a
            href="/docs"
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
            Get started
          </a>
        </div>
      </section>
    </div>
  );
}
