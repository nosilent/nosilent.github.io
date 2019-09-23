<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 17:36:20
 * @LastEditTime: 2019-09-23 17:36:20
 * @LastEditors: your name
 -->
## 组成

### BOM: 

浏览器对象模型，提供与浏览器交互的方法和接口

### DOM 

文档对象模型，提供访问和操作页面内容的方法和接口

- dom1级：
- dom2级：
- dom3级：

### ecmascript： 

提供核心语言功能

## 数据类型及判断方法

- 基本数据类型： 
  - Undefined : 使用var声明变量但未初始化
  - Null ： 一个空对象指针
  - Boolean
  - Number
  - String
  - Symbol
- 复杂数据类型(引用类型)： Object

检测方法： 

- typeof: 用于检测基本数据类型
- toString():用于检测复杂数据类型

```js
Object.prototype.toString.call(new Date) //[object Date]
Object.prototype.toString.apply(new String) //[object String]
```

- instanceof: 所用引用类型的值都是Object的实例

> 注意：typeof null 返回字符串 "object", 原理是这样的，不同的对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型， null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“ object ”

## null、undefined、NaN

null：指空值，指曾赋过值，但是目前没有值

undefined：指从未赋值

NaN：指“不是一个数字”（not a number），number类型，与自身不相等

## 变量

```js
//使用关键字在全局作用域中声明的变量
var b = 3
//未使用关键字声明而直接初始化的变量
b = 3 //全局变量
function(){
    var a = c = 3  //c 为全局变量 a为局部变量
}
```

## == 和 === 的区别

是否允许隐式类型转换

## 深拷贝和浅拷贝

可以使用JSON对象的parse和stringify来实现深拷贝

## 拖放实现

### h5拖放

在需要拖放的元素上设置属性 `draggable="true"`

拖放事件执行顺序

- dragstart：拖放开始触发，目标元素为拖放元素。
- dragleave：拖放元素离开容器元素时触发，目标元素为当前离开的容器元素。
- dragenter：拖放元素进入容器中时触发，目标元素为当前容器元素。
- dragover：拖放元素在容器元素上时触发，比dragenter晚触发，目标元素为容器元素，必须阻止默认事件否则不能触发drop事件。该事件必须定义。
- drop：拖放元素放到容器元素中时触发，目标元素为容器元素，需要阻止默认事件。
- dragend：拖放结束触发，目标元素为拖放元素。

```jsx
<div class="box">
</div>
<div class="target" draggable='true'></div>
    let box = document.querySelector('.box')
    let target = document.querySelector('.target')
        target.ondragover = function(e){
        e.preventDefault()
        if(tag){
            tag = false
            setTimeout(function(){
                tag = true
            },1000)
        }
    }
    box.ondrop = function(e){
        e.preventDefault()
        e.target.appendChild(target)
    },
		target.ondragend =function(e){
				e.target.parentNode.removeChilde(target)
    }                                          
```



## 对象创建的方法

- 使用new操作符后跟Object构造函数

  ```js
  var person = new Object()
  ```

- 使用对象字面量

  ```js
  var person = {}
  ```

- 使用Object.create(null),并不会创建 Object.prototype 这个委托,比 { } “更空”

  ```js
  var person = Object.create( null )
  ```

## 数组方法

- 检测数组： Array.isArray()

- 转换方法：

  - toString()：返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串
  - valueof()：返回数组本身

- 栈方法： 

  - push()：接受任意数量的参数，把它们逐个添加到数组末尾，并返回修改后的数组长度。
  - pop()：从数组末尾移除最后一项，并返回移除的项。

- 队列方法：

  - shift()：移除数组中的第一项，并返回移除的项。
  - unshift()：在数组前端添加任意个项，并返回新数组长度。

- 排序方法：

  - reverse()：反转数组项的顺序。
  - sort(): 默认情况下升序排列数组。会调用每个数组项的toString()方法，然后比较得到的字符串。

- 操作方法：

  - concat()：先创建当前数组的一个副本，将接受到的参数（可以不是数组）添加到副本的末尾，返回新构建的数组，**不改变操作的数组**。
  - slice()： 接受一到两个参数，返回起始和结束位置之间的项。**不改变操作的数组**
    - 若一个参数则返回起始到数组末尾之间的项。
    - 若参数中有负数，则用数组长度加上该数来确定相应位置。
    - 若结束位置小于起始位置，则返回空数组。
  - splice(): 始终返回删除项组成的数组，没有删除项则返回空数组。**改变操作的数组**
    - 删除：指定两个参数，要删除的第一项位置和要删除的数量。
    - 插入：提供三个参数，起始位置、0（要删除的数量）、要插入的项。
    - 替换：先删除后插入。

- 位置方法：

  - indexOf(): 两个参数，要查找的项和查找的起点位置，从数组开头项后查找，找到则返回项的位置，否则返回-1。
  - lastIndexOf:  两个参数，要查找的项和查找的起点位置，从数组末尾向前查找，找到则返回项的位置，否则返回-1。

- 迭代方法：每个方法接受**两个参数**，每项上运行的函数和*运行函数的作用域对象*（可选）。运行函数接受三个参数，当前**操作项、该项位置、数组对象本身**。

  - every()：对数组每项运行给定函数，该函数对每项返回true，则返回true。
  - filter()：对数组每项运行给定函数， 返回该函数返回true的项组成的数组。
  - forEach()：对数组每项运行给定函数，无返回值。
  - map(): 对数组每项运行给定函数，返回每次函数返回的结果组成的数组。
  - some(): 对数组每项运行给定函数，该函数对任意项返回true，则返回true。

- 扁平化方法 `flat()`：接受一个参数（默认为1），目标数组调用此方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

  ```jsx
  var arr1 = [1, 2, [3, 4]];
  arr1.flat(); //[1,2,3,4]
  
  //使用 Infinity 作为深度，展开任意深度的嵌套数组,
  var arr3 = [1, 2, [3, 4, [5, 6]]];
  arr3.flat(Infinity); // [1, 2, 3, 4, 5, 6]
  ```

## 基本包装类型

**Number、String和Boolean，三个构造器是两用的，当跟 new 搭配时，它们产生对象，当直接调用时，它
们表示强制类型转换。

每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而能够调用一个方法操作数据。

```js
var s1 = 'some text' 
var s2 = s1.substring(2)
//相当于：
// var s1 = new String('some text')
// var s2 = s1.substring(2)
// s1 = null
```

引用类型和基本包装类型的主要区别的对象的生存期：

- 使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中
- 自动创建的基本包装类型对象，则只存在于一行代码的执行瞬间，然后立即被销毁

可以显示地调用Boolean、Number、String来创建基本包装类型的对象。Object构造函数会根据传入值的类型返回相应基本包装类型的实例。

> 注意： 使用new调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的。

```
var value = '25'
alert(typeof Number(value)) //'number'
var obj = new Number(value)
alert(typeof obj)  // 'object'
```

### Number类型方法

- toFixed(): 按照指定的小数位返回数值的字符串表示
- toExponential()：返回以指数表示法表示的数值字符串形式

### String类型方法

- charAt() : 返回给定位置的单个字符

- charCodeAt(): 返回给定位置的单个字符的字符编码

- concat(): 用于将一或多个字符串拼接起来，返回拼接后的字符串

- slice(): 接受两个参数（子字符串开始位置，结束位置），返回开始到结束之间的字符串。若参数为负数，将负数与字符串长度相加。

- substring():接受两个参数（子字符串开始位置，结束位置），返回开始到结束之间的字符串。若参数为负数，将会把所有负数参数转换为0。

- substr(): 接受两个参数（子字符串开始位置，返回字符个数），返回对应的字符串。若有负数，将负的第一个参数加上字符串的长度，将负的第二个参数转换为0。

- trim():创建一个字符串副本，删除头和尾的所有空格，并返回结果，不改变原来的字符串。

- match(): 接受一个参数（正则或RegExp对象），返回匹配项组成的数组。

- search():接受一个参数（正则或RegExp对象），返回第一个匹配项的索引。

- replace()：接受两个参数（RegExp对象或字符串，一个字符串或一个函数）,返回替换后的新字符串，不改变原匹配字符串。

  - 第一个参数为字符串，只会替换第一个匹配的值。

  - 第一个参数为正则表达式

    - 第二个参数为字符串，可以使用特殊的字符序列，将正则操作得到的值插入到结果字符串中。

      ```js
      var text = 'cat, bat, sat, fat'
      var result = text.replace(/(.at)/g, 'word $1')  
      //$n表示匹配第n个捕获组的子字符串
      //正则中第几个（）匹配的子串就表示第几个捕获组
      alert(result) //word cat, word bat, word sat, word fat
      ```

    - 第二个参数为函数, 函数的返回值作为替换字符串。
      - 正则中只有一个匹配项时，接受三个参数（匹配项，匹配项在字符串中的位置，原始字符串）
      - 正则中只有一个捕获组时，接受四个参数（匹配项，捕获内容，匹配项在字符串中的位置，原始字符串）
    - 正则中有多个捕获组时，接受多个参数（匹配项，捕获内容1，捕获内容2，....，匹配项在字符串中的位置，原始字符串）

- split()：基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。接受两个参数（字符串或正则，数组大小（可选））。若参数为空字符串时，将字符串分割成单个字符放到数组中

  ```js
  'abcd'.split('')  // ['a','b','c','d'] ''中没有空格
  ```

- localeCompare()：比较两个字符串

  ```js
  //字符串在字母表中应排在字符串参数之前，则返回一个负数
  	'yellow'.localeCompare('brick')  //1 依次比较各个位置上的字符
  //相等返回0
  	'yellow'.localeCompare('yellow') //0
  //排在之后返回-1
  	'yellow'.localeCompare('zoo') // -1
  ```

- fromCharCode(): 接受一个或多个字符编码，然后将其转换才一个字符串

  ```js
  String.fromCharCode(104,101,108,108,111)  // 'hello'
  ```

## 正则

## json

## 作用域和作用域链

在某个函数被调用时，会创建一个执行环境及相应的作用域链。然后使用arguments和其他命名参数值来初始化函数的活动对象。

在作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数活动对象处于第三位直到作用域链终点的全局执行环境。**作用域链的本质是一个指向变量对象的指针列表**，它只引用但不实际包含变量对象

作用域链用来指定执行环境有权访问的所有变量和函数的**访问顺序**

## 闭包

闭包：

- 指一个函数有权访问另一函数作用域中的变量。
- 当函数可以记住并访问所在的词法作用域，即使*函数是在当前词法作用域之外执行*（返回一个函数），这时就产生了闭包。

创建闭包常见方式： 在一个函数内部创建另一个函数

## 继承、原型、原型链

继承：在两个对象之间创建一个关联，这样一个对象就可以通过委托访问另一个对象的属性和函数。

```js
// 和想要的机制不一样！
Bar.prototype = Foo.prototype;
// 基本上满足需求，但是可能会产生一些副作用 :(
Bar.prototype = new Foo();
```

- Bar.prototype = Foo.prototype 并不会创建一个关联到 Bar.prototype 的新对象，它只是让 Bar.prototype 直接引用 Foo.prototype 对象,执行类似 Bar.prototype.myLabel = ... 的赋值语句时会直接修改 Foo.prototype 对象本身。
- Bar.prototype = new Foo() 的确会创建一个关联到 Bar.prototype 的新对象。如果函数 Foo 有一些副作用（比如写日志、修改状态、注册到其他对象、给 this 添加数据属性，等等）的话，就会影响到 Bar() 的“后代”，后果不堪设想。（用 new 的构造函数调用会生成 .prototype 和 .constructor 引用）
- 要创建一个合适的关联对象，必须使用 Object.create(..) 而不是使用具有副作用的 Foo(..) 。唯一的缺点就是需要创建一个新对象然后把旧对象抛弃掉，不能直接修改已有的默认对象。

## this

为什么使用this：使函数可以自动引用合适的上下文对象， 不用显式传入一个上下文对象。

- 在全局作用域中，this等于window
- 当函数作为某个对象的方法调用时，this等于那个对象
- 匿名函数执行环境具有全局性，this通常指向window

注意： 

- this 在任何情况下都不指向函数的词法作用域。

- this 既不指向函数自身也不指向函数的词法作用域。

- this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

- 不能使用 this 来引用一个词法作用域内部的东西

  ```js
  function foo() {
  	var a = 2;
  	this.bar(); //不能在这里通过this来访问a, 不能通过this联通foo和bar作用域
  }
  function bar() {
  	console.log( this.a );
  }
  foo(); // ReferenceError: a is not defined
  ```

### this绑定规则

- 默认绑定：函数直接使用不带任何修饰的函数引用进行调用

  ```js
  function foo() {
  console.log( this.a );
  }
  var a = 2;
  foo(); // 2
  ```

  

- 隐式绑定：当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象

  ```js
  function foo() {
  console.log( this.a );
  }
  var obj = {
  a: 2,
  foo: foo
  };
  obj.foo(); // 2
  ```

  注意：对象属性引用链中只有最顶层或者说最后一层会影响调用位置,(离函数调用最近的那个对象)

  ```js
  function foo() {
  	console.log( this.a );
  }
  var obj2 = {
  	a: 42,
  	foo: foo
  };
  var obj1 = {
  	a: 2,
  	obj2: obj2
  };
  obj1.obj2.foo(); // 42
  ```

- 硬绑定： 通过applay、call、bind强制改变this指向

- new绑定：在使用new创建新对象的过程中，函数中的this会指向新对象。

### 判断this

1. 函数是否在 new 中调用（ new 绑定）？如果是的话 this 绑定的是新创建的对象。

```js 
  var bar = new foo()
```

2. 函数是否通过 call 、 apply （显式绑定）或者硬绑定调用？如果是的话， this 绑定的是
   指定的对象。

```js
  var bar = foo.call(obj2)
```

3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话， this 绑定的是那个上
   下文对象。

```js
  var bar = obj1.foo()
```

4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined ，否则绑定到
   全局对象。

```js
  var bar = foo()
```

注意：把 null 或者 undefined 作为 this 的绑定对象传入 call 、 apply 或者 bind ，这些值在调用时会被忽略，实际应用的是默认绑定规则

## call、applay、bind

- bind()：创建一个新函数，在bind()背调用时，新函数的this被传入的第一个参数指定，其余参数作为新函数的参数
- call()：

## new操作符

创建对象过程：

1. 创建（或者说构造）一个全新的对象。
2. 这个新对象会被执行 [[ 原型 ]] 连接。
3. 这个新对象会绑定到函数调用的 this 。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象

 注意：new 会劫持所有普通函数并用构造对象的形式来调用它

## in和hasOwnProperty

in 操作符会检查属性是否在对象及其 [[Prototype]] 原型链中

hasOwnProperty只会检查属性是否在对象中，不会检查 [[Prototype]] 链

## 函数柯里化

预先设置一些参数

## 堆栈队列

- 栈： 后进先出（LIFO）的数据结构
- 堆：
- 队列： 先进先出（FIFO）的数据结构

## es6

### 数组扩展

- 创建数组方法
  - Array.of():创建一个包含所有参数的数组
  - Array.from():可以三个参数（可迭代对象或类数组对象，一个函数，函数的this值），返回一个数组，浅拷贝

- 新方法

  - find():接受两个参数（回调函数，回调函数中this的值（可选）），返回查找到的值。回调函数返回true则立即停止搜索数组剩余部分

  - findIndex():接受两个参数（回调函数，回调函数中this的值（可选）），返回查找到的值的索引。回调函数返回true则立即停止搜索数组剩余部分

  - fill()：接受三个参数（填充值，开始填充索引，结束填充索引（不包含）），当传入值时会用这个值重写数组中的所有值。若开始索引和结束索引为负数时，则与数组length相加作为最终位置。

    ```js
    let numbers = [1,2,3,4]
    numbers.fill(1)  // [1,1,1,1]
    numbers.fill(0,1,3) //[1,0,0,1]
    ```

  - copyWithin():从数组中复制元素的值。接受三个参数（开始填充值索引位置，开始复制值索引位置，停止复制值的索引位置）

    ```js
    let numbers = [1,2,3,4]
    numbers.copyWithin(2,0) //[1,2,1,2]
    
    let arr = [1,2,3,4]
    arr.copyWithin(2,0,1) //[1,2,1,4]
    ```

- 数组缓冲区：一段可以包含特定数量字节的内存地址。缓冲区大小在创建时就已确定，可以改变其中的数据，不能改变尺寸大小

  - 通过ArrayBuffer构造函数创建

  ```js
  let buffer = new ArrayBuffer(10) //分配10字节
  ```

  - 通过byteLength属性查看缓冲区的字节数量

  ```js
  let buffer = new ArrayBuffer(10) //分配10字节
  buffer.byteLength   //10
  ```

  - 通过slice（）方法分割数组缓冲区来创建一个新的

  ```js
  let buffer = new ArrayBuffer(10) //分配10字节
  let buf2 = buffer.slice(4,6)
  console.log(buf2.byteLength) //2
  ```

  - **视图操作缓冲区**：使用DataView，先创建ArrayBuffer实例，再用这个实例创建新的DataView，DataView接受三个参数（数组缓冲区实例，开始位置索引，长度）

  ```js
  let buffer = new ArrayBuffer(10)
  let view = new DataView(buffer,5,2)
  
  //buffer 视图绑定的数组缓冲区
  view.buffer  //buffer
  //byteOffset DataView构造函数的第二个参数,默认为0
  view.byteOffset   //5
  //byteLength DataView构造函数的第三个参数,新建视图缓冲区长度
  view.byteLength  //2
  ```

  - 读取和写入方法:8中数值型数据类型，方法名都以`set`或`get`打头

    - get:接受两个参数（读取数据时偏移的字节数量，布尔值（是否按小端读取））
    - set:接受三个参数（偏移值，写入值，布尔值（是否按小端存储））

    ```js
    let buf = new ArrayBuffer(10)
    let view = new DataView(buf)
    
    //set: setInt8 setUint8 setFloat32 setFloat64
    view.setInt8(0,5)
    view.setInt8(1,-1)
    
    //get: getInt8 getUint8 getFloat32 getFloat64
    console.log(view.getInt8(0))  //5
    console.log(view.getInt8(1))   //-1
    ```

  - 定型数组视图

    ```js
    let buf = new ArrayBuffer(10)
    
    //int8Array() int16Array() float32Array() 
    let view = new int8Array(buffer,5,2)
    ```

### 字符串扩展

- includes():
- startsWith():
- endsWith():
- repeat():
- padEnd():
- padStart():

### set

set是一个不能有重复元素的集合，重复添加无效。

功能：用于数组去重

> 1. set没有下标，不能使用for循环遍历
> 2. set没有属性，不能使用for in 遍历
> 3. 可以使用for of 遍历
> 4. 可以使用forEach()遍历

```js
//新建set
let a = new Set()

//add(value)：添加值
a.add(123)

//delete(value)：删除值
a.delete(123)

//has(value):判断是否有指定值
a.has(123)

//clear()：清除所有值
a.clear()

//数组去重
let arr = [1,3,4,3,1]
let arr2 = new Set(arr)  // [1,3,4] 
//查看set长度
arr2.size()  //3
```

### map

map：对象保存键值对，任何值(对象或者原始值 )都可以作为一个键或一个值。

```js
let map = new Map()
//添加键值对
map.set('a',12)  
//获取键值对
map.get('a')    //a=>12
```

- 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象

```js
let arr = [["key1", "value1"], ["key2", "value2"]]
let myMap = new Map(arr)
console.log(myMap)   //key1=>value1 key2=>value2
```

- 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组

```js
let arr = [["key1", "value1"], ["key2", "value2"]]
let myMap = new Map(arr)
console.log( Array.from(myMap) )  //[["key1", "value1"], ["key2", "value2"]]
```

### promise

### proxy和reflection

代理是一种可以拦截并改变底层javascript引擎操作的包装器

代理可以拦截javascript引擎内部目标的底层对象操作，这些底层操作被拦截后会触发响应特定操作的函数

1. 创建一个代理：接受两个参数（目标，处理程序）

   ```js
   let target = {}
   let proxy = new Proxy(target, {})
   ```

2. set验证：接受4个参数（接受属性的对象，要写入的属性键，写入的属性值，操作发生的对象）

   ```js
   let target = {}
   let proxy = new Proxy(target, {
       set(trapTarget,key,value,receiver){  //trapTarget: target, receiver: proxy
   		return Reflect.set(trapTarget,key,value,receiver)  //添加属性
       }
   })
   ```

3. get验证：接受3个参数（被读取属性的源对象，要读取的键值，操作发生的对象）

   ```js
   let proxy = new Proxy({},{
       get(trapTarget,key,receiver){ //trapTarget: {}, receiver: proxy
   		return Reflect.get(trapTarget,key,receiver)
       }
   })
   ```

   

### 类

- 用typeof 检测一个类始终返回'function'

```js
class person{
    constructor(){     
    }
}
typeof person  //function
```

- 类声明不能被提升
- 类必须使用new调用，否则会报错
- 类中所有方法都是不可枚举的
- 类的属性名，可以采用表达式。

```js
let methodName = 'getArea';
class Square {
  constructor(length) {
    // ...
  }
  [methodName]() {
    // ...
  }
}
```

- 实例属性除了定义在`constructor()`方法里面的`this`上面，也可以定义在类的最顶层。

  ```js
  class IncreasingCounter {
    _count = 0;
    get value() {
      console.log('Getting the current value!');
      return this._count;
    }
    increment() {
      this._count++;
    }
  }
  ```

  

#### 静态方法

- 不能在实例中访问静态成员，必须要直接在类中访问

```js
class person {
    constructor(){
    }
    static fn(){}    
}
let p1 = new person()
p1.fn() // error
person.fn() 
```

- 如果静态方法包含`this`关键字，这个`this`指的是类，而不是实例
- 父类的静态方法，可以被子类继承。
- 静态方法也是可以从`super`对象上调用的。

```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}
class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}
Bar.classMethod()  //hello, too
```

## import、require引入模块顺序

import  xx from 'xx'|require(xx)，模块执行的顺序是先加载node自带的核心模块,再加载用户模块(就是我们写的),最后是加载第三方模块;

1. 如果是核心模块，返回当前模块
2. 如果xx是以'/'或'./'或'../'开头的用户模块，查找规则为xx-->xx.js--->xx.json--->xx.node (首先按路径查找.js扩展名的文件，其次按路径查找.json扩展名的文件，最后按路径查找.node扩展名的c++模块)
3. 如果是第三方模块，首先查找当前文件所在目录的node_modules下的package.json，若package.json中无main属性或无package.json文件，加载node_modules下的xx-->xx.js--->xx.json--->xx.node；若当前文件所在目录没有node_modules文件，则向上级目录查找。

## promise和async区别

## 面向对象

## 内存泄漏

内存泄漏就是由于疏忽或错误造成程序未能释放那些已经不再使用的内存，造成内存的浪费

**常见内存泄漏**：

- 意外的全局变量

  ```js
  function foo() {
    bar1 = 'some text'; // 没有声明变量 实际上是全局变量 => window.bar1
    this.bar2 = 'some text' // 全局变量 => window.bar2
  }
  foo();
  ```

- 被遗忘的定时器和回调函数

- 闭包

- DOM 引用

**如何避免内存泄漏**：

- 减少不必要的全局变量，使用严格模式避免意外创建全局变量。
- 使用完数据后，及时解除引用（闭包中的变量，dom引用，定时器清除）

## 垃圾回收规则

1. 全局变量不会被回收
2. 局部变量会被回收，也就是函数内部一旦运行完以后，函数内部的东西都会被销毁
3. 只要被另外一个作用域所引用就不会被回收

## 事件

### 事件模型

标准事件模型顺序：事件捕获>事件处理>事件冒泡

#### 事件类型

1. 鼠标事件：
   - click:鼠标点击
   - dblclick:双击
   - mousemove:鼠标移动
   - mouseover:鼠标移入（针对e.target）
   - mouseout: 鼠标移出（针对e.target）
   - mouseenter:鼠标进入（针对e.currentTarget侦听）
   - mouseleave:鼠标离开（针对e.currentTarget侦听）
   - mousedown:按下鼠标（鼠标三键）
   - mouseup:释放鼠标（鼠标三键）
   - contextmenu: 右键点击呼出菜单
   - wheel: 滚轮向任意方向滚动
   - select: 文本被选中
2. 键盘事件：

## 事件委托

## 懒（延迟）加载

### 概念

访问页面时，先把img元素的src替换成一张占位图，这样只需请求一次，当图片出现在浏览器的可视区域内时，再设置图片的真实路径，显示图片。

### 优点

- 可以减少无效资源的加载
- 可以使页面加载速度快、减轻服务器的压力、节约流量
- 并发加载的资源过多会阻塞js的加载，影响网站的正常使用

### 步骤

1. 把页面中需要延迟加载的图片统一使用一张占位图进行占位，把真正的路径存在元素的data自定义属性里。
2. 页面加载完成后，通过scrollTop判断图片是否在用户的视野，如果在，则将 data自定义属性的值放到src中。
3. 在滚轮事件中重复判断图片是否进入可视区域中，如果在，则将则将 data自定义属性的值放到src中。

### 判断图片进入可视区域

1. 获取页面滚动高度：document.documentElement.scrollTop

2. 获取视口高度：window.innerHeight ||document.documentElement.clientHeight

3. 获取元素位置：element.offsetTop|element.offsetLeft ，element.getBoundingClientRect().top|bottom

   > **element.getBoundingClientRect**()直接返回元素，element.**getClientRects**()返回一个数组
   >
   > 它们的top|bottom|left|right是相对于视口的左上角（0，0）而言，会出现负值

4. 获取元素高度：element.offsetHeight

5. 判断元素出现在视口中：

   1. 元素位置高度+元素高度>=页面滚动高度  （判断元素底边是否在视口顶部的下方）
   2. 元素位置高度<=页面滚动高度+视口高度 （判断元素顶部是否在视口底部的上方）

6. 解决重复加载： 当 data自定义属性的值 === element.src时，直接跳出

> img元素指定宽高，否则初始加载时会出现bug

## 瀑布流布局

先确定列数，再确定每列宽度，用一个数组存放每列的高度，高度最小的一列添加元素，以此循环。

- 使用定位

  1. 确定列数，根据当前视宽度（window.innerWidth|document.documentElement.clientWidth）计算每列的宽度
  2. 创建长度与列数相等的数组，数组每项初始值为0
  3. 找到数组中最小一项（`Math.min.apply(null, arr)`）及其索引
  4. 新添加元素的top：最小一项，left: 最小一项的索引 X 列宽
  5. 数组中最小一项加上新元素高度（element.offsetHeight | element.clientHeight）
  6. 以此循环

  > 窗口重置时，视口宽度变化，需要重新计算每个元素的top和left，因此需要重新执行上述过程

- 使用浮动

  1. 确定列数，根据当前视宽度（window.innerWidth|document.documentElement.clientWidth）计算每列的宽度
  2. 页面创建与列数相等的容器元素，float设置为left
  3. 创建长度与列数相等的数组，数组每项初始值为0
  4. 找到数组中最小一项（`Math.min.apply(null, arr)`）及其索引
  5. 根据索引找到对应的容器元素
  6. 添加新图片元素到当前容器元素中，图片元素宽度设置为100%
  7. 数组中最小一项加上新元素高度（element.offsetHeight | element.clientHeight）
  8. 以此循环

  > 窗口重置时，视口宽度变化，需要重新计算每列容器元素宽度，因为图片元素宽度设置为100%，图片宽度随着容器元素宽度改变而改变

## 预加载

使用场景: 常用于 游戏,瀑布流

- 图片等静态资源在使用之前的提前请求
- 资源后续使用时可以从缓存中加载，提升用户体验
- 页面展示的依赖关系维护（必需的资源加载完才可以展示页面，防止白屏等）

## 数据劫持

## 宏任务和微任务

宏任务：由语言运行环境（全局对象window,global）提供的带有回调函数的api

微任务：由语言标准提供的api

|        宏任务         | 浏览器 | node |
| :-------------------: | :----: | :--: |
|      setTimeout       |   √    |  √   |
|      setInterval      |   √    |  √   |
|     setImmediate      |   x    |  √   |
| requestAnimationFrame |   √    |  x   |

|           微任务           | 浏览器 | node |
| :------------------------: | :----: | :--: |
|      process.nextTick      |   x    |  √   |
|      MutationObserver      |   √    |  x   |
| Promise.then catch finally |   √    |  √   |

在同一线程中，先执行同步任务，再执行微任务，最后执行宏任务

或者说，在同一作用域中，先执行同步任务，再执行微任务，最后执行宏任务

> new promise()为同步任务，.then()为微任务

## 防抖节流

### 防抖

一个函数在一定间隔内没有被调用时，才开始执行被调用方法。

```jsx
function debounce(method,time){
    var timer = null ;
    return function(){
        var context = this;
        //在函数执行的时候先清除timer定时器;
        clearTimeout(timer);
        timer = setTimeout(function(){
            method.call(context);
        },time);
    }
}
```

### 节流

让一个函数无法在很短的时间间隔内连续调用，当上一次函数执行后过了规定的时间间隔，才能进行下一次该函数的调用。

```jsx
function throttle(method, time){
    var timer = null;
    var startTime = new Date();
    return function(){
        var context = this;
        var endTime = new Date();
        var resTime = endTime - startTime;
        //判断大于等于我们给的时间采取执行函数;
        if(resTime >= time){
            method.call(context);
            //执行完函数之后重置初始时间，等于最后一次触发的时间
            startTime = endTime;
        }
    }
}
```

## 跨域

## ajax

AJAX = 异步 JavaScript 和 XML。

可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

### 原生ajax

1. 创建XMLHttpRequest对象

   ```js
   //所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。
   let xhl = new XMLHttpRequest()
   
   //Internet Explorer （IE5 和 IE6）使用 ActiveX 对象
   let xhl = new ActiveXObject("Microsoft.XMLHTTP")
   
   //兼容写法
   let xhl
   if (window.XMLHttpRequest)
     {// code for IE7+, Firefox, Chrome, Opera, Safari
     xhl=new XMLHttpRequest();
     }
   else
     {// code for IE6, IE5
     xhl=new ActiveXObject("Microsoft.XMLHTTP");
     }
   ```

2. 配置请求信息

   ```js
   //发送异步请求必须设置为true,可以监听onreadystatechange函数，false则不能
   xhl.open('get|post',url，true)  
   ```

   > 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中发送数据：
   >
   > xhl.setRequestHeader("Content-type","application/x-www-form-urlencoded")

3. 发送数据

   ```js
   xhl.send()  //用于get
   xhl.send(数据) //只能用于post
   ```

4. 注册回调函数

   ```js
   xhl.onreadystatechange = callback
   function callback(){
       
   }
   ```

5. 处理响应

   ```js
   function callback(){
       if(xhl.readState ===4 && xhl.status === 200){
           // xhl.responseTest|xhl.responseXML,返回响应的数据
           //执行其他内容
       }
   }
   ```

### fetch

fetch(source[, data])

source:一个url字符串或一个Request对象

data:一个配置项对象，包括所有对请求的设置

| data    | 说明                                           |
| ------- | ---------------------------------------------- |
| method  | 请求使用的方法,如get,put                       |
| headers | 请求的头信息                                   |
| body    | 请求的 body 信息,get和head方法不能包含body信息 |
|         |                                                |
|         |                                                |

```js
fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
  .then(response => response.json())
```



### axios

拦截器

Axios构造函数中有`interceptors`属性,

在`InterceptorManager`构造函数中有handlers属性，原型上有`use`,`eject`,`forEach`3个方法，分别用于添加、删除、遍历handlers中的内容

```js
function Axios() {
  ...
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
function InterceptorManager() {
  this.handlers = [];
}
//添加
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
//删除
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

```



### jquery.ajax

## 请求类型get、post、put、delete....

## 设计模式