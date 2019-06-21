import React from 'react';

import Layout from '../../layout';

import Sidebar from '../../components/Sidebar';

function About() {
  return (
    <Layout sidebar={(<Sidebar />)}>
      <h1>About</h1>
    </Layout>
  );
}

export default About;
