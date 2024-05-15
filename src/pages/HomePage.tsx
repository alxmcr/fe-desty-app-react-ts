import MainContent from '../components/home-page/MainContent';
import PostsSection from '../components/sections/PostsSection';

export default function HomePage() {
  return (
    <div className="h-screen bg-light-950">
      <MainContent />
      <PostsSection />
    </div>
  );
}
