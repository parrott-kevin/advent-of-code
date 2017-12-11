function moveCube ({ x, y, z }, direction) {
  switch (direction) {
    case 'n':
      return Object.assign({}, {
        x,
        y: y + 1,
        z: z - 1
      })
    case 'ne':
      return Object.assign({}, {
        x: x + 1,
        y,
        z: z - 1
      })
    case 'se':
      return Object.assign({}, {
        x: x + 1,
        y: y - 1,
        z
      })
    case 's':
      return Object.assign({}, {
        x,
        y: y - 1,
        z: z + 1
      })
    case 'sw':
      return Object.assign({}, {
        x: x - 1,
        y,
        z: z + 1
      })
    case 'nw':
      return Object.assign({}, {
        x: x - 1,
        y: y + 1,
        z
      })
  }
}

function cubeDistance (a, b) {
  return (Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)) / 2
}

const part1 = (input) => {
  const originCube = { x: 0, y: 0, z: 0 }
  const location = input.reduce((r, i) => moveCube(r, i), { x: 0, y: 0, z: 0 })
  return cubeDistance(originCube, location)
}

const main = (input) => {
  const originCube = { x: 0, y: 0, z: 0 }
  const result = input.reduce((r, i) => {
    r.coordinates = moveCube(r.coordinates, i)
    const currentDistance = cubeDistance(originCube, r.coordinates)
    r.max = currentDistance > r.max ? currentDistance : r.max
    return r
  }, { coordinates: { x: 0, y: 0, z: 0 }, max: 0 })
  return {
    final: cubeDistance(originCube, result.coordinates),
    max: result.max
  }
}

module.exports = { main }
