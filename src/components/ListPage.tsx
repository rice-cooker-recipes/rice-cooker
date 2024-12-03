import { getServerSession } from 'next-auth';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import AboutPage from '@/app/about/page';

/** Render a list of stuff for the logged-in user. */
const ListPage = async () => {
  // Protect the page, only logged-in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  return (
    <main>
      <AboutPage />
      {/* Your existing content */}
    </main>
  );
};

export default ListPage;
