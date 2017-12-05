
const part1 = (input) => {
  const rows = [{
    entry: 1,
    width: 1
  }]

  const rowInfo = (prev, prevWidth) => {
    const entry = prev === 1 ? 2 : prev + prevWidth * 2 + (prevWidth - 2) * 2
    const width = prevWidth + 2
    const ne = entry + width - 2
    const nw = ne + width - 1
    const sw = nw + width - 1
    const se = sw + width - 1
    const north = (nw + ne) / 2
    const west = (sw + nw) / 2
    const south = (se + sw) / 2
    const east = west - 2 * width + 2
    return {
      entry,
      width,
      bounds: {
        right: {
          low: entry,
          mid: east,
          high: ne
        },
        top: {
          low: ne,
          mid: north,
          high: nw
        },
        left: {
          low: nw,
          mid: west,
          high: sw
        },
        bottom: {
          low: sw,
          mid: south,
          high: se
        }
      }
    }
  }

  let i = 0
  let done = false
  while (!done) {
    const { entry, width } = rows[i]
    const nextRow = rowInfo(entry, width)
    if (input > entry && input < nextRow.entry) {
      done = true
    } else {
      rows.push(nextRow)
      i += 1
    }
  }

  const row = rows[i]
  let bounds = {}
  for (let key of Object.keys(row.bounds)) {
    const bound = row.bounds[key]
    if (input > bound.low && input <= bound.high) {
      bounds = Object.assign({}, bound)
      break
    }
  }
  const steps = Math.abs(bounds.mid - input) + Math.round(row.width / 2) - 1
  return steps
}

const part2 = (input) => {
  let grid = [{
    width: 1,
    values: [{
      value: 1,
      x: 0,
      y: 0
    }]
  }]

  const nextCoordinates = (width, { x, y }) => {
    const max = Math.round(width / 2) - 1
    const min = -1 * max
    const moveUp = (x, y) => ({ x, y: y + 1 })
    const moveLeft = (x, y) => ({ x: x - 1, y })
    const moveDown = (x, y) => ({ x, y: y - 1 })
    const moveRight = (x, y) => ({ x: x + 1, y })

    if (width === 1 || (x === max && y === min)) {
      return {
        x: x + 1,
        y,
        width: width + 2
      }
    }

    if (x === max && y === max) {
      return moveLeft(x, y)
    }

    if (x === min && y === max) {
      return moveDown(x, y)
    }

    if (x === min && y === min) {
      return moveRight(x, y)
    }

    if (x === max) {
      return moveUp(x, y)
    }

    if (y === max) {
      return moveLeft(x, y)
    }

    if (x === min) {
      return moveDown(x, y)
    }

    if (y === min) {
      return moveRight(x, y)
    }
  }

  const nextValue = (coords, valueAry) => {
    let sum = 0
    for (let v of valueAry) {
      const acceptableXY = [{
        // east
        x: coords.x + 1,
        y: coords.y
      }, {
        // ne
        x: coords.x + 1,
        y: coords.y + 1
      }, {
        // north
        x: coords.x,
        y: coords.y + 1
      }, {
        // nw
        x: coords.x - 1,
        y: coords.y + 1
      }, {
        // west
        x: coords.x - 1,
        y: coords.y
      }, {
        // sw
        x: coords.x - 1,
        y: coords.y - 1
      }, {
        // south
        x: coords.x,
        y: coords.y - 1
      }, {
        // se
        x: coords.x + 1,
        y: coords.y - 1
      }]
      let val = 0
      for (let xy of acceptableXY) {
        if (xy.x === v.x && xy.y === v.y) {
          val = v.value
          break
        }
      }
      sum += val
    }
    return sum
  }

  let done = false
  let i = 0
  while (!done) {
    const width = grid[i].width
    const gridItem = grid[i].values[grid[i].values.length - 1]

    const newCoords = nextCoordinates(width, { x: gridItem.x, y: gridItem.y })

    const ary = grid.length > 1 ? [].concat(grid[i - 1].values, grid[i].values) : [].concat(grid[i].values)

    const newValue = nextValue(newCoords, ary)
    if (newCoords.width) {
      grid.push(Object.assign({}, {
        width: newCoords.width,
        values: [{
          value: newValue,
          x: newCoords.x,
          y: newCoords.y
        }]
      }))
      i += 1
    } else {
      grid[i].values.push(Object.assign({}, {
        value: newValue,
        x: newCoords.x,
        y: newCoords.y
      }))
    }
    done = newValue > input
  }

  return grid[i].values[grid[i].values.length - 1].value
}

module.exports = {
  part1,
  part2
}
