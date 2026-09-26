import { HeroMuted, HeroShimmer, HomePage } from '../../../components/HomePage';

export const frontmatter = {
  title: 'Audioreaktive Motion Graphics',
  description:
    'Erstelle mit Astrofox Musikvisualisierungen, animierte Artworks und Live-Visuals, die auf Sound reagieren.',
  search: false,
};

export default function GermanHomePage() {
  return (
    <HomePage
      copy={{
        title: (
          <>
            Verwandle <HeroMuted>Audio</HeroMuted> in fesselnde{' '}
            <HeroShimmer>Visuals.</HeroShimmer>
          </>
        ),
        heroAlt: 'Astrofox-Editor für audioreaktive Visuals',
        intro:
          'Astrofox ist eine kostenlose Open-Source-Anwendung für Motion Graphics, die Audio in audioreaktive Visuals verwandelt. Musiker, Podcaster und Content Creator nutzen sie, um Songs, Beats oder gesprochene Aufnahmen in Videos für Plattformen wie YouTube, Instagram und TikTok umzuwandeln.',
        downloadLabel: 'Astrofox herunterladen',
        getStartedLabel: 'Loslegen',
        downloadHref: '/de/download',
        docsHref: '/docs/de',
      }}
    />
  );
}
