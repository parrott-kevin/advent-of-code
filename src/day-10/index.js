const knot = (list, lengthList, listPosition = 0, skip = 0) => {
  for (let length of lengthList) {
    let sublist
    let sublistIndex = []
    if (listPosition + length >= list.length) {
      const backLength = list.length - listPosition
      const frontLength = length - backLength
      for (let i = listPosition; i < listPosition + backLength; i++) {
        sublistIndex.push(i)
      }
      for (let i = 0; i < frontLength; i++) {
        sublistIndex.push(i)
      }
      sublist = [...list.slice(listPosition, listPosition + backLength), ...list.slice(0, frontLength)]
    } else {
      sublist = list.slice(listPosition, listPosition + length)
      for (let i = listPosition; i < listPosition + length; i++) {
        sublistIndex.push(i)
      }
    }

    let twist = sublist.reverse()
    twist.forEach((value, index) => {
      list[sublistIndex[index]] = value
    })

    if ((length + skip + listPosition) >= list.length) {
      listPosition = (length + skip + listPosition) - list.length
    } else {
      listPosition = length + skip + listPosition
    }
    skip += 1
  }

  if ((list.length + listPosition) >= list.length) {
    listPosition = (list.length + listPosition) - list.length
  } else {
    listPosition = list.length + listPosition
  }

  return {
    listPosition,
    skip,
    list
  }
}
const part1 = (input, end) => {
  let list = []
  for (let i = 0; i < end; i++) {
    list.push(i)
  }
  const results = knot(list, input)
  return results.list[0] * results.list[1]
}

const part2 = (input, end) => {
  let list = []
  for (let i = 0; i < end; i++) {
    list.push(i)
  }
  const converted = input.reduce((result, value, index) => {
    const str = value.toString()
    for (let i = 0; i < str.length; i++) {
      result.push(str[i].charCodeAt(0))
    }
    if (index !== input.length - 1) {
      result.push(','.charCodeAt(0))
    }
    return result
  }, [])

  const lengthList = [...converted, ...[17, 31, 73, 47, 23]]
  const rounds = 64
  let skip = 0
  let listPosition = 0
  for (let i = 0; i < rounds; i++) {
    const results = knot(list, lengthList, listPosition, skip)
    skip = results.skip
    listPosition = results.listPosition
    list = results.list
  }

  return list
  // const sparseHash = [...list]
  // const denseHash = []
  // let hashStart = 0
  // let hashEnd = 16
  // while (hashEnd <= end) {
  //   const block = sparseHash.slice(hashStart, hashEnd)
  //   const xor = block.reduce((result, i) => result ^ i, 0)
  //   denseHash.push(xor)
  //   hashStart += 16
  //   hashEnd += 16
  // }

  // const hex = denseHash.reduce((result, i) => {
  //   const h = i < 10 ? `0${i.toString(16)}` : i.toString(16)
  //   result.push(h)
  //   return result
  // }, [])
  // return hex.join('')
}

module.exports = { part1, part2 }
