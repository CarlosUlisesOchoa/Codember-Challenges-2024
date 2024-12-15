const fs = require('fs')
const path = require('path')
const { getTrueAndFalseOmegaPasswords } = require('../src/challenge-02/challenge-02.js')

describe('Challenge 02 - Detecting unwanted access', () => {
  test('should correctly identify valid and invalid OMEGA passwords from log.txt', () => {
    // Read the log.txt file
    const logPath = path.join(__dirname, '../src/challenge-02/log.txt')
    const fileContent = fs.readFileSync(logPath, 'utf8')

    // Normalize line endings and remove any BOM
    const normalizedContent = fileContent.replace(/\r\n/g, '\n').replace(/^\uFEFF/, '')
    const passwords = normalizedContent.trim().split('\n')

    // Get the result
    const result = getTrueAndFalseOmegaPasswords(passwords)

    expect(result).toBe('299true198false')
  })
})
