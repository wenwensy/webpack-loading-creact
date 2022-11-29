
// //同步loader -当只需要这一个loader 处理时 可以这么定义
// module.exports = function(content) {
//     return content
// }

module.exports = function(contnet,map,meta){
    /**
     * callback的四个参数
     * 第一个参数：err 代表是否有错误，没有错误则为null
     * 第二个参数：content 处理后的内容
     * 第三个参数：source-map 继续传递source-map（这样source-map 就不会断）
     * 第四个参数：meta 给下一个loader 传递的参数
     * 
     * 同步loader　不能进行异步调用
     */
    console.log('同步')
    this.callback(null,content,map,meta) //利用callback 当内容还会被下一个loader 处理时 信息、内容可以继续传递
}