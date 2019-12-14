var CronJob = require("cron").CronJob;

const fetchGithub = require("./tasks/fetch-github");

// fetch GitHub jobs
new CronJob("* * * * *", fetchGithub, null, true, "America/Chicago");
