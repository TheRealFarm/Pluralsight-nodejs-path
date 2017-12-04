var spawn = require('child_process').spawn,
    tasklist = spawn('tasklist'),
    find = spawn('find', ['atom']);

tasklist.stdout.pipe(find.stdin);
find.stdout.pipe(process.stdout);

tasklist.stderr.on('data', function(data) {
  console.log('tasklist stderr: ' + data);
});

tasklist.stderr.on('data', function(data) {
  console.log('find stderr: ' + data);
});
