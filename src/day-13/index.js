const part1 = (firewall, maxDepth) => {
  let severity = 0
  let packetPosition = 0
  for (let i = 0; i <= maxDepth; i++) {
    if (packetPosition in firewall) {
      const depth = firewall[packetPosition]
      const x = i % (2 * (depth.range - 1))
      // absolute value function y = a * abs(x - c) + d
      const rangePosition = -1 * Math.abs(x - (depth.range - 1)) + (depth.range - 1)
      if (rangePosition === 0) {
        severity += packetPosition * depth.range
      }
    }
    packetPosition += 1
  }
  return severity
}

const part2 = (firewall, maxDepth) => {
  let done = false
  let delay = 0
  let packetPosition = 0
  while (!done) {
    let caught = false
    for (let i = 0; i <= (maxDepth - delay); i++) {
      if (packetPosition >= 0) {
        if (packetPosition in firewall) {
          const depth = firewall[packetPosition]
          const x = i % (2 * (depth.range - 1))
          // absolute value function y = a * abs(x - c) + d
          const rangePosition = -1 * Math.abs(x - (depth.range - 1)) + (depth.range - 1)
          if (rangePosition === 0) {
            caught = true
            break
          }
        }
      }
      // console.log(i, packetPosition, (packetPosition in firewall), caught)
      packetPosition += 1
    }
    if (caught) {
      delay -= 1
      packetPosition = delay
    } else {
      done = true
    }
  }

  return Math.abs(delay)
}

module.exports = { part1, part2 }
