const http = require('http');

const server = http.createServer((req, res) => {

  res.write('fghjkl');

  res.end(() => {
    console.log('asfsaf');
  });

});

server.listen(3000, () => {
  console.log('Server is running...');
});