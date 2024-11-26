'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Col, Container, Row, Form, Button, Card } from 'react-bootstrap';

/** home page */
const HomePage = () => {
  const router = useRouter();
  const [searchType, setSearchType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // implement search functionality
    alert(`Searching ${searchType} for: ${searchQuery}`);
  };

  return (
    <main>
      {/* Header section with search */}
      <Container
        id="home-page"
        fluid
        className="py-5 text-center"
        style={{
          backgroundImage: 'url(\'/landingpage.jpg\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >

        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h2>Search Recipes by Your Preferences</h2>
              <h5 className="mb-4">
                Whether it&apos;s ingredients, cuisine, or dietary preferences, start your search here!
              </h5>
              <Form>
                <Form.Group controlId="searchType" className="mb-3">
                  <Form.Label>Search by:</Form.Label>
                  <Form.Select value={searchType} onChange={handleSearchTypeChange}>
                    <option value="">Choose...</option>
                    <option value="ingredients">Ingredients</option>
                    <option value="cuisine">Cuisine</option>
                    <option value="dietary">Dietary Preferences</option>
                  </Form.Select>
                </Form.Group>
                {searchType && (
                  <Form.Group controlId="searchQuery" className="mb-3">
                    <Form.Label>
                      Enter your
                      {searchType}
                      :
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={`Search by ${searchType}...`}
                      value={searchQuery}
                      onChange={handleSearchQueryChange}
                    />
                  </Form.Group>
                )}
                <Button className="btn-light mt-3" onClick={handleSearch}>
                  Search Recipes
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* popular recipes section */}
      <Container id="popular-recipes" fluid className="py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col xs={12}>
              <h2>Popular Recipes</h2>
              <h5>Explore some of our community’s favorite recipes</h5>
            </Col>
          </Row>
          <Row className="g-4">
            {/* example recipe cards */}
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="/path-to-recipe-image1.jpg" alt="Recipe 1" />
                <Card.Body>
                  <Card.Title>Hearty Chicken Stew</Card.Title>
                  <Card.Text>
                    A comforting one-pot chicken stew packed with vegetables and flavor.
                  </Card.Text>
                  <Button variant="dark" onClick={() => router.push('/recipes/chicken-stew')}>View Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="/path-to-recipe-image2.jpg" alt="Recipe 2" />
                <Card.Body>
                  <Card.Title>Vegetarian Fried Rice</Card.Title>
                  <Card.Text>
                    Quick and easy fried rice with a medley of fresh vegetables.
                  </Card.Text>
                  <Button variant="dark" onClick={() => router.push('/recipes/fried-rice')}>View Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="/path-to-recipe-image3.jpg" alt="Recipe 3" />
                <Card.Body>
                  <Card.Title>Classic Beef Chili</Card.Title>
                  <Card.Text>
                    A hearty chili recipe with ground beef, beans, and spices.
                  </Card.Text>
                  <Button variant="dark" onClick={() => router.push('/recipes/beef-chili')}>View Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default HomePage;
