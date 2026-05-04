import Head from 'next/head';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import { useTypedTranslation } from '@/locale';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ka', ['common'])),
    },
  };
};

export default function Home() {
  const { t } = useTypedTranslation();

  return (
    <>
      <Head>
        <title>{t('pageHead.home')}</title>
        <meta name='description' content={t('landing.subtitle')} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='bg-aversi-main'>
        <div className='pointer-events-auto fixed right-4 top-4 z-50 '>
          <LanguageSwitcher />
        </div>
      </div>
    </>
  );
}
