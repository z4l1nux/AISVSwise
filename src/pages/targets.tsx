import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { Target } from 'lucide-react';
import TargetEditor from '../features/maturity/TargetEditor';

export default function Targets() {
    const t = useTranslations('maturity');
    const tMeta = useTranslations('meta');

    return (
        <>
            <Head>
                <title>{tMeta('targetsTitle')}</title>
                <meta name="description" content={tMeta('description')} />
                <meta name="keywords" content={tMeta('keywords')} />
            </Head>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
                <div className="mb-2 flex items-center gap-3">
                    <Target className="h-7 w-7 text-cyan-400" />
                    <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-[Poppins] text-3xl font-extrabold text-transparent">
                        {t('targetsTitle')}
                    </h1>
                </div>
                <p className="mb-6 text-slate-400">{t('targetsSubtitle')}</p>
                <p className="mb-8 text-sm text-slate-500">
                    {t('targetsHint')}{' '}
                    <Link href="/results" className="text-cyan-400 hover:text-cyan-300">{t('targetsSeeGap')} →</Link>
                </p>
                <TargetEditor />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: { messages: (await import(`../messages/${locale || 'en'}.json`)).default },
});
