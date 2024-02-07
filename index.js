#!/usr/bin/env node

const query = require('./lib/query');
const generator = require('./lib/generator');
const utils = require('./lib/utils');
const path = require('path');

(async () => {
  try {
    const compType = await query.selectType();

    const isPage = await query.isYesOrNo('Are you place this component as a page?');
    const surfix = isPage ? 'Page' : 'Component';

    const filename = await query.textInput('Please input target name.', `MyPrecious${surfix}`);

    const prjRoot = utils.getProjectRoot();
    const srcRoot = path.join(prjRoot, 'src');
    const selPath = isPage ? path.join(srcRoot, 'pages') : await query.selectPath(srcRoot);

    const msg = `Generating a ${compType === 'func' ? 'Function type' : 'Class type'} ${isPage ? 'page' : 'component'} with name of "${filename}" in ${selPath}.\n  Is it okay to proceed?`;
    const confirm = await query.isYesOrNo(msg);

    if (confirm) {
      generator.template(filename, `component/${compType}/[ObjName]`, selPath);
    }
  } catch(error) {
    console.error(error);
  }
})();
