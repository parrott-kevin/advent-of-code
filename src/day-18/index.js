function parse (str) {
  const music = { lastPlayed: 0 }
  const commands = str.split(/\n/).map(instruction => {
    const s = instruction.trim().split(' ')
    const command = s[0]
    const register = s[1]
    const value = s.length === 3 ? s[2] : null
    !(register in music) && (music[register] = 0)
    return {
      command,
      register,
      value
    }
  })
  return { music, commands }
}

const part1 = (input) => {
  const { music, commands } = parse(input)
  console.log(music, commands)
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

const part2 = () => {
  return true
}

module.exports = { part1, part2 }
