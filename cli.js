#!/usr/bin/env node
const [bin, loc, ...args] = process.argv
process.stdin.setEncoding('utf8')
const blueText = text => console.log(`\x1b[34m${text}\x1b[0m`)
const handleRequest = data => {
  blueText(data)
  process.exit(0)
}
if (args.length) {
  handleRequest(args.join(' '))
} else {
  process.stdin.resume()
  process.stdin.on('data', handleRequest)
}

