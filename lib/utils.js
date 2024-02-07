const fs = require('fs');
const path = require('path');

exports.confirmPath = dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  return dir;
};

exports.getProjectRoot = () => {
  let currentPath = process.cwd();

  while(true) {
    const files = fs.readdirSync(currentPath);
    if (files.indexOf('package.json') >= 0 && files.indexOf('src') >= 0) {
      break;
    } else if (path.join(currentPath, '..') === currentPath) {
      currentPath = null;
      break;
    } else {
      currentPath = path.join(currentPath, '..');
    }
  }

  return currentPath ?? process.cwd();
};


exports.nameCreator = (src) => {
  let names;

  if (!!src) {
    if (src.split('-').length > 1) {
      names = src.split('-');
    } else if (src.search(/[A-Z]/) >= 0) {
      names = splitByCapital(src);
    } else {
      names = [src];
    }
  }

  return {
    '$obj-name$': names.map(f => f.toLowerCase()).join('-'),
    '$ObjName$': names.map(f => `${f.charAt(0).toUpperCase()}${f.substring(1).toLowerCase()}`).join(''),
    '$objName$': names.map((f, i) => `${i === 0 ? f.charAt(0).toLowerCase() : f.charAt(0).toUpperCase()}${f.substring(1).toLowerCase()}`).join(''),
  };
}

function splitByCapital(str) {
  const result = [];
  if (!!str) {
    let tmp = '';
    for (let c = 0; c < str.length; c ++) {
      if (/[A-Z]/.test(str.charAt(c)) && tmp.length > 0) {
        result.push(tmp + '');
        tmp = '';
      }

      tmp = tmp + str.charAt(c).toLowerCase();
    }

    if (tmp.length > 0) result.push(tmp + '');
  }

  return result;
};
