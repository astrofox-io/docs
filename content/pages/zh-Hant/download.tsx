import { DownloadPage } from '../../../components/DownloadPage';

export const frontmatter = {
  title: '下載',
  description: '下載適用於 Windows、macOS 與 Linux 的 Astrofox 桌面應用程式。',
};

export default function TraditionalChineseDownloadPage() {
  return (
    <DownloadPage
      copy={{
        title: '下載 Astrofox',
        subtitle: '支援 macOS、Windows 與 Linux。',
        allReleasesLabel: '所有版本',
      }}
    />
  );
}
