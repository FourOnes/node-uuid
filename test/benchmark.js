var nodeuuid = require('../uuid'),
    uuid = require('uuid').generate,
    uuidjs = require('uuid-js'),
    N = 5e5;

function rate(msg, t) {
  console.log(msg + ': ' +
    (N / (Date.now() - t) * 1e3 | 0) +
    ' uuids/second');
}

// node-uuid - string form
for (var i = 0, t = Date.now(); i < N; i++) nodeuuid();
rate('nodeuuid()', t);

for (var i = 0, t = Date.now(); i < N; i++) nodeuuid('binary');
rate('nodeuuid(\'binary\')', t);

var buffer = new nodeuuid.BufferClass(16);
for (var i = 0, t = Date.now(); i < N; i++) nodeuuid('binary', buffer);
rate('nodeuuid(\'binary\', buffer)', t);

// libuuid - string form
for (var i = 0, t = Date.now(); i < N; i++) uuid();
rate('uuid()', t);

for (var i = 0, t = Date.now(); i < N; i++) uuid('binary');
rate('uuid(\'binary\')', t);

// uuid-js - string form
for (var i = 0, t = Date.now(); i < N; i++) uuidjs.create(4);
rate('uuidjs.create(4)', t);

// node-uuid - v1 string form
for (var i = 0, t = Date.now(); i < N; i++) nodeuuid.v1();
rate('nodeuuid.v1()', t);

for (var i = 0, t = Date.now(); i < N; i++) nodeuuid.v1('binary');
rate('nodeuuid.v1(\'binary\')', t);

var buffer = new nodeuuid.BufferClass(16);
for (var i = 0, t = Date.now(); i < N; i++) nodeuuid.v1('binary', buffer);
rate('nodeuuid.v1(\'binary\', buffer)', t);

// uuid-js - v1 string form
for (var i = 0, t = Date.now(); i < N; i++) uuidjs.create(1);
rate('uuidjs.create(1)', t);
