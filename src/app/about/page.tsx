import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

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
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h2 className="h4 mb-3 text-center">About Us:</h2>
            <h5 className="mb-4 text-center">
              <strong>Rice Cooker Recipes</strong>
              {' '}
              helps college students cook healthy, affordable meals with limited kitchen resources. We provide simple,
              creative recipes that can be made with minimal equipment, like a rice cooker, and ingredients
              available near campus.
            </h5>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-center">The Problem:</h2>
              <h5 className="text-center">
                Students often rely on fast food and vending machines due
                to limited time, kitchen space, and cooking skills,
                leading to unhealthy eating habits and wasted money.
              </h5>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-center">The Solution:</h2>
              <h5 className="text-center">Rice Cooker Recipes offers recipes that:</h5>
              <h5 className="text-center">~ Use basic kitchen tools.</h5>
              <h5 className="text-center">~ Feature ingredients available locally.</h5>
              <h5 className="text-center">~ Cater to dietary needs (vegan, gluten-free, etc.)</h5>
              <h5 className="text-center">~ Include cost estimates, servings, and prep time.</h5>
            </section>

            <section className="mb-4">
              <h2 className="h4 mb-3 text-center">How It Works:</h2>
              <h5 className="text-center">
                <strong>Students</strong>
                {' '}
                can search and share recipes with ingredient costs and local availability.
                <strong> Vendors</strong>
                {' '}
                provide pricing and stock information, helping students find the best deals.
                <strong> Admins</strong>
                {' '}
                manage content and ensure quality.
              </h5>
            </section>

            <h2 className="h4 mb-3 text-center">Our Goal:</h2>
            <h5 className="mb-4 text-center">
              Our goal is to help students eat better, save money, and spend less time cooking while enjoying tasty,
              nutritious meals.
            </h5>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ListPage;
