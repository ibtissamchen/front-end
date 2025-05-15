import React from 'react';
import Layout from '../components/Layout';

export default function EspaceTravail() {
  return (
    <Layout>
      <div style={styles.container}>
        <h2>Espaces de travail</h2>
        <p>Liste des espaces auxquels vous appartenez, création et gestion.</p>
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
