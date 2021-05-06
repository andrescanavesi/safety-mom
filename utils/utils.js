/**
 *
 * @param {String} string example: All about Node.js
 * @returns all-about-node-js
 */
module.exports.dashString = function (string) {
  return string
    .toLowerCase()
    .replace('ñ', 'n')
    .replace('¿', '')
    .replace(/[^\w ]+/g, '-')
    .replace(/ +/g, '-')
    .replace(/-{2,}/g, '-');
};
