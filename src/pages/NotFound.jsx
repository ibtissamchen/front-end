import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1>404 - Page non trouvée</h1>
      <Link to="/" style={styles.link}>Retour à l'accueil</Link>
    </div>
  );
}

const styles = {
  container: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ccc',
  },
  link: {
    marginTop: '1rem',
    color: '#646cff',
    textDecoration: 'none',
    fontWeight: '600',
  },
};
