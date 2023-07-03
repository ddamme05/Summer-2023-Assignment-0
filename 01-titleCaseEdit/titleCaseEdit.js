function titleCaseEdit(title) {
  const wordArr = title.toLowerCase().split(' ');
  const capitalizedWord = wordArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const result = capitalizedWord.join(' ');
  return result;
}

// Do not edit this line;
module.exports = titleCaseEdit;