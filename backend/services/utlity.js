const replacer = (string, props) => {
  Object.entries(props).forEach(item => {
    string = string.replace(item[0], item[1]);
  });
  return string;
}

const generateID = (length = 5) => {
  const alphaNumeric = "ABCDEFJHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += alphaNumeric[Math.floor(Math.random() * alphaNumeric.length)];
  }
  return id;
}

module.exports = { replacer, generateID }