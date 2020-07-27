const fs = require('fs');

fixUnableToRunWithXcodeEleventAndUp();

function fixUnableToRunWithXcodeEleventAndUp() {
  replaceFileContent(
    './node_modules/react-native/React/Base/RCTModuleMethod.mm',
    `return RCTReadString(input, "__unused") ||
         RCTReadString(input, "__attribute__((unused))");`,
    `return RCTReadString(input, "__attribute__((unused))") ||
    RCTReadString(input, "__attribute__((__unused__))") ||
    RCTReadString(input, "__unused");`,
  );
}

function replaceFileContent(filePath, source, transform) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath).toString();
    let result = data.replace(source, transform);
    fs.writeFileSync(filePath, result);
  }
}
