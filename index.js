const execFile = require('child_process').execFile;
const moment = require('moment');

const startDate = moment('2017-01-01');
const endDate = moment('2017-04-03');
const currentDate = startDate.clone().startOf('day');
const lastDate = endDate.clone().startOf('day');

while (currentDate.add(1, 'days').diff(lastDate) < 0) {
    execFile('./bin/bin.sh', [currentDate], (error, stdout, stderr) => {
        console.log('###########################################################################');
        console.log('ERROR  --------> ', error)
        console.log('stdout --------> ', stdout);
        console.log('###########################################################################');
    });
}
