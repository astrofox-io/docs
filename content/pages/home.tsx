import { HeroMuted, HeroShimmer, HomePage } from '../../components/HomePage';

export const frontmatter = {
  title: 'Audio-reactive motion graphics',
  description:
    'Create music visualizers, animated artwork, and live visuals that react to sound with Astrofox.',
  search: false,
};

export default function EnglishHomePage() {
  return (
    <HomePage
      copy={{
        title: (
          <>
            Turn <HeroMuted>audio</HeroMuted> into stunning{' '}
            <HeroShimmer>visuals.</HeroShimmer>
          </>
        ),
        heroAlt: 'Astrofox audio-reactive visual editor',
        intro:
          'Astrofox is a free, open-source motion graphics application designed to convert audio into audio-reactive visuals. Used by musicians, podcasters, and content creators to turn songs, beats, or spoken audio into videos suitable for platforms like YouTube, Instagram, and TikTok.',
        downloadLabel: 'Download Astrofox',
        getStartedLabel: 'Get started',
        downloadHref: '/download',
        docsHref: '/docs',
      }}
    />
  );
}
