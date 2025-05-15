import React from 'react';
import Layout from '../components/Layout';

export default function Fichiers() {
  return (
    <Layout>
      <div style={styles.container}>
        <h2>Fichiers</h2>
        <p>Gérez vos fichiers partagés et privés, upload, suppression, organisation.</p>
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
