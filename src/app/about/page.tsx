import React from 'react';
import Image from 'next/image';
import styles from '@/app/about.module.css';

const AboutPage = () => (
  <main className={styles.main}>
    {/* Hero Section */}
    <header className={styles.heroSection}>
      <article className={styles.heroContent}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>
          At Rice Cooker Recipes, we empower college students to cook healthy, affordable meals with limited resources.
        </p>
        <Image
          src="/Rice-Cooker-Recipe1.jpeg"
          alt="Rice Cooker Recipes"
          width={300}
          height={400}
          className={styles.heroImage}
        />
      </article>
    </header>

    {/* Mission Section */}
    <section className={`${styles.section} ${styles.missionSection}`}>
      <article className={styles.container}>
        <figure className={styles.sectionContent}>
          <article className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.sectionText}>
              At Rice Cooker Recipes, our mission is to revolutionize the way college students approach
              meal planning and preparation. We believe that everyone deserves access to delicious,
              nutritious food, regardless of their living situation or kitchen capabilities.
            </p>
          </article>
          <figure className={styles.imageContent}>
            <Image
              src="/Rice-Cooker-Recipe3.jpg"
              alt="Our Mission"
              width={200}
              height={300}
              className={styles.sectionImage}
            />
          </figure>
        </figure>
      </article>
    </section>

    {/* How It Works Section */}
    <section className={`${styles.section} ${styles.howItWorksSection}`}>
      <article className={styles.container}>
        <figure className={styles.sectionContent}>
          <figure className={styles.imageContent}>
            <Image
              src="/Collaborative.jpg"
              alt="How It Works"
              width={200}
              height={300}
              className={styles.sectionImage}
            />
          </figure>
          <article className={styles.textContent}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionText}>
              Our platform connects students, vendors, and administrators to create a collaborative
              ecosystem. Students can search for recipes, share their creations, and access
              cost-saving information. Vendors provide pricing and availability data, while
              administrators manage content and ensure quality standards.
            </p>
          </article>
        </figure>
      </article>
    </section>

    {/* Our Goal Section */}
    <section className={`${styles.section} ${styles.goalSection}`}>
      <article className={styles.container}>
        <figure className={styles.sectionContent}>
          <article className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Goal</h2>
            <p className={styles.sectionText}>
              Our ultimate goal is to empower college students to take control of their
              eating habits, save money, and improve their overall health and well-being.
              By providing accessible, versatile recipes and resources, we aim to make
              home-cooked meals a viable and enjoyable option for students of all backgrounds.
            </p>
          </article>
          <figure className={styles.imageContent}>
            <Image
              src="/Student Well-Being.webp"
              alt="Our Goal"
              width={200}
              height={300}
              className={styles.sectionImage}
            />
          </figure>
        </figure>
      </article>
    </section>

    {/* Contact Us Section */}
    <section className={`${styles.section} ${styles.contactSection}`}>
      <article className={styles.container}>
        <article className={styles.contactContent}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.sectionText}>
            Have questions or suggestions? We would love to hear from you. Reach out to us using the information below.
          </p>
          <address className={styles.contactInfo}>
            <article className={styles.contactItem}>
              <h3>Email</h3>
              <p>support@ricecookerrecipes.com</p>
            </article>
            <article className={styles.contactItem}>
              <h3>Follow Us</h3>
              <p>Instagram: @ricecookerrecipes</p>
              <p>Twitter: @ricecookerrecipes</p>
            </article>
          </address>
        </article>
      </article>
    </section>
  </main>
);

export default AboutPage;
