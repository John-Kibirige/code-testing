const capitalizeString = (str) => {
  if (str.length === 0) return str;
  let char = str[0].toUpperCase();
  return char + str.slice(1);
};

module.exports = capitalizeString;
