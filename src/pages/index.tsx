import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Anotei App"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <CasesSection />
        <FeatureSection />
        <SocialProof />
      </main>
      <Footer />
    </Page>
  );
}
