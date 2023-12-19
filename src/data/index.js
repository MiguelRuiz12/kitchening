const {readFileSync, writeFileSync} = require('fs')

module.exports = {
    leerJSON : (fileName) => {
        return JSON.parse(readFileSync(`./src/data/${fileName}.json`,'utf-8'))
    },
    escribirJSON : (data,fileName) => {
        writeFileSync(`./src/data/${fileName}.json`,JSON.stringify(data,null,3),'utf-8')
        return null;
    }
}