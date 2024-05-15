import MainContent from '../components/home-page/MainContent';
import usePosts from '../hooks/usePosts';

export default function HomePage() {
  const { posts } = usePosts();
  console.log('🚀 ~ HomePage ~ posts:', posts);

  return (
    <div className="h-screen bg-light-950">
      <MainContent />
    </div>
  );
}
