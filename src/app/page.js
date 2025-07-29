'use client';

import { useEffect, useState } from 'react';

export default function Home() {

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
      const launchDate = new Date('2025-10-01T00:00:00Z');
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>🚀 Coming Soon</h1>
        <p style={styles.subtitle}>We are building something amazing. Stay tuned.</p>

        {timeLeft.days !== undefined ? (
          <div style={styles.countdown}>
            <span>{timeLeft.days}d</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
          </div>
        ) : (
          <p style={styles.launched}>We are live!</p>
        )}

        <p style={styles.footer}>© 2025 Hosm. All rights reserved.</p>
      </div>
    </main>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("/back1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    color: '#fff',
    textAlign: 'center',
    padding: '0 1.5rem',
    maxWidth: '90%',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: '#ddd',
  },
  countdown: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '2rem',
  },
  launched: {
    fontSize: '1.4rem',
    color: '#90ee90',
    marginBottom: '2rem',
  },
  footer: {
    fontSize: '0.9rem',
    color: '#ccc',
    marginTop: '2rem',
  },
};
