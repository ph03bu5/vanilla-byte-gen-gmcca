const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const utils = require('./utils');
const dayjs = require('dayjs');

async function copyFile(meta, src, tgt) {
  const isDir = fs.lstatSync(src).isDirectory();
  if (isDir) {
    // 디렉토리 생성
    const fileName = src
      .replaceAll('[obj-name]', meta['$obj-name$'])
      .replaceAll('[ObjName]', meta['$ObjName$'])
      .replaceAll('[objName]', meta['$objName$']);
    const tgtDir = path.join(tgt, path.basename(fileName));
    await fse.ensureDir(tgtDir);

    const dir = fs.readdirSync(src);
    dir.forEach(file => {
      // 디렉토리 하위 재귀호출
      const srcpath = path.join(src, file);
      const tgtpath = path.join(tgtDir, file);
      copyFile(meta, srcpath, tgtpath);
    });
  } else {
    // 파일 복사
    const tgt2 = fs.existsSync(tgt) && fs.lstatSync(tgt).isDirectory() ? path.join(tgt, path.basename(src)) : tgt;
    const convertedTgt = tgt2
      .replaceAll('[obj-name]', meta['$obj-name$'])
      .replaceAll('[ObjName]', meta['$ObjName$'])
      .replaceAll('[objName]', meta['$objName$']);
    console.log(`generating "${convertedTgt}" ...`);

    let content = fs.readFileSync(src).toString();
    for (const key in meta) content = content.replaceAll(key, meta[key]);

    fs.writeFileSync(convertedTgt, content);
  }
}

exports.template = async (name, srcPath, tgtPath) => {
  const names = utils.nameCreator(name);
  const source = path.join(__dirname, '../src/', srcPath);

  const packageJson = await fse.readJson(path.join(utils.getProjectRoot(), 'package.json'));

  const meta = {
    '$userName$': require('os').userInfo().username,
    '$YYYY$': dayjs().format('YYYY'),
    '$MM$': dayjs().format('MM'),
    '$DD$': dayjs().format('DD'),
    '$HH$': dayjs().format('HH'),
    '$mm$': dayjs().format('mm'),
    '$ss$': dayjs().format('ss'),
    '$projectName$': packageJson.name,

    ...names,
  };

  copyFile(meta, source, tgtPath);
};
