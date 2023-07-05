//external modules/ packages need to be installed first with npm i packagename this is done after npm init -y to get the json package

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);