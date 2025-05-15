import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>Tableau de bord</h1>
        <p style={styles.subtitle}>Bienvenue dans votre espace SafeShare.</p>

        <div style={styles.grid}>
          <Card title="Espaces de travail" onClick={() => navigate('/espaces')} />
          <Card title="Fichiers" onClick={() => navigate('/fichiers')} />
          <Card title="Partage" onClick={() => navigate('/partage')} />
          <Card title="Utilisateurs" onClick={() => navigate('/utilisateurs')} />
        </div>
      </div>
    </Layout>
  );
}

function Card({ title, onClick }) {
  return (
    <div onClick={onClick} style={styles.card} tabIndex={0} role="button" onKeyDown={e => e.key === 'Enter' && onClick()}>
      <h3>{title}</h3>
      <p>Gérez vos {title.toLowerCase()} en toute simplicité.</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '2rem auto',
    color: 'white',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.25rem',
    color: '#646cff',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#aaa',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
    gap: '1.5rem',
  },
  card: {
    backgroundColor: '#2c2c2c',
    borderRadius: '12px',
    padding: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0 0 12px rgba(100,108,255,0.5)',
    transition: 'transform 0.2s ease',
  },
};

styles.card[':hover'] = {
  transform: 'scale(1.03)',
};

