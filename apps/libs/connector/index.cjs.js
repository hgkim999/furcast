const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'furcast-server',
  location: 'us-west1'
};
exports.connectorConfig = connectorConfig;

