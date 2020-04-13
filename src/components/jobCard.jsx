import React, { Component } from 'react';
import { Button, Header, Modal, Input } from 'semantic-ui-react';
import { getJobs, deleteJob, saveTask } from './../services/jobService';

class JobCard extends Component {
  state = {
    data: [],
    tasks: { name: '' },
    modalOpen: false,
  };

  async componentDidMount() {
    const { data } = await getJobs();
    this.setState({ data });
  }

  handleTaskChange = (e) => {
    const task = { ...this.state.tasks };
    task.name = e.currentTarget.value;
    this.setState({ tasks: task });
  };

  handleTaskSubmit = async (job) => {
    await saveTask(job._id, this.state.tasks);
    this.setState({ modalOpen: false });
    window.location.reload();
  };

  handleJobDelete = async (job) => {
    const jobs = this.state.data.filter((j) => j._id !== job._id);
    this.setState({ data: jobs });
    await deleteJob(job._id);
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui centered cards">
          {this.state.data.map((job) => (
            <div className="ui card" key={job._id}>
              <div className="content">
                <div className="header">{job.title}</div>
                <div className="meta">{job.creationDate}</div>
                <div className="description">
                  <Modal
                    trigger={
                      <button
                        className="ui mini primary button"
                        onClick={this.handleOpen}
                      >
                        Add Task
                      </button>
                    }
                    open={this.state.modalOpen}
                    basic
                    size="small"
                  >
                    <Header icon="plus" content="Add New Task" />
                    <Modal.Content>
                      <Input
                        name="taskname"
                        fluid
                        value={this.state.tasks.name}
                        onChange={this.handleTaskChange}
                      />
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        type="submit"
                        color="green"
                        onClick={() => this.handleTaskSubmit(job)}
                      >
                        Add Task
                      </Button>
                    </Modal.Actions>
                  </Modal>
                  <button
                    className="ui mini right floated red button"
                    onClick={() => this.handleJobDelete(job)}
                  >
                    Remove Job
                  </button>
                  {job.tasks.map((task) => (
                    <div className="ui big message" key={task._id}>
                      <p>{task.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default JobCard;
