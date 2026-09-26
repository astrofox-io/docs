import { DownloadPage } from '../../../components/DownloadPage';

export const frontmatter = {
  title: 'ダウンロード',
  description: 'Windows、macOS、Linux 向けの Astrofox デスクトップアプリをダウンロードできます。',
};

export default function JapaneseDownloadPage() {
  return (
    <DownloadPage
      copy={{
        title: 'Astrofox をダウンロード',
        subtitle: 'macOS、Windows、Linux に対応しています。',
        allReleasesLabel: 'すべてのリリース',
      }}
    />
  );
}
