<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 15:35:47
 * @LastEditTime: 2019-09-20 15:35:47
 * @LastEditors: your name
 -->

## http和https

http:超文本传输协议

https:是以安全为目标的Http通道，是Http的安全版。Https的安全基础是SSL。（SSL协议可分为两层：SSL记录协议、SSL握手协议）

- http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
- http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
- http的连接很简单，是无状态的。Https协议是由SSL+Http协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。(无状态的意思是其数据包的发送、传输和接收都是相互独立的。无连接的意思是指通信双方都不长久的维持对方的任何信息。)

**Https的优点**：

1. 使用Https协议可认证用户和服务器，确保数据发送到正确的客户机和服务器。
2. Https协议是由SSL+Http协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、修改，确保数据的完整性。
3. Https是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。
4. https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用

**Https的缺点**：

1. Https协议握手阶段比较费时，会使页面的加载时间延长近。
2. Https连接缓存不如Http高效，会增加数据开销，甚至已有的安全措施也会因此而受到影响；
3. SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗。
4. Https协议的加密范围也比较有限。

## tcp/ip

分为四层：**链路层**，**网络层**，**传输层**，**应用层**

TCP/IP三次握手建立连接：

1. 建立连接时，客户端发送syn包（syn=j）到服务器，并进入**SYN_SENT**状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。
2. 服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入**SYN_RECV**状态；
3. 客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入**ESTABLISHED**（TCP连接成功）状态

TCP/IP四次挥手终止连接：

1. 数据传输结束后，客户端的应用进程先向其TCP发出释放连接请求，不在发送数据。TCP通知对方要释放从客户端到服务器的连接，将发往主机服务器的TCP报文段首部的终止比特FIN置为1，序号u等于已传送数据的最后一个字节的序号加1
2. 服务器的TCP收到释放连接通知后发出确认，其序号为u+1，同时通知应用进程，这样客户端到服务器的连接就释放了，连接处于半关闭状态。服务器不在接受客户端发来的数据；但服务器还向客户端发送数据，客户端若正确接收数据仍需要发送确认；
3. 在服务器向客户端的数据发送结束后，其应用进程就通知TCP释放连接。服务器发出的连接释放报文段必须将终止比特置为1，并使其序号w等于前面已经传送过的数据的最后一个字节的序号加 1，还必须重复上次已发送过的ACK=u+1；
4. 客户端对服务器的连接释放报文段发出确认，将ACK置为1，ACK=w+1, seq=u+1。这样才把从服务器到客户端的反方向连接释放掉，客户端的TCP再向其应用进程报告，整个连接已经全部释放。

## 页面渲染过程

![img](https://img1.mukewang.com/5c2d835d00012d2514230720.jpg)

## h5新特性

- 新标签： `header` `footer` `nav` `article`  `aside` `video` `radio`
- api: `canvas` `localStorage` `sessionStorage` `drag` `drop`

## doctype作用

告诉浏览器用什么标准解析文档，三种Doctype（严格、松散、框架）

**严格模式：**又称标准模式，是指浏览器按照W3C标准来解析代码，呈现页面

**混杂模式：**又称为怪异模式或者兼容模式，是指浏览器按照自己的方式来解析代码，使用一种比较宽松的向后兼容的方式来显示页面。

## 行内元素、块元素、空元素

- 行内元素： `a` `span` `img` `input` `select `
- 块元素： `div` `p` `ul` `ol` `li` `dl` `dt` `dd` `h1` ... `h6` 
- 空元素： `br` `hr` `img` `input` `link` `meta`

## readonly和disabled区别

- **readonly**属性只是将元素设置为只读，可以获取焦点、失去焦点。而**disabled**属性直接阻止对元素的一切操作。
- **disabled**属性可以让表单元素的值无法被提交。**readonly**属性则不影响提交问题。
- Readonly只针对input(text / password)和textarea有效，而disabled对于所有的表单元素都有效，
- disabled可以通过js修改状态，readonly不能通过js修改状态
- 都可以通过js修改相关表单元素的value

## 浏览器内核

主要由**`渲染引擎`**和**`js引擎`**组成

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显		示方式，然后会输出至显示器或打印机。

js引擎： 解析和执行javascript来实现网页的动态效果。

- trident内核： IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]。
- Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等。
- Presto内核：Opera7及以上。      [Opera内核原为：Presto，现为：Blink;]。
- Webkit内核：Safari,Chrome等。   [ Chrome的：Blink（WebKit的分支）]。

## cookies、sessionStorage、localStorage区别

`cookie`：必须运行在服务器下。数据大小不能超过4k。默认是临时存储，浏览器关闭后自动销毁，长时间存储需要设置一个过期时间。在页面每次http请求时会携带cookie，在客户端与服务器之间来回传递。

```js
//必须在服务器开始的状态下才能操作cookie
document.cookie = 'age = 5'
//cookie是以域名存放,一个域名下最多存放50条
document.cookie = 'age = 5;expires=过期时间'
```

`sessionStorage`: 数据之保持到`浏览器关闭`，数据可以跨越页面刷新而存在，数据大小2.5mb或5mb。

`localStorage`: 数据保持到通过js删除或用户清除浏览器缓存，符合同源策略才内访问数据，数据大小2.5mb或5mb。

```js
//设置值
localStorage.age = 5
localStorage.setItem('age',5)
//获取值
console.log(localStorage)
console.log(localStorage.age)
console.log(localStorage.getItem('age'))
//删除值
localStorage.removeItem('age')  //删除指定
localStorage.clear() //删除所有
```



**注意**： 对Storage对象进行`任何修改`都会在文档上触发`storage`事件。

storage api: setItem getItem removeItem clear

storage事件对象属性： 

- domain域名 
- key修改的键名 
- newValue新值或null 
- oldValue被修改的值 

## 富文本编辑器

原理：使用标签的`contenteditable`属性

> document.exacCommand() 

编辑器： wangEditor

## 常见状态码

- 200 ：表示从客户端发来的请求在服务器端被正常处理了
- 204：表示请求已成功处理，但是没有内容返回（就应该没有内容返回的状况） 
- 206：表示服务器已经完成了部分GET请求（客户端进行了范围请求） 
- 301：永久性重定向。该状态码表示请求的资源已被分配了新的 URI，以后 应使用资源现在所指的 URI。
- 302： 临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望 （本次）能使用新的 URI 访问。
- 303：表示请求资源存在另一个URI，应使用GET定向获取请求资源， 303功能与302一样，区别只是303明确客户端应该使用GET访问 

> 当301,302,303响应状态码返回时，几乎所有的浏览器都会把POST改成GET，并删除请求报文内的主体，之后请求会自动再次发送。

- 307：临时重定向，和302有着相同含义 ，尽管302标准禁止POST变为GET，但没人听他的 ，而307就会遵照标准，不会从POST变为GET 
- 400：表示请求报文中存在语法错误
- 401：表示发送的请求需要有通过 HTTP 认证（BASIC 认证、 DIGEST 认证）的认证信息。
- 403：表明对请求资源的访问被服务器拒绝了。
- 404：表明服务器上无法找到请求的资源
- 500：表示服务器执行请求的时候出错了 
- 503：表示服务器超负载或正停机维护，无法处理请求 

## 性能优化

- 代码压缩
- 减少dom操作
- 使用css Sprites
- 减少http请求次数
- 将`<script>`标签放在`<body>`标签底部

## 优雅降级和渐进增强

渐进增强（向上兼容）：一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。

优雅降级（向下兼容）：一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览

## xss

跨站脚本攻击，将页面输入内容提交到服务器，服务器再将内容返回到页面，若内容中存在`<script>`标签内容或`<a href="javascript:">..<a>`内容，则会自动执行或点击执行一个脚本，可以将用户的cookie信息发送到指定服务器。

处理：判断提交内容是否含有script或javascript字符串（转化大小写后判断）,如果有则替换该内容，再发送服务器