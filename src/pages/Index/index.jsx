import React from 'react';

import Layout from '../../layout';

import Sidebar from '../../components/Sidebar';

function Index() {
  return (
    <Layout sidebar={(<Sidebar />)}>
      <h1>Index</h1>
    </Layout>
  );
}

export default Index;
