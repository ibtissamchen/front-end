import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const navigate = useNavigate();

  // Simule un état de connexion (à remplacer par ton vrai système)
  const isLoggedIn = true; // pour test, à remplacer

  const handleLogout = () => {
    // Ajouter la logique de déconnexion (nettoyer token, etc.)
    alert('Déconnexion !');
    navigate('/signin');
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logo}>SafeShare</Link>

        {isLoggedIn ? (
          <ul style={styles.navList}>
            <li><Link to="/dashboard" style={styles.navLink}>Dashboard</Link></li>
            <li><Link to="/espaces" style={styles.navLink}>Espaces</Link></li>
            <li><Link to="/fichiers" style={styles.navLink}>Fichiers</Link></li>
            <li><Link to="/partage" style={styles.navLink}>Partage</Link></li>
            <li><Link to="/utilisateurs" style={styles.navLink}>Utilisateurs</Link></li>
            <li><button onClick={handleLogout} style={styles.logoutBtn}>Déconnexion</button></li>
          </ul>
        ) : (
          <ul style={styles.navList}>
            <li><Link to="/signin" style={styles.navLink}>Connexion</Link></li>
            <li><Link to="/signup" style={styles.navLink}>Inscription</Link></li>
          </ul>
        )}
      </nav>

      <main style={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'var(--background-color, #242424)',
    color: 'var(--text-color, #eee)',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'var(--nav-bg, #1a1a1a)',
    padding: '1rem 2rem',
    borderBottom: '1px solid #444',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#646cff',
    textDecoration: 'none',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '1rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  navLink: {
    color: '#ddd',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
  logoutBtn: {
    backgroundColor: '#ff4d4f',
    border: 'none',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  mainContent: {
    flexGrow: 1,
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};
