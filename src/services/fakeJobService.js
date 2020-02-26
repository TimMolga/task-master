const jobs = [
  {
    _id: '111964',
    title: 'Build portfolio',
    creationDate: '2-23-2019',
    tasks: [
      { _id: '324654', name: 'Make front-end' },
      { _id: '987650', name: 'Make back-end' },
      { _id: '436540', name: 'Testing' }
    ]
  },
  {
    _id: '111694',
    title: 'Apply for jobs',
    creationDate: '1-19-2020',
    tasks: [
      { _id: '435765', name: 'Find jobs' },
      { _id: '895946', name: 'Make resume' },
      { _id: '112357', name: 'Apply' }
    ]
  },
  {
    _id: '111356',
    title: 'Do chores',
    creationDate: '2-9-2020',
    tasks: [
      { _id: '324939', name: 'Clean laundry' },
      { _id: '109547', name: 'Empty garbage' },
      { _id: '775945', name: 'Do dishes' }
    ]
  }
];

function getTime() {
  const currentDate = new Date();
  return (
    'Created: ' +
    currentDate.getDate() +
    '-' +
    currentDate.getMonth() +
    '-' +
    currentDate.getFullYear()
  );
}

export function getJobs() {
  return jobs;
}

export function saveJob(job) {
  let newJob = {};
  newJob._id = Date.now();
  newJob.title = job.title;
  newJob.creationDate = getTime();
  newJob.tasks = [];
  jobs.push(newJob);
  return newJob;
}

// export function deleteTask(id) {
//   const mappedData = jobs.map(task => {
//     let oldTask = task.tasks.find(t => t._id === id);
//     task.splice(task.indexOf(oldTask), 1);
//   });
//   return mappedData;
// }

export function deleteJob(id) {
  let oldJob = jobs.find(j => j._id === id);
  jobs.splice(jobs.indexOf(oldJob), 1);
  return oldJob;
}
