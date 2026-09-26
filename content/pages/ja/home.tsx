import { HeroMuted, HeroShimmer, HomePage } from '../../../components/HomePage';

export const frontmatter = {
  title: 'オーディオに反応するモーショングラフィックス',
  description:
    'Astrofox で、サウンドに反応するミュージックビジュアライザー、アニメーションアートワーク、ライブビジュアルを作成しましょう。',
  search: false,
};

export default function JapaneseHomePage() {
  return (
    <HomePage
      copy={{
        title: (
          <>
            <HeroMuted>オーディオ</HeroMuted>を、息をのむ
            <HeroShimmer>ビジュアル</HeroShimmer>に。
          </>
        ),
        heroAlt: 'Astrofox のオーディオリアクティブなビジュアルエディター',
        intro:
          'Astrofox は、オーディオをオーディオリアクティブなビジュアルに変換するために設計された、無料でオープンソースのモーショングラフィックスアプリケーションです。ミュージシャン、ポッドキャスター、コンテンツクリエイターが、楽曲やビート、話し声を YouTube、Instagram、TikTok などのプラットフォーム向けの動画に変えるために使っています。',
        downloadLabel: 'Astrofox をダウンロード',
        getStartedLabel: 'はじめる',
        downloadHref: '/ja/download',
        docsHref: '/docs/ja',
      }}
    />
  );
}
