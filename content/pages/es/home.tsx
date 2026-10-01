import { HeroMuted, HeroShimmer, HomePage } from '../../../components/HomePage';

export const frontmatter = {
  title: 'Gráficos animados que reaccionan al audio',
  description:
    'Crea visualizadores musicales, ilustraciones animadas y visuales en directo que reaccionan al sonido con Astrofox.',
  search: false,
};

export default function SpanishHomePage() {
  return (
    <HomePage
      copy={{
        title: (
          <>
            Convierte el <HeroMuted>audio</HeroMuted> en{' '}
            <HeroShimmer>visuales increíbles.</HeroShimmer>
          </>
        ),
        heroAlt: 'Editor de visuales de Astrofox que reaccionan al audio',
        intro:
          'Astrofox es una aplicación gratuita y de código abierto para crear gráficos animados que convierten el audio en visuales que reaccionan al sonido. Músicos, podcasters y creadores de contenido la usan para transformar canciones, ritmos o grabaciones de voz en vídeos para plataformas como YouTube, Instagram y TikTok.',
        downloadLabel: 'Descargar Astrofox',
        getStartedLabel: 'Empezar',
        downloadHref: '/es/download',
        docsHref: '/docs/es',
      }}
    />
  );
}
