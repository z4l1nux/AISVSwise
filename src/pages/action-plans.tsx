import Head from 'next/head';
import type { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { ListChecks } from 'lucide-react';
import ActionPlansManager from '../features/maturity/ActionPlansManager';

export default function ActionPlans() {
    const t = useTranslations('maturity');
    const tMeta = useTranslations('meta');

    return (
        <>
            <Head>
                <title>{tMeta('plansTitle')}</title>
                <meta name="description" content={tMeta('description')} />
                <meta name="keywords" content={tMeta('keywords')} />
            </Head>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
                <div className="mb-2 flex items-center gap-3">
                    <ListChecks className="h-7 w-7 text-cyan-400" />
                    <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-[Poppins] text-3xl font-extrabold text-transparent">
                        {t('plansTitle')}
                    </h1>
                </div>
                <p className="mb-8 text-slate-400">{t('plansSubtitle')}</p>
                <ActionPlansManager />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: { messages: (await import(`../messages/${locale || 'en'}.json`)).default },
});
