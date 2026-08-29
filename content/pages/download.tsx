import { type ReactNode } from 'react';

export const frontmatter = {
  title: 'Download',
  description:
    'Download the Astrofox desktop app for Windows, macOS, and Linux.',
};

const latestDownloadUrl = (fileName: string) =>
  `https://github.com/astrofox-io/astrofox/releases/latest/download/${fileName}`;

type PlatformName = 'macOS' | 'Windows' | 'Linux';

export default function DownloadsPage() {
  return (
    <article className="mx-auto w-full max-w-[1560px] py-14 md:py-20">
      <header className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Download Astrofox
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Available for macOS, Windows, and Linux.
        </p>
      </header>

      <div className="mt-16 flex flex-col gap-6 w-160 mx-auto">
        <PlatformCard title="macOS" icon={<AppleIcon />}>
          <DownloadRow
            label="macOS Apple Silicon"
            fileName="Astrofox-mac-arm64.dmg"
            href={latestDownloadUrl('Astrofox-mac-arm64.dmg')}
          />
          <DownloadRow
            label="macOS Intel"
            fileName="Astrofox-mac-x64.dmg"
            href={latestDownloadUrl('Astrofox-mac-x64.dmg')}
          />
        </PlatformCard>

        <PlatformCard title="Windows" icon={<WindowsIcon />}>
          <DownloadRow
            label="Windows x64"
            fileName="Astrofox-windows-x64-setup.exe"
            href={latestDownloadUrl('Astrofox-windows-x64-setup.exe')}
          />
        </PlatformCard>

        <PlatformCard title="Linux" icon={<LinuxIcon />}>
          <DownloadRow
            label="AppImage"
            fileName="Astrofox-linux-x86_64.AppImage"
            href={latestDownloadUrl('Astrofox-linux-x86_64.AppImage')}
          />
          <DownloadRow
            label="Debian / Ubuntu"
            fileName="Astrofox-linux-amd64.deb"
            href={latestDownloadUrl('Astrofox-linux-amd64.deb')}
          />
          <DownloadRow
            label="Fedora / RHEL"
            fileName="Astrofox-linux-x86_64.rpm"
            href={latestDownloadUrl('Astrofox-linux-x86_64.rpm')}
          />
        </PlatformCard>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        <a
          href="https://github.com/astrofox-io/astrofox/releases"
          data-umami-event="download-all-releases"
          className="hover:text-primary"
        >
          All releases
        </a>
      </p>
    </article>
  );
}

function PlatformCard({
  title,
  icon,
  children,
}: {
  title: PlatformName;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-xl bg-card/60 p-5 md:p-6">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="flex size-5 items-center justify-center">{icon}</span>
        {title}
      </h2>
      <div className="mt-4 divide-y divide-border">{children}</div>
    </section>
  );
}

function DownloadRow({
  label,
  href,
  fileName,
}: {
  label: string;
  href: string;
  fileName: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-umami-event="download-installer"
      data-umami-event-label={label}
      data-umami-event-file={fileName}
      className="flex min-h-12 items-center justify-between gap-4 text-sm font-medium text-foreground hover:text-primary"
    >
      <span>{label}</span>
      <DownloadIcon className="size-4 shrink-0" />
    </a>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 12.54c-.03-3.19 2.61-4.74 2.73-4.81a5.86 5.86 0 0 0-4.61-2.49c-1.94-.2-3.82 1.16-4.81 1.16-1.01 0-2.54-1.14-4.19-1.1a6.12 6.12 0 0 0-5.15 3.14c-2.23 3.86-.57 9.53 1.57 12.65 1.07 1.53 2.31 3.24 3.96 3.18 1.61-.07 2.21-1.02 4.15-1.02 1.92 0 2.48 1.02 4.16.98 1.73-.03 2.82-1.53 3.85-3.08a12.63 12.63 0 0 0 1.76-3.59 5.51 5.51 0 0 1-3.42-4.92ZM13.9 3.18A5.59 5.59 0 0 0 15.18-.85a5.7 5.7 0 0 0-3.69 1.91 5.3 5.3 0 0 0-1.32 3.87 4.7 4.7 0 0 0 3.73-1.75Z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 4.1 10.9 2.9v8.5H2V4.1Zm10.1-1.4L22 1.3v10.1h-9.9V2.7ZM2 12.6h8.9v8.5L2 19.9v-7.3Zm10.1 0H22v10.1l-9.9-1.4v-8.7Z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3M13 15h4" />
    </svg>
  );
}
