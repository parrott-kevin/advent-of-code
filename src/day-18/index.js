function parse (str) {
  const memory = {}
  const commands = str.split(/\n/).map(instruction => {
    const s = instruction.trim().split(' ')
    const command = s[0]
    const register = s[1]
    const value = s.length === 3 ? s[2] : null
    if (Number.isNaN(parseInt(register, 10))) {
      !(register in memory) && (memory[register] = 0)
    }
    return {
      command,
      register,
      value
    }
  })
  return { memory, commands }
}

const part1 = (input) => {
  const { memory: music, commands } = parse(input)
  let i = 0
  let done = false

  while (!done) {
    const instruction = commands[i]
    const value = Number.isNaN(parseInt(instruction.value, 10)) ? music[instruction.value] : parseInt(instruction.value, 10)
    switch (instruction.command) {
      case 'snd':
        music.lastPlayed = music[instruction.register]
        break
      case 'set':
        music[instruction.register] = value
        break
      case 'add':
        music[instruction.register] += value
        break
      case 'mul':
        music[instruction.register] *= value
        break
      case 'mod':
        music[instruction.register] %= value
        break
      case 'rcv':
        if (music[instruction.register] !== 0) {
          return music.lastPlayed
        }
        break
      case 'jgz':
        if (music[instruction.register] > 0) {
          i += value
        }
        break
    }
    if (instruction.command !== 'jgz' || music[instruction.register] <= 0) {
      i++
    }
    if (i > commands.length) {
      done = true
    }
  }
  return true
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

const part2 = (input) => {
  const { memory, commands } = parse(input)
  const programs = {
    'a': {
      queue: new Queue(),
      memory: Object.assign({}, memory, { 'p': 0 }),
      commands
    },
    'b': {
      queue: new Queue(),
      memory: Object.assign({}, memory, { 'p': 1 }),
      commands
    }
  }

  let done = false
  let terminateA = false
  let terminateB = false
  let a = 0
  let b = 0
  let sendA = 0

  while (!done) {
    const instructionA = programs.a.commands[a]
    if (instructionA) {
      const valueA = Number.isNaN(parseInt(instructionA.value, 10)) ? programs.a.memory[instructionA.value] : parseInt(instructionA.value, 10)
      switch (instructionA.command) {
        case 'snd':
          const value = Number.isNaN(parseInt(instructionA.register, 10)) ? programs.a.memory[instructionA.register] : parseInt(instructionA.register, 10)
          programs.b.queue.enqueue(value)
          sendA++
          break
        case 'rcv':
          if (programs.a.queue.size() <= 0) {
            terminateA = true
          } else {
            programs.a.memory[instructionA.register] = programs.a.queue.dequeue()
          }
          break
        case 'set':
          programs.a.memory[instructionA.register] = valueA
          break
        case 'add':
          programs.a.memory[instructionA.register] += valueA
          break
        case 'mul':
          programs.a.memory[instructionA.register] *= valueA
          break
        case 'mod':
          programs.a.memory[instructionA.register] %= valueA
          break
        case 'jgz':
          if (programs.a.memory[instructionA.register] > 0) {
            a += valueA
          }
          break
      }
      if (instructionA.command !== 'jgz' || (instructionA.command && programs.a.memory[instructionA.register] <= 0)) {
        a++
      }
    }

    const instructionB = programs.b.commands[b]
    if (instructionB) {
      const valueB = Number.isNaN(parseInt(instructionB.value, 10)) ? programs.b.memory[instructionB.value] : parseInt(instructionB.value, 10)
      switch (instructionB.command) {
        case 'snd':
          const value = Number.isNaN(parseInt(instructionB.register, 10)) ? programs.b.memory[instructionB.register] : parseInt(instructionB.register, 10)
          programs.a.queue.enqueue(value)
          break
        case 'rcv':
          if (programs.b.queue.size() <= 0) {
            terminateB = true
          } else {
            programs.b.memory[instructionB.register] = programs.b.queue.dequeue()
          }
          break
        case 'set':
          programs.b.memory[instructionB.register] = valueB
          break
        case 'add':
          programs.b.memory[instructionB.register] += valueB
          break
        case 'mul':
          programs.b.memory[instructionB.register] *= valueB
          break
        case 'mod':
          programs.b.memory[instructionB.register] %= valueB
          break
        case 'jgz':
          if (programs.b.memory[instructionB.register] > 0) {
            b += valueB
          }
          break
      }
      if (instructionB.command !== 'jgz' || (instructionB.command && programs.b.memory[instructionB.register] <= 0)) {
        b++
      }
    }

    if ((terminateA && terminateB) || (!instructionA && !instructionB)) {
      done = true
    }
  }
  return sendA
}

module.exports = { part1, part2 }
