import { DownloadPage } from '../../../components/DownloadPage';

export const frontmatter = {
  title: 'Descargar',
  description: 'Descarga la aplicación de escritorio de Astrofox para Windows, macOS y Linux.',
};

export default function SpanishDownloadPage() {
  return (
    <DownloadPage
      copy={{
        title: 'Descargar Astrofox',
        subtitle: 'Disponible para macOS, Windows y Linux.',
        allReleasesLabel: 'Todas las versiones',
      }}
    />
  );
}
