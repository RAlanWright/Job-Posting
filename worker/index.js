var CronJob = require('cron').CronJob;
new CronJob('0*/1****', function() {
    console.log('');
}, null, true, 'America/Los_Angeles');