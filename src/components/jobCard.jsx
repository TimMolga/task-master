import React, { Component } from 'react';
import { getJobs } from './../services/fakeJobService';

class JobCard extends Component {
  state = {
    data: getJobs()
  };

  handleTaskDelete = task => {
    const mappedData = this.state.data.map(correctTask => {
      const filteredData = correctTask.tasks.filter(t => t._id !== task._id);
      return {
        ...correctTask,
        tasks: filteredData
      };
    });
    this.setState({ data: mappedData });
  };

  handleJobDelete = job => {
    const jobs = this.state.data.filter(j => j._id !== job._id);
    this.setState({ data: jobs });
    console.log(job);
  };

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
                  {job.tasks.map(task => (
                    <div className="ui big message" key={task._id}>
                      <p>
                        {task.name}
                        <button
                          onClick={() => this.handleTaskDelete(task)}
                          className="ui right floated mini circular red basic icon button"
                          style={{ cursor: 'pointer' }}
                        >
                          <i aria-hidden="true" className="close icon"></i>
                        </button>
                      </p>
                    </div>
                  ))}
                  <button className="ui mini primary button">Add Job</button>
                  <button
                    className="ui mini right floated red button"
                    onClick={() => this.handleJobDelete(job)}
                  >
                    Remove Job
                  </button>
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
