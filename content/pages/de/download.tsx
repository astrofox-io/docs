import { DownloadPage } from '../../../components/DownloadPage';

export const frontmatter = {
  title: 'Download',
  description: 'Lade die Astrofox-Desktop-App für Windows, macOS und Linux herunter.',
};

export default function GermanDownloadPage() {
  return (
    <DownloadPage
      copy={{
        title: 'Astrofox herunterladen',
        subtitle: 'Verfügbar für macOS, Windows und Linux.',
        allReleasesLabel: 'Alle Versionen',
      }}
    />
  );
}
