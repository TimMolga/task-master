import http from '../services/httpService';
import { apiUrl } from '../components/config.json';

const apiEndpoint = apiUrl + '/jobs';

function jobUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getJobs() {
  return http.get(apiEndpoint);
}

export function deleteJob(jobId) {
  return http.delete(jobUrl(jobId));
}

export function saveJob(job) {
  return http.post(apiEndpoint, job);
}

export function saveTask(taskId, task) {
  return http.post(jobUrl(taskId), task);
}
