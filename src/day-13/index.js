// https://stackoverflow.com/a/22400799/3614351
const triangle = (p, x) => {
  return p - Math.abs((x % (2 * p)) - p)
}

const part1 = (firewall, maxDepth) => {
  let severity = 0
  let packetPosition = 0
  for (let i = 0; i <= maxDepth; i++) {
    if (packetPosition in firewall) {
      const depth = firewall[packetPosition]
      const rangePosition = triangle(depth.range - 1, i)
      if (rangePosition === 0) {
        severity += packetPosition * depth.range
      }
    }
    packetPosition++
  }
  return severity
}

const part2 = (firewall, maxDepth) => {
  let done = false
  let delay = 0
  let packetPosition = 0
  let depths = Object.keys(firewall).map(i => parseInt(i, 10))
  while (!done) {
    let caught = false
    for (let i = 0; i <= (maxDepth + delay); i++) {
      if (packetPosition >= 0 && depths.includes(packetPosition)) {
        const depth = firewall[packetPosition]
        const rangePosition = triangle(depth.range - 1, i)
        if (rangePosition === 0) {
          caught = true
          break
        }
      }
      // console.log(i, packetPosition, (packetPosition in firewall), caught)
      packetPosition++
    }
    if (caught) {
      delay++
      packetPosition = -1 * delay
    } else {
      done = true
    }
  }

  return delay
}

module.exports = { part1, part2 }
