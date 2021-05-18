const fs = require('fs');


let pathFile = './db/data.json';

const saveFile = (data) => {
    
    fs.writeFileSync(pathFile,JSON.stringify(data) , (err) => {
        if (err) throw err;
    });
}

const readFile = ()=>{

    if (!fs.existsSync(pathFile)) {
        return null
    }
    
    const info = fs.readFileSync(pathFile, {encoding:'utf-8'});
    return JSON.parse(info)
}


module.exports = {
    saveFile,
    readFile
}