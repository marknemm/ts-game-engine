const fs = require('fs');
const libPackageJson = require('../lib/package.json');
const demoPackageJson = require('./package.json');

if (libPackageJson.dependencies && demoPackageJson.dependencies) {
  demoPackageJson.dependencies = Object.assign(libPackageJson.dependencies, demoPackageJson.dependencies);
  fs.writeFileSync('./package.json', JSON.stringify(demoPackageJson, null, 2));
}
