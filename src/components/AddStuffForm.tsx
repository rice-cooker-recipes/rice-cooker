'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addStuff } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddStuffSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: { name: string; quantity: number; owner: string; condition: string }) => {
  await addStuff(data);
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

const AddStuffForm: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddStuffSchema),
  });

  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <div
      className="addstuff-wrapper position-relative"
      style={{
        backgroundImage: 'url(/signinpic.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Container className="position-relative" style={{ zIndex: 10 }}>
        <Row className="justify-content-center">
          <Col xs={12} md={5}>
            <Card
              className="shadow-lg border-0"
              style={{
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2
                    className="text-dark"
                    style={{
                      fontWeight: 700,
                      color: '#628473',
                      marginBottom: '10px',
                    }}
                  >
                    Add a Recipe
                  </h2>
                  <p className="text-muted">Fill out the form to share your recipe with the community!</p>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Dish Name</Form.Label>
                    <input
                      type="text"
                      {...register('name')}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      style={{
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.7)',
                        border: '1px solid rgba(0,0,0,0.1)',
                      }}
                    />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Serving Size</Form.Label>
                    <input
                      type="number"
                      {...register('quantity')}
                      className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                      style={{
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.7)',
                        border: '1px solid rgba(0,0,0,0.1)',
                      }}
                    />
                    <div className="invalid-feedback">{errors.quantity?.message}</div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Any Dietary Restrictons?</Form.Label>
                    <select
                      {...register('condition')}
                      className={`form-control ${errors.condition ? 'is-invalid' : ''}`}
                      style={{
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.7)',
                        border: '1px solid rgba(0,0,0,0.1)',
                      }}
                    >
                      <option value="blank">Select an option</option>
                      <option value="excellent">Vegan</option>
                      <option value="good">Vegetarian</option>
                      <option value="fair">Gluten Free</option>
                      <option value="poor">None</option>
                    </select>
                    <div className="invalid-feedback">{errors.condition?.message}</div>
                  </Form.Group>
                  <input type="hidden" {...register('owner')} value={currentUser} />
                  <Form.Group className="form-group">
                    <Row className="pt-3">
                      <Col>
                        <Button
                          type="submit"
                          variant="primary"
                          style={{
                            background: '#628473',
                            border: 'none',
                            padding: '12px',
                            borderRadius: '10px',
                            fontWeight: 600,
                            transition: 'transform 0.3s ease',
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          Submit
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          type="button"
                          onClick={() => reset()}
                          variant="warning"
                          className="float-right"
                          style={{
                            borderRadius: '10px',
                            background: 'rgba(255,255,255,0.7)',
                          }}
                        >
                          Reset
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddStuffForm;
