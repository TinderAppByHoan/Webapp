import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is defined, fallback to 'vi' if necessary
  const localeToUse = locale || 'vi';
  
  return {
    locale: localeToUse,
    messages: (await import(`../messages/${localeToUse}.json`)).default
  };
});
