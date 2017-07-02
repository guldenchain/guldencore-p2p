<img src="http://bitcore.io/css/images/bitcore-p2p.svg" alt="guldencore payment protocol" height="35" width="102">

Guldencore P2P
=======

[![NPM Package](https://img.shields.io/npm/v/guldencore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/guldencore-p2p)
[![Build Status](https://img.shields.io/travis/guldenchain/guldencore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/guldenchain/guldencore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/guldenchain/guldencore-p2p.svg?style=flat-square)](https://coveralls.io/r/guldenchain/guldencore-p2p?branch=master)

`guldencore-p2p` adds [Gulden protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Guldencore.

See [the main guldencore repo](https://github.com/guldenchain/guldencore) for more information.

## Getting Started

```sh
npm install guldencore-p2p
```
In order to connect to the Gulden network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('guldencore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [guldencore guide](http://guldencore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/guldenchain/guldencore/blob/master/CONTRIBUTING.md) on the main guldencore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/guldenchain/guldencore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Guldencore Core Developers
