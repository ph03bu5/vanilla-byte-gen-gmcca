const {Select, Toggle, prompt} = require('enquirer');
const fs = require('fs');
const path = require('path');

exports.isYesOrNo = async (question) => {
  const confirm = new Toggle({
    name: 'isConfirm',
    message: question,
    disabled: 'No',
    enabled: 'Yes',
    initial: true,
  });

  const result = await confirm.run();
  return result;
}

exports.textInput = async (question, defaultValue) => {
  const namePrompt = await prompt({
    type: 'input',
    name: 'value',
    message: question,
    initial: defaultValue,
  });

  return namePrompt.value;
}

exports.selectType = async () => {
  const typeSelect = new Select({
    name: 'selType',
    message: 'What do you want to generate?',
    choices: [
      { message: 'React Function Component', name: 'func', value: 'func' },
      { message: 'React Class Component', name: 'cls', value: 'cls' },
    ]
  });

  const compType = await typeSelect.run();
  return compType;
}

const PLACE_HERE = '[*** place HERE ***]';
exports.selectPath = async (topPath) => {
  let selectedPath = null;
  let currentPath = topPath;

  while(!selectedPath) {
    const dir = await fs.readdirSync(currentPath);
    const parentDir = currentPath === topPath ? [] : ['..'];
    const curDir = dir.filter(d => fs.lstatSync(path.join(currentPath, d)).isDirectory());
    const folders = [...parentDir, ...curDir, PLACE_HERE];
    const folderSelect = new Select({
      name: 'folderSel',
      message: 'Where do you want to place a new component?',
      choices: folders.map(f => ({name: f, value: f}))
    });
    const selected = await folderSelect.run();
    if (selected === PLACE_HERE) {
      selectedPath = currentPath;
    } else {
      currentPath = path.join(currentPath, selected);
    }
  }

  return selectedPath;
}
