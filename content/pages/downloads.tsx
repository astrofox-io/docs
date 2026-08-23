export const frontmatter = {
  title: 'Downloads',
  description:
    'Use Astrofox in your browser or download the desktop app for Windows, macOS, and Linux.',
};

export default function DownloadsPage() {
  return (
    <article className="docs-markdown py-8">
      <h1>Downloads</h1>

      <p>
        Choose the version of Astrofox that fits your workflow. Projects use
        the same format across the web and desktop apps.
      </p>

      <div className="not-prose my-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <a
          href="https://app.astrofox.io"
          target="_blank"
          rel="noreferrer"
          className="group flex h-full items-start justify-between gap-3 rounded-lg border border-border p-4 hover:border-primary"
        >
          <span className="flex min-w-0 flex-col gap-2">
            <span className="flex flex-col items-start gap-3">
              <svg
                aria-hidden="true"
                className="size-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
              </svg>
              <strong className="text-base font-semibold text-foreground">
                Open the web app
              </strong>
            </span>
            <span className="text-muted-foreground">
              Start creating in a supported browser without installing
              anything.
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground">
            Launch Astrofox <span aria-hidden="true">↗</span>
          </span>
        </a>
        <a
          href="https://github.com/astrofox-io/astrofox/releases"
          target="_blank"
          rel="noreferrer"
          className="group flex h-full items-start justify-between gap-3 rounded-lg border border-border p-4 hover:border-primary"
        >
          <span className="flex min-w-0 flex-col gap-2">
            <span className="flex flex-col items-start gap-3">
              <svg
                aria-hidden="true"
                className="size-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="3" rx="2" />
                <path d="M8 21h8M12 17v4M12 7v6M9 10l3 3 3-3" />
              </svg>
              <strong className="text-base font-semibold text-foreground">
                Download the desktop app
              </strong>
            </span>
            <span className="text-muted-foreground">
              Get current installers for Windows, macOS, and Linux from GitHub
              Releases.
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground">
            View releases <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>

      <h2>Which version should I use?</h2>

      <p>
        Use the <strong>web app</strong> for the fastest start and access from
        any supported browser. Use the <strong>desktop app</strong> when you
        want an offline workflow, native file locations, desktop audio capture,
        or offline MP4 rendering with ffmpeg.
      </p>

      <p>
        Read <a href="/docs/desktop-app">Desktop app</a> for platform packages,
        permissions, native export options, and updates.
      </p>

      <h2>Source code</h2>

      <p>
        Astrofox is open source. You can inspect the code, build the app
        locally, or contribute on{' '}
        <a href="https://github.com/astrofox-io/astrofox">GitHub</a>.
      </p>
    </article>
  );
}
