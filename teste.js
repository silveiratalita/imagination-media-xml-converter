const a = require('./src/index');
const jsonfile = require('./order.json');
const s = a.getInstance(jsonfile);
console.log(s);
