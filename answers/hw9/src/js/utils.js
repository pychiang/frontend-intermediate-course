var i18n = require('./i18n.js');

function getLocalString(id, region) {
  if(!region || !i18n[region]) {
    region = 'zh-tw';
  }

  return i18n[region][id];
}

module.exports = {
  getLocalString: getLocalString
};