import Head from 'next/head';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Layout({ children, home }) {
  const { isDarkTheme } = useContext(ThemeContext);
  
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A personal blog for tech writeups and discoveries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={isDarkTheme ? '#121212' : '#ffffff'} />
      </Head>

      <header className="header">
        <div className="header-content">
          <div className="header-left">
            {home ? (
              <div className="logo">
                <h1>xtle0o0.io</h1>
              </div>
            ) : (
              <div className="logo">
                <Link href="/">
                  <h2>xtle0o0.io</h2>
                </Link>
              </div>
            )}
          </div>
          <nav className="nav">
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>{children}</main>
      
      <footer>
        {!home && (
          <div className="back-home">
            <Link href="/">
              ← Back to home
            </Link>
          </div>
        )}
        <div className="footer-content">
          <p>© {new Date().getFullYear()} xtle0o0.io | Built with Next.js</p>
        </div>
      </footer>
    </div>
  );
} 