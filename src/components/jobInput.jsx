import React, { Component } from 'react';
import { Input, Button, Segment, Grid, Popup } from 'semantic-ui-react';
import { saveJob } from './../services/jobService';

class JobInput extends Component {
  state = {
    data: { title: '' }
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data.title = e.currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = async () => {
    await saveJob(this.state.data);
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <Segment basic padded>
            <form>
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
                      animated="fade"
                      onClick={this.handleSubmit}
                      type="submit"
                      size="massive"
                      fluid
                      color="green"
                    >
                      <Button.Content visible>Add Job</Button.Content>
                      <Button.Content hidden>Get Tasking!</Button.Content>
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
