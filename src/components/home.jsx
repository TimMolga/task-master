import React, { Component } from 'react';
import SiteHeader from './siteHeader';
import JobCard from './jobCard';
import JobInput from './jobInput';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <SiteHeader />
        <JobInput />
        <JobCard />
      </div>
    );
  }
}

export default Home;
