import { defineConfig } from '@umami/shiso/config';

export default defineConfig({
  siteUrl: 'https://astrofox.io',
  // Search placeholder per page language. Set here rather than as
  // `search.prompt` in docs.json, which would replace it in every language.
  translations: {
    en: { searchPlaceholder: 'Search Astrofox docs' },
    ja: { searchPlaceholder: 'Astrofox ドキュメントを検索' },
    'zh-Hant': { searchPlaceholder: '搜尋 Astrofox 文件' },
    de: { searchPlaceholder: 'Astrofox-Dokumentation durchsuchen' },
    fr: { searchPlaceholder: 'Rechercher dans la documentation Astrofox' },
  },
});
