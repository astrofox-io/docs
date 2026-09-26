import { DownloadPage } from '../../components/DownloadPage';

export const frontmatter = {
  title: 'Download',
  description: 'Download the Astrofox desktop app for Windows, macOS, and Linux.',
};

export default function EnglishDownloadPage() {
  return (
    <DownloadPage
      copy={{
        title: 'Download Astrofox',
        subtitle: 'Available for macOS, Windows, and Linux.',
        allReleasesLabel: 'All releases',
      }}
    />
  );
}
