const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if  (!Array.isArray(members)) return false;
  const letters = [];
  for (const m of members){
    if (typeof m === 'string') {
      const trimmed = m.trim();
      if (trimmed) {
      const name = (trimmed[0]).toUpperCase();
      letters.push(name);
    }
    }
  }
  letters.sort();
return letters.join('');
}

module.exports = {
  createDreamTeam
};
