'use strict';
require('dotenv').config();

const Moleculer = require('moleculer');

module.exports = {
  namespace: 'dev',
  nodeID: process.pid,

  logger: true,
  logLevel: 'info',
  logFormatter: 'default',

  transporter: 'NATS',

  cacher: 'Memory',

  serializer: null,

  requestTimeout: 0 * 1000,
  requestRetry: 0,
  maxCallLevel: 0,
  heartbeatInterval: 5,
  heartbeatTimeout: 15,

  disableBalancer: false,

  registry: {
    strategy: Moleculer.Strategies.RoundRobin,
    preferLocal: true
  },

  circuitBreaker: {
    enabled: false,
    maxFailures: 3,
    halfOpenTime: 10 * 1000,
    failureOnTimeout: true,
    failureOnReject: true
  },

  validation: true,
  validator: null,
  metrics: true,
  metricsRate: 1,
  statistics: true,
  internalActions: true,

  hotReload: false
};
