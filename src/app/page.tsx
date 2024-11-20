import { Col, Container, Row } from 'react-bootstrap';
import { Basket3Fill, Search, Share } from 'react-bootstrap-icons';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3">
      <Container>
        <Row className="align-middle text-center">
          <Col xs={4}>
            <Basket3Fill size={80} />
            <h2>One Pot Recipes</h2>
            <h5>
              Discover a variety of delicious one-pot recipes that are easy to prepare and perfect for any meal.
              From hearty stews to flavorful rice dishes, find recipes that simplify cooking and cleanup.
            </h5>
          </Col>
          <Col xs={4}>
            <Search size={80} />
            <h2>Find Your Ingredients</h2>
            <h5>
              Having trouble finding an ingredient? Use our search feature to find stores/vendors that carry
              the ingredient you are looking for.
            </h5>
          </Col>
          <Col xs={4}>
            <Share size={80} />
            <h2>Share Your Recipes</h2>
            <h5>
              Share your own recipes with our community and help others discover new and exciting dishes.
              Inspire others with your culinary creations and be part of a growing network of home cooks.
            </h5>
          </Col>
        </Row>

        {/* Our Mission Section */}
        <Row className="text-center mt-5">
          <Col xs={12}>
            <h2>Our Mission</h2>
            <h5>
              At
              {' '}
              <strong>Rice Cooker Recipes</strong>
              , we understand the struggles of college students—limited kitchen resources,
              time constraints, and tight budgets.
              Our mission is to make cooking simple, affordable, and fun by providing recipes that
              can be made with minimal equipment and easily sourced ingredients.
            </h5>
            <h5>
              We aim to help students improve their nutrition and save
              money by offering tasty alternatives to fast food.
              Whether you are looking to cook a quick meal in your dorm with
              just a rice cooker or find affordable local vendors who carry what you need, we got you covered.
            </h5>
          </Col>
        </Row>
      </Container>
    </Container>

    <Container id="second-section" fluid className="py-5">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Join Our Community</h2>
            <p>Connect with other home cooks, share recipes, and learn new culinary techniques together.</p>
            <button className="btn btn-dark" type="button">Sign Up</button>
          </Col>
        </Row>
      </Container>
    </Container>

  </main>
);

export default Home;
