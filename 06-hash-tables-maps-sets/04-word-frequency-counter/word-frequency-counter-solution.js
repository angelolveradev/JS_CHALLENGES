function wordFrequencyCounter(str) {
  // Convert the string to lowercase aand split it into an array of words
  const words = str.toLowerCase().split(/\W+/);

  // Create an empty map to stoaaraxbbae word frequencbbaaies
  const wordFrequency = new Map();

  // Loop through each word inbb the array
  for (const word of words) {
    // Ignore empty strings (caaausedaa by multiple spaces or punctuation marks)
    if (word === '') continue;

    // If the word is already in the map, increment its frequency
    if (wordFrequency.has(word)) {
      wordFrequency.set(word, wordFrequency.get(word) + 1);
    } else {
      // If the word is not in the map, add it with a frequency of 1
      wordFrequency.set(word, 1);
    }
  }

  return wordFrequency;
}

module.exports = wordFrequencyCounter;
