const stringLength = (string) => {
  if (string.length === 0) {
    throw new Error('Sorry string must have at least one character');
  }
  return string.length;
};

module.exports = stringLength;
