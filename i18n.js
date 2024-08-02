import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import config from './config';

const supportedLocales = ['en', 'fr'];

export default getRequestConfig(async () => {
  // Access headers to extract locale information if needed
  const headersList = headers();
  const referer = headersList.get('referer') || '';
  
  // Create a URL object to parse the referer header
  const url = new URL(referer, config.domainName);
  
  // Extract locale from the URL path
  const pathSegments = url.pathname.split('/');
  const localeFromPath = pathSegments[1];
  
  // Determine the locale to use
  const locale = supportedLocales.includes(localeFromPath) ? localeFromPath : 'fr'; // Default to 'fr' if no valid locale is set

  try {
    // Load messages dynamically based on locale
    const messages = (await import(`./messages/${locale}.json`)).default;

    return {
      locale,
      messages,
    };
  } catch (error) {
    // Handle error if the messages file is not found or other issues
    console.error(`Failed to load messages for locale: ${locale}`, error);

    // Fallback to default locale in case of error
    const defaultMessages = (await import('./messages/fr.json')).default;
    return {
      locale: 'fr',
      messages: defaultMessages,
    };
  }
});
