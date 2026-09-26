import { HeroMuted, HeroShimmer, HomePage } from '../../../components/HomePage';

export const frontmatter = {
  title: 'Motion design réactif au son',
  description:
    'Créez des visualiseurs musicaux, des illustrations animées et des visuels live qui réagissent au son avec Astrofox.',
  search: false,
};

export default function FrenchHomePage() {
  return (
    <HomePage
      copy={{
        title: (
          <>
            Transformez l’<HeroMuted>audio</HeroMuted> en{' '}
            <HeroShimmer>visuels saisissants.</HeroShimmer>
          </>
        ),
        heroAlt: 'Éditeur de visuels réactifs au son d’Astrofox',
        intro:
          'Astrofox est une application de motion design gratuite et open source, conçue pour transformer l’audio en visuels réactifs au son. Musiciens, podcasteurs et créateurs de contenu l’utilisent pour convertir des chansons, des beats ou des enregistrements vocaux en vidéos adaptées à des plateformes comme YouTube, Instagram et TikTok.',
        downloadLabel: 'Télécharger Astrofox',
        getStartedLabel: 'Commencer',
        downloadHref: '/fr/download',
        docsHref: '/docs/fr',
      }}
    />
  );
}
