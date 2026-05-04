import { useRouter } from 'next/router';
import { useTypedTranslation } from '@/locale';

const supportedLocales = ['ka', 'en'] as const;

export const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTypedTranslation();

  const handleLocaleChange = (locale: string) => {
    void router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div
      className='flex flex-wrap items-center gap-2 rounded-lg border border-zinc-200 bg-white/90 px-3 py-2 text-sm text-zinc-800 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-100'
      role='group'
      aria-label={t('common.languageLabel')}
    >
      <span className='font-medium text-zinc-500 dark:text-zinc-400'>
        {t('common.languageLabel')}
      </span>
      {supportedLocales.map((locale) => {
        const isActive = router.locale === locale;
        const label =
          locale === 'ka'
            ? t('common.languageNameKa')
            : t('common.languageNameEn');
        return (
          <button
            key={locale}
            type='button'
            className={
              isActive
                ? 'rounded-md bg-zinc-900 px-2 py-1 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'rounded-md px-2 py-1 text-zinc-700 underline-offset-2 hover:underline dark:text-zinc-200'
            }
            aria-pressed={isActive}
            aria-label={label}
            onClick={() => handleLocaleChange(locale)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
