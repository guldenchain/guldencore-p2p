'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on guldencore-p2p Module {0}'
};

module.exports = require('guldencore-lib').errors.extend(spec);
