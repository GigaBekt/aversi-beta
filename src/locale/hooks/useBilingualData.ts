import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { resolveAppLocale } from '@/locale/helpers/resolveAppLocale';
import { getTranslateDataByLocale } from '@/locale/helpers/getTranslateDataByLocale';
import type { TranslateData } from '@/locale/interfaces/tData.interface';

/**
 * CMS / API payloads shaped as `{ en, ka }` — separate from UI strings (i18next).
 */
export const useBilingualData = () => {
  const { locale, defaultLocale } = useRouter();

  const resolvedLocale = useMemo(() => {
    return resolveAppLocale(locale);
  }, [locale]);

  const tData = useCallback(
    <T>(data: TranslateData<T>): T | undefined => {
      if (!data) {
        return undefined;
      }

      return getTranslateDataByLocale(data, locale, defaultLocale);
    },
    [defaultLocale, locale]
  );

  return { locale: resolvedLocale, tData };
};
