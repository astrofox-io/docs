import { HeroMuted, HeroShimmer, HomePage } from '../../../components/HomePage';

export const frontmatter = {
  title: '音频响应式动态图形',
  description: '使用 Astrofox 创建随声音变化的音乐可视化、动画作品和现场视觉效果。',
  search: false,
};

export default function SimplifiedChineseHomePage() {
  return (
    <HomePage
      copy={{
        title: (
          <>
            将<HeroMuted>音频</HeroMuted>化为惊艳的
            <HeroShimmer>视觉作品</HeroShimmer>。
          </>
        ),
        heroAlt: 'Astrofox 音频响应式视觉编辑器',
        intro:
          'Astrofox 是一款免费、开源的动态图形应用，专为将音频转换为音频响应式视觉效果而设计。音乐人、播客主播和内容创作者用它将歌曲、节拍或人声音频制作成适合 YouTube、Instagram 和 TikTok 等平台的视频。',
        downloadLabel: '下载 Astrofox',
        getStartedLabel: '开始使用',
        downloadHref: '/zh-Hans/download',
        docsHref: '/docs/zh-Hans',
      }}
    />
  );
}
