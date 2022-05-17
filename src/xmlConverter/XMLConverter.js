/**
 * xml converter
 */
const convert = require('xml-js');
const fs = require('fs');

class XMLConverter {
  /**
   *@param {import('type-fest').JsonObject} jsonFile jsofile
   */
  constructor(jsonFile) {
    if (!jsonFile) {
      throw new Error(`Invalid Constructor Args - jsonFile: ${jsonFile}`);
    }
    this._convert = convert;
    this.convertToXML(jsonFile);
  }

  /**
   * convert json to xml
   * @param {import('type-fest').JsonObject} jsonFile jsofile
   * @return {XMLDocument} xml file
   */
  convertToXML(jsonFile) {
    const options = {compact: true, ignoreComment: true, spaces: 4};
    const result = this._convert.json2xml(jsonFile, options);
    return fs.writeFile('./data.xml', result, function(err, result) {
      if (err) {
        console.log('err');
      } else {
        console.log('Xml file successfully updated.');
      }
    });
  }
}

/**
 * @param {import('type-fest').JsonObject} jsonFile jsofile
 * @return {XMLDocument} xml file
 */
module.exports = (jsonFile) => new XMLConverter(jsonFile);
