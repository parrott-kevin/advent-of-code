const findParent = (obj, node) => {
  let parent
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    let visitedNode = obj[keys[i]]
    if (visitedNode.children.includes(node.program)) {
      parent = visitedNode
      break
    }
  }

  if (parent) {
    return findParent(obj, parent)
  } else {
    return node
  }
}

class Queue {
  constructor () {
    this.storage = {}
    this.oldIndex = 0
    this.newIndex = 0
  }

  size () {
    return this.newIndex - this.oldIndex
  }

  enqueue (node) {
    this.storage[this.newIndex] = node
    this.newIndex++
  }

  dequeue () {
    const result = this.storage[this.oldIndex]

    delete this.storage[this.oldIndex]
    this.oldIndex++

    return result
  }
}

const breadthFirstWeight = (graph, root) => {
  root.marked = true

  let totalWeight = root.weight

  let q = new Queue()
  q.enqueue(root)
  while (q.size() > 0) {
    const node = q.dequeue()

    node.children.forEach(n => {
      const adjNode = graph[n]
      if (!adjNode.marked) {
        adjNode.marked = true
        q.enqueue(adjNode)
        totalWeight += adjNode.weight
      }
    })
  }
  return totalWeight
}

const depthFirstRackWeights = (graph, root) => {
  let rack = {}
  let stack = [root.program]
  while (stack.length > 0) {
    let clone = JSON.parse(JSON.stringify(graph))
    let node = graph[stack.pop()]
    let totalWeight = breadthFirstWeight(clone, node)
    rack[node.program] = totalWeight
    stack = stack.concat(node.children)
  }
  return rack
}

const depthFirstInvestigate = (graph, root, rack) => {
  let stack = [root.program]
  let clone = JSON.parse(JSON.stringify(graph))
  let results
  while (stack.length > 0) {
    let node = clone[stack.pop()]
    let weights = node.children.reduce((result, i) => {
      if (!result[rack[i]]) {
        result[rack[i]] = []
      }
      result[rack[i]].push(i)
      return result
    }, {})

    const weightKeys = Object.keys(weights)
    if (node.children.length > 0 && weightKeys.length > 1) {
      const diff = parseInt(weightKeys[0], 10) - parseInt(weightKeys[1], 10)
      for (let key of weightKeys) {
        if (weights[key].length === 1) {
          if (!results || (results && results.children.includes(weights[key][0]))) {
            results = Object.assign({}, clone[weights[key][0]])
            results.diff = diff
          }
        }
      }
    }

    stack = stack.concat(node.children)
  }

  return results.weight + results.diff
}

const part1 = (input) => {
  let node = input[Object.keys(input)[0]]
  const results = findParent(input, node)
  return results
}

const part2 = (input) => {
  const node = input[Object.keys(input)[0]]
  const root = findParent(input, node)
  const rack = depthFirstRackWeights(input, root)
  const results = depthFirstInvestigate(input, root, rack)
  return results
}

module.exports = { part1, part2 }
