function depthFirstIterative (graph, root) {
  const visited = [root]
  let stack = [...graph[root]]

  while (stack.length > 0) {
    const node = stack.pop()
    if (visited.indexOf(node) < 0) {
      visited.push(node)
      stack = [...stack, ...graph[node]]
    }
  }

  return visited
}

const parse = (ary) => {
  return ary.reduce((storage, i) => {
    const s = i.split('<->')
    const id = parseInt(s[0], 10)
    const comms = s[1].split(',').map(i => parseInt(i, 10))
    !(id in storage) && (storage[id] = comms)
    return storage
  }, {})
}

const part1 = (input) => {
  const programs = parse(input)
  return (depthFirstIterative(programs, 0)).length
}

const part2 = (input) => {
  const programs = parse(input)
  let visited = []
  let groups = []
  for (let key in programs) {
    const id = parseInt(key, 10)
    if (visited.indexOf(id) < 0) {
      const dfi = depthFirstIterative(programs, id, 10)
      visited = [...visited, ...dfi]
      groups.push(dfi)
    }
  }
  return groups.length
}

module.exports = { part1, part2 }
