import env from '@/env';

export const AppConfig = {
  site_name: 'Finance App',
  title: 'Finance',
  description: 'Finance',
  url: 'https://example.com',
  locale: 'en',
  author: 'Finance',
  pagination_size: 5,
};

export const addTrailingSlash = (url) => {
  return url.replace(/\/?$/, '/');
};

export const isBrowser = () => {
  return typeof window !== 'undefined';
};