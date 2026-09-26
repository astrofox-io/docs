import { DownloadPage } from '../../../components/DownloadPage';

export const frontmatter = {
  title: '下载',
  description: '下载适用于 Windows、macOS 和 Linux 的 Astrofox 桌面应用。',
};

export default function SimplifiedChineseDownloadPage() {
  return (
    <DownloadPage
      copy={{
        title: '下载 Astrofox',
        subtitle: '支持 macOS、Windows 和 Linux。',
        allReleasesLabel: '所有版本',
      }}
    />
  );
}
