const localtunnel = require('localtunnel');

async function run(){
  const tunnel = await localtunnel({ port: 3000, subdomain: 'classbooster' });
  console.log(tunnel.url)

  tunnel.on('close', () => {
    setTimeout(() => run(), 1000)
  });

};

run()