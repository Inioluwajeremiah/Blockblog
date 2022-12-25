// const ipfsClient = require('ipfs-http-client');
// // const ipfs = ipfsClient('https://ipfs.infura.io:5001/api/v0');
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });
// export default ipfs;

import { create } from 'ipfs-http-client'

// connect to the default API address http://localhost:5001
// const client = create()
// connect using a URL
// const ipfs = create(new URL('https://ipfs.infura.io:5001'))
// const ipfs = create ({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });
const ipfs = create()
export default ipfs;