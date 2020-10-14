const images = require('../HardcodedImages')

function imageCheck(){
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        if (img.type === '.jpg' || img.type === '.png'){
        
        } else {
            return `${img.owner} image format is not acceptable. Img type: ${img.type} `
        }
    }
}

module.exports = imageCheck