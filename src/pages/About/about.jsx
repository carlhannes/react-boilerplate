import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../layout';

import Sidebar from '../../components/Sidebar';

function Counter({ count }) {
  return (
    <p>
      Counted to
      {' '}
      {count}
    </p>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

class About extends React.Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    this.setState({ count: 10 });
  }

  addCounter = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <Layout sidebar={(<Sidebar />)}>
        <h1>About</h1>
        <Counter count={count} />
        <button type="button" onClick={this.addCounter}>
          Click here to add to the counter!
        </button>
      </Layout>
    );
  }
}

export default About;
