export const DefaultTitle = 'Jeffrey Luong';
export const BaseUrl = 'https://www.jeffreyluong.com';

export const UrlTitleMap = {
  '/': DefaultTitle,
  '/about': `${DefaultTitle} | About`,
  '/work': `${DefaultTitle} | Work`,
  '/photography': `${DefaultTitle} | Photography`
};

export const UrlPaths = Object.keys(UrlTitleMap);
export const hasPageTitle = url => UrlPaths.some(p => p.includes(url));
