function shortURL (length) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '0123456789'
  const letter = lowerCaseLetters + upperCaseLetters + number
  let shortURL = ''
  for (let i = 0; i < length; i++) {
    const index = Math.trunc(Math.random() * letter.length)
    shortURL += letter[index]
  }
  return shortURL
}

module.exports = shortURL
