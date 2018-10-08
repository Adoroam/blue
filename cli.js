#!/usr/bin/env node

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', data => console.log(`\x1b[34m${data}\x1b[0m`))
