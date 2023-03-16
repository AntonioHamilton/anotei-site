import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import GoalsSection from '@/components/goals';
import DifferencesSection from '@/components/differences';
import FeaturesSection from '@/components/features';
import TeamSection from '@/components/team';
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
        <GoalsSection />
        <FeaturesSection />
        <DifferencesSection />
        <TeamSection />
      </main>
      <Footer />
    </Page>
  );
}
