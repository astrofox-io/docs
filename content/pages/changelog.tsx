export const frontmatter = {
  title: 'Changelog',
  description:
    'Follow Astrofox releases, new features, improvements, and fixes.',
};

export default function ChangelogPage() {
  return (
    <article className="docs-markdown py-8">
      <h1>Changelog</h1>

      <p>
        Astrofox release notes are published alongside each tagged release on
        GitHub. Use them to review new features, behavior changes, fixes, and
        available desktop installers.
      </p>

      <a
        href="https://github.com/astrofox-io/astrofox/releases"
        target="_blank"
        rel="noreferrer"
        className="not-prose my-4 flex items-center justify-between gap-3 rounded-lg border border-border p-4 hover:border-primary"
      >
        <span className="flex min-w-0 items-center gap-3">
          <svg
            aria-hidden="true"
            className="size-6 shrink-0 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
            <path d="M3 3v5h5M12 7v5l3 2" />
          </svg>
          <strong className="text-base font-semibold text-foreground">
            Astrofox releases
          </strong>
          <span className="text-muted-foreground">
            Browse the complete release history and download assets for
            published versions.
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground">
          View release notes <span aria-hidden="true">↗</span>
        </span>
      </a>

      <h2>Before upgrading</h2>

      <ul>
        <li>Save the current project before installing a desktop update.</li>
        <li>Keep a copy of important project files and their linked media.</li>
        <li>
          Review the notes for changes to exporting, project compatibility, or
          plugins.
        </li>
      </ul>

      <p>
        Projects created with Astrofox 1.x may need additional migration steps.
        See <a href="/docs/upgrading-from-v1">Upgrading from v1</a> before
        opening legacy <code>.afx</code> projects.
      </p>
    </article>
  );
}
