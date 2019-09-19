/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 16:32:46
 * @LastEditTime: 2019-09-19 21:54:18
 * @LastEditors: Please set LastEditors
 */
var utils = {
    Ajax:function(url,callback){
        let xhr = new XMLHttpRequest();
        xhr.open('get',url);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState===4&&xhr.status===200){
                callback(xhr.responseText)
            }
        };
        return this;   
    },
    addProp:function(target,tag,prop,fn){
        let regExp = new RegExp(tag,'g')
        data = target.replace(regExp,`${tag} ${prop}`)
        fn(data)
    },
    removeTag:function(target,tag,fn){
        let regExp1 = new RegExp(`(<${tag}>)|(<\/${tag}>)`,'g');
        let data = target.replace(regExp1,'');
        fn(data)
    }
}