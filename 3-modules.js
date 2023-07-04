//  Common Js, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
// console.log(names);

const sayHi = require('./5-utils')
const data = require('./6-alternative-export')

// console.log(data);

require('./7-mind-grenade')

sayHi(names.mihret)
sayHi(names.amanuel)
sayHi("lala")