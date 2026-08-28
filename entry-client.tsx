import { ShisoApp } from '@umami/shiso/client';
import { hydrateRoot } from 'react-dom/client';
import './styles.css';

const element = document.getElementById('root');

if (!element) {
  throw new Error('Shiso could not find the root element.');
}

hydrateRoot(element, <ShisoApp />);

const topLevelTabs = [
  { href: '/docs', matches: (pathname: string) => pathname === '/docs' || pathname.startsWith('/docs/') },
  { href: '/download', matches: (pathname: string) => pathname === '/download' },
];

function syncTopLevelTabs() {
  for (const tab of topLevelTabs) {
    const link = document.querySelector<HTMLAnchorElement>(`header a[href="${tab.href}"]`);

    if (tab.matches(window.location.pathname)) {
      link?.setAttribute('aria-current', 'page');
    } else {
      link?.removeAttribute('aria-current');
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
