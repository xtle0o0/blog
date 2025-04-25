import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Tech Writeups Blog</title>
      </Head>
      <section className="hero-section">
        <h1>Tech Writeups & Blog</h1>
        <p className="subtitle">Sharing knowledge, exploits, and technical discoveries</p>
      </section>
      
      <section className="post-list">
        <h2>Latest Writeups</h2>
        {allPostsData.length > 0 ? (
          <ul>
            {allPostsData.map(({ id, date, title, excerpt }) => (
              <li key={id} className="post-item">
                <Link href={`/posts/${id}`} className="post-link">
                  <h3>{title}</h3>
                  <p className="excerpt">{excerpt}</p>
                  <small className="date">{date}</small>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-posts">No posts yet.</p>
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
} 