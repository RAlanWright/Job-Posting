var fetch = require('node-fetch');


const baseURL = 'https://jobs.github.com/positions.json'

module.exports = async function fetchGithub() {

    let resultCount = 1, onPage = 0;
    const allJobs = [];

    while(resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(jobs);
    console.log('got', jobs.length, 'jobs');
    onPage++;
    }
}

module.exports();