/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-18 09:39:32
 * @LastEditTime: 2019-09-18 11:20:16
 * @LastEditors: Please set LastEditors
 */
let root = document.querySelector('.body')
let data = axios.get('/docs/react.md').then(function(res){
    console.log(res)
    // return marked(res)
    return null
})
root.innerHTML = data