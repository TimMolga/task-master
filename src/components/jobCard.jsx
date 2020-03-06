import React, { Component } from 'react';
import { getJobs } from './../services/jobService';

class JobCard extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const { data } = await getJobs();
    this.setState({ data });
    console.log({ data });
  }

  // handleTaskDelete = task => {
  //   const mappedData = this.state.data.map(correctTask => {
  //     const filteredData = correctTask.tasks.filter(t => t._id !== task._id);
  //     return {
  //       ...correctTask,
  //       tasks: filteredData
  //     };
  //   });
  //   this.setState({ data: mappedData });
  // };

  // handleJobDelete = job => {
  //   const jobs = this.state.data.filter(j => j._id !== job._id);
  //   this.setState({ data: jobs });
  // };

  render() {
    return (
      <React.Fragment>
        <div className="ui centered cards">
          {this.state.data.map(job => (
            <div className="ui card" key={job._id}>
              <div className="content">
                <div className="header">{job.title}</div>
                <div className="meta">{job.creationDate}</div>
                <div className="description">
                  <button className="ui mini primary button">Add Task</button>
                  <button
                    className="ui mini right floated red button"
                    onClick={() => this.handleJobDelete(job)}
                  >
                    Remove Job
                  </button>
                  {job.tasks.map(task => (
                    <div className="ui big message" key={task._id}>
                      <p>
                        {task.name}
                        <button
                          onClick={() => this.handleTaskDelete(task)}
                          className="ui right floated mini circular red basic icon button"
                        >
                          <i aria-hidden="true" className="close icon"></i>
                        </button>
                      </p>
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
