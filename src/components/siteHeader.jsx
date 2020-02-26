import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

const SiteHeader = () => {
  return (
    <Segment inverted color="black" textAlign="center">
      <Header as="h1" icon>
        <Icon name="tasks" />
        Task Master
        <Header.Subheader style={{ color: 'white' }}>
          Keep track of your work and plan your schedule accordingly!
        </Header.Subheader>
      </Header>
    </Segment>
  );
};

export default SiteHeader;
