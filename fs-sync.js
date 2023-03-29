const { readFileSync, writeFileSync } = require('fs')
console.log('starting')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync',`here is the result ${first} and ${second}`, {flag:'a'})
console.log('done with task')
console.log('starting new task')