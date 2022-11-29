

module.exports = function(content,map, meta) {
    const callback = this.async()
  
    setTimeout(() =>{
        console.log('异步')
        callback(null,content,map,meta)
    }, 1000)
}