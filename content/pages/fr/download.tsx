import { DownloadPage } from '../../../components/DownloadPage';

export const frontmatter = {
  title: 'Téléchargement',
  description: 'Téléchargez l’application de bureau Astrofox pour Windows, macOS et Linux.',
};

export default function FrenchDownloadPage() {
  return (
    <DownloadPage
      copy={{
        title: 'Télécharger Astrofox',
        subtitle: 'Disponible pour macOS, Windows et Linux.',
        allReleasesLabel: 'Toutes les versions',
      }}
    />
  );
}
