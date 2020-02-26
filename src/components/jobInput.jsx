import React, { Component } from 'react';
import { Input, Button, Segment, Grid, Popup } from 'semantic-ui-react';
import { getJobs, getTime } from './../services/fakeJobService';

class JobInput extends Component {
  state = {
    job: {
      title: '',
      creationDate: '',
      tasks: []
    },
    data: getJobs()
  };

  handleChange = e => {
    const job = { ...this.state.job };
    job.title = e.currentTarget.value;
    job.creationDate = getTime();
    this.setState({ job });
  };

  handleSubmit = e => {
    e.preventDefault();
    const job = { ...this.state.job };
    const join = this.state.data.concat(job);
    this.setState({ data: join });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <Segment basic padded>
            <form onSubmit={this.handleSubmit}>
              <Popup
                content="First add a job, then add tasks to it below."
                trigger={
                  <Input
                    name="jobname"
                    size="massive"
                    fluid
                    icon="plus"
                    placeholder="Add a new job..."
                    value={this.state.data.title}
                    onChange={this.handleChange}
                  />
                }
              />
              <Grid>
                <Grid.Row centered columns={5} style={{ marginTop: '20px' }}>
                  <Grid.Column fluid>
                    <Button
                      onClick={this.handleSubmit}
                      type="submit"
                      size="massive"
                    >
                      Add Job
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
    );
  }
}

export default JobInput;
