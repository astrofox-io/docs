import { ShisoApp } from '@umami/shiso/client';
import { hydrateRoot } from 'react-dom/client';
import './styles.css';

const element = document.getElementById('root');

if (!element) {
  throw new Error('Shiso could not find the root element.');
}

hydrateRoot(element, <ShisoApp />);

const topLevelTabs = [
  {
    // Matches the docs tab for every language: /docs, /docs/ja, /docs/zh-Hant.
    selector: 'header a[href="/docs"], header a[href^="/docs/"]',
    matches: (pathname: string) => pathname === '/docs' || pathname.startsWith('/docs/'),
  },
  {
    // Matches the download tab for every language: /download, /ja/download, /zh-Hant/download.
    selector: 'header a[href="/download"], header a[href$="/download"]',
    matches: (pathname: string) => /^(?:\/[^/]+)?\/download$/.test(pathname),
  },
];

function syncTopLevelTabs() {
  for (const tab of topLevelTabs) {
    const links = document.querySelectorAll<HTMLAnchorElement>(tab.selector);
    const active = tab.matches(window.location.pathname);

    for (const link of links) {
      if (active) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  }
}

syncTopLevelTabs();
window.addEventListener('popstate', syncTopLevelTabs);
document.addEventListener('click', () => queueMicrotask(syncTopLevelTabs));

new MutationObserver(syncTopLevelTabs).observe(element, {
  childList: true,
  subtree: true,
});
