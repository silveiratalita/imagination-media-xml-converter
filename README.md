# XML Converter

This project is a library that only convert any Json file into a XML file.

# Installation

The installation of this package is done through NPM

1. Add the private repository referente if your have, to file **./.npmrc** of **PROJECT**.

```bash
# ./.npmrc
registry=always-auth=true

2. Add the library through **NPM**.

# npm
npm install imagination-media-xml-converter --save

# yarn
yarn add imagination-media-xml-converter

```

# How to Use

To use the library you have to import the module and pass the **jsonFile** as parameter, this parameter is required.

```javascript
const xmlConverter = require('imagination-media-xml-converter');
const jsonFile = require('../your/path') || file;
const xmlConverted = xmlConverter.getInstance(jsonFile);
```
