import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me | Tech Writeups Blog</title>
      </Head>
      <section className="about-section">
        <h1>About Me</h1>
        <div className="about-content">
          <p>
            Welcome to my tech writeups blog. This is where I share my knowledge, 
            explorations, and discoveries in the tech world.
          </p>
          <p>
            I'm passionate about technology, cybersecurity, and sharing what I learn
            with the community. Through this blog, I document my technical adventures,
            research findings, and helpful guides.
          </p>
          <p>
            Feel free to explore my writeups and reach out if you have any questions or
            suggestions for future topics.
          </p>
        </div>
      </section>
    </Layout>
  );
} 