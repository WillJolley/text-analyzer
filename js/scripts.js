function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(word) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}
function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
    return wordCount;
  });
}
function omitBadWords(text) {
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes("zoinks" || "muppeteer" || "biffaroni" || "loopdaloop"));
      
  });
}

