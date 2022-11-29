module.exports = function(content) {
    return content
}

module.exports.pitch=function(){
    console.log('pitchLoader')
}

//pitch 中的内容会在loader content  输出前执行  多个pitchloader时 先执行全部loader的pitch内容 在输出 content