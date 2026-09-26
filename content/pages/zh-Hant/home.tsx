import { HeroMuted, HeroShimmer, HomePage } from '../../../components/HomePage';

export const frontmatter = {
  title: '音訊反應式動態圖像',
  description: '使用 Astrofox 建立隨聲音變化的音樂視覺化、動畫作品與現場視覺效果。',
  search: false,
};

export default function TraditionalChineseHomePage() {
  return (
    <HomePage
      copy={{
        title: (
          <>
            將<HeroMuted>音訊</HeroMuted>化為令人驚豔的
            <HeroShimmer>視覺作品</HeroShimmer>。
          </>
        ),
        heroAlt: 'Astrofox 音訊反應式視覺編輯器',
        intro:
          'Astrofox 是一款免費、開源的動態圖像應用程式，專為將音訊轉換成隨音訊變化的視覺效果而設計。音樂人、Podcaster 與內容創作者都用它將歌曲、節拍或口說音訊製作成適合 YouTube、Instagram 與 TikTok 等平台的影片。',
        downloadLabel: '下載 Astrofox',
        getStartedLabel: '開始使用',
        downloadHref: '/zh-Hant/download',
        docsHref: '/docs/zh-Hant',
      }}
    />
  );
}
