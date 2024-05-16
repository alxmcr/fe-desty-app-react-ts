import AppFooter from '../components/AppFooter';
import MainContent from '../components/home-page/MainContent';
import InvitationCTASection from '../components/sections/InvitationCTASection';
import PostsSection from '../components/sections/PostsSection';
import SubscribeNewsletterSection from '../components/sections/SubscribeNewsletterSection';

export default function HomePage() {
  return (
    <div className="h-screen bg-light-950">
      <MainContent />
      <PostsSection />
      <SubscribeNewsletterSection />
      <InvitationCTASection />
      <AppFooter />
    </div>
  );
}
