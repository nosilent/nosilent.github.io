/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 16:32:46
 * @LastEditTime: 2019-09-19 16:40:20
 * @LastEditors: Please set LastEditors
 */
var utils = {
    Ajax(url,callback){
        let xhr = new XMLHttpRequest();
        xhr.open('get',url);
        xhr.send()
        xhr.onreadystatechange = function(){
            if(xhr.readyState===4&&xhr.status===200){
                callback(xhr.responseText)
            }
        }   
    }
}