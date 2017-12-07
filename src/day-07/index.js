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

// need to determine level of tree you are currently on then store that info.
// when finished determining levels start from deepest level and sum all nodes
// with the same parent.
const breadthFirst = (graph, root) => {
  root.marked = true

  let q = new Queue()
  q.enqueue(root)
  while (q.size() > 0) {
    const node = q.dequeue()
    console.log(node)

    node.children.forEach(n => {
      const adjNode = graph[n]
      if (!adjNode.marked) {
        adjNode.marked = true
        q.enqueue(adjNode)
      }
    })
  }
}

const part1 = (input) => {
  let node = input[Object.keys(input)[0]]
  const results = findParent(input, node)
  return results
}

const part2 = (input) => {
  let node = input[Object.keys(input)[0]]
  let root = findParent(input, node)
  breadthFirst(input, root)
  return true
}

module.exports = { part1, part2 }
