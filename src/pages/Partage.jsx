import React from 'react';
import Layout from '../components/Layout';

export default function Partage() {
  return (
    <Layout>
      <div style={styles.container}>
        <h2>Partage</h2>
        <p>Gérez les droits d'accès et liens de partage de vos fichiers.</p>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    color: 'white',
    maxWidth: '900px',
    margin: '2rem auto',
  },
};
