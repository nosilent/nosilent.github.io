



## 变量

## 类型

## num数值

### 基础方法和属性

| 方法名                        | 说明                                                         | 用法                            | 返回类型 |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------- | -------- |
| compareTo(arg)                | 比较两个数的大小                                             | a.compareTo(b)                  | a-b      |
| remainder(arg)                | 对另一个数求余数                                             | a.remainder(b)                  | int      |
| abs()                         | 取绝对值                                                     | a.abs()                         | num      |
| round()                       | 对一个数四舍五入                                             | a.round()                       | int      |
| floor()                       | 返回不大与当前数的最大整数                                   | a.floor()                       | int      |
| ceil()                        | 返回不小与当前数的最小整数                                   | a.ceil()                        | int      |
| truncate()                    | 返回当前数的整数部分                                         | a.truncate()                    | int      |
| roundToDouble()               | 对一个数四舍五入为double类型                                 | a.roundToDouble()               | double   |
| floorToDouble()               | 返回不大与当前数的最大整数为double类型                       | a.floorToDouble()               | double   |
| ceilToDouble()                | 返回不小与当前数的最小整数为double类型                       | a.ceilToDouble()                | double   |
| truncateToDouble()            | 返回当前数的整数部分为double类型                             | a.truncateToDouble()            | double   |
| clamp(min,max)                | 若当前数字在该范围内则返回该数字，否则返回该范围内最接近该数的数字 | a.clamp(min,max)                | num      |
| toInt()                       | 返回当前数字的整数部分                                       | a.toInt()                       | int      |
| toDouble()                    | 将当前数转换成double类型                                     | a.toDouble()                    | double   |
| toStringAsFixed(length)       | 返回当前数字的固定小数位长度的数字字符串                     | a.toStringAsFixed(length)       | String   |
| toStringAsExponential(length) | 返回当前数字固定小数位长度的以科学计数法表示的数字字符串     | a.toStringAsExponential(length) | String   |
| toStringAsPrecision(length)   | 返回当前数字固定有效数字长度的数字字符串                     | a.toStringAsPrecision()         | String   |
| toString()                    | 将当前数字转换成数字字符串                                   | a.toString()                    | String   |



| 静态方法   | 说明                             | 用法                                                       |
| ---------- | -------------------------------- | ---------------------------------------------------------- |
| parse()    | 将字符串转换成数字,失败抛出异常  | int.parse(string), double.parse(string), num.parse(string) |
| tryParse() | 将字符串转换成数字，失败返回null | 与parse()类似                                              |



| get属性    | 说明                                 | 用法         | 返回类型 |
| ---------- | ------------------------------------ | ------------ | -------- |
| hashCode   | 返回数字的哈希码                     | a.hashCode   | int      |
| isNaN      | 如果数字是非数字的双精度值，则为true | a.isNaN      | bool     |
| isNegative | 判断数字是否为负数                   | a.isNegative | bool     |
| isInfinite | 判断数字是否无穷大                   | a.isInfinite | bool     |
| isFinite   | 判断数字是否有限（非有限数包括NaN）  | a.isFinite   | bool     |
| sign       | 根据数字正负返回`-1`,`0`,`+1`        | a.sign       | num      |

### 子类

子类继承父类中的`基础所有方法`和`计算属性`，子类中特有的方法和计算属性只能在当前类型的变量中使用，

也就是说`int`和`double`类型的数字可以访问`num`中的方法与属性

#### int

| 特有方法          | 说明                             | 用法                | 返回类型 |
| ----------------- | -------------------------------- | ------------------- | -------- |
| modPow(e,m)       | 返回该整数已e为指数，m为模的幂   | a.modPow(e,m)       | int      |
| modInverse(m)     | 返回该整数已m为模的逆运算        | a.modInverse(m)     | int      |
| gcd(b)            | 返回该整数与另一个数的最大公约数 | a.gcd(b)            | int      |
| toUnsigned(width) |                                  | a.toUnsigned(8)     | int      |
| toSigned(width)   |                                  | a.toSigned(8)       | int      |
| toRadixString     | 将该整数转换成对应进制(2~35)的数 | a.toRadixString(10) | int      |



| 计算属性  | 说明                         | 用法        | 返回类型 |
| --------- | ---------------------------- | ----------- | -------- |
| isEven    | 判断该整数是否为偶数         | a.isEven    | bool     |
| isOdd     | 判断该整数是否为奇数         | a.isOdd     | bool     |
| bitLength | 返回存储此整数所需的最小位数 | a.bitLength | int      |

#### double

无特有方法与计算属性

### 运算符

| 运算符      | 说明                         |
| ----------- | ---------------------------- |
| ==          | 判断两个数字是否相等         |
| +           | 两个数相加                   |
| -           | 两个数相减或取反             |
| *           | 两个数相乘                   |
| /           | 两个数相除                   |
| %           | 两个数相除取余数             |
| ~/          | 两个数相除取整               |
| `>,<,>=,<=` | 比较两个数大小，返回bool类型 |



## String字符串

### 方法

- codeUnitAt(index)：返回当前字符串对应索引index的字符的16位UTF-16编码,返回类型为int

```dart
var str = 'string';
print(str.codeUnitAt(3)); //105
```

- compareTo(str):  将该字符串与other比较，按每个字符的uncode编码比较,当前字符串大于比较的字符则返回1，否则返回-1，相等返回0

```dart
var str = 'string';
print(str.compareTo('s')); // 1
print(str.compareTo('t')); // -1
```

- endsWith(str): 判断该字符串是否已`str`结尾

```dart
'Dart'.endsWith('t'); // true 
```

- startsWith(pattern,[index]):  返回匹配字符串在当前字符串中第一次出现的索引，若传递了开始位置，则从开始位置开始检查，匹配字符串可以使用正则。不存在则返回-1

```dart
var string = 'Dart';
string.startsWith('D');                       // true
string.startsWith('art', 1);                  // true
string.startsWith(new RegExp(r'[A-Z][a-z]')); // true
string.startsWith(new RegExp(r'art'), 1);     // true
```

- indexOf(pattern,[start]):返回匹配字符串在当前字符串中第一次出现的索引，若传递了开始位置，则从开始位置开始检查，匹配字符串可以使用正则。不存在则返回-1

```dart
var string = 'Dartisans';
string.indexOf('art');                     // 1
string.indexOf(new RegExp(r'[A-Z][a-z]')); // 0
string.indexOf('art',5); // -1
```

- lastIndexOf(pattern,[start]): 与indexOf()相反，该方法字符串后向前检查

```dart
var string = 'Dartisans';
string.lastIndexOf('a');                    // 6
string.lastIndexOf(new RegExp(r'a(r|n)'));  // 6
```

- substring(startIndex,[endIndex]): 返回从开始到结束位置的子字符串

```dart
var string = 'dartlang';
string.substring(1);    // 'artlang'
string.substring(1, 4); // 'art'
```

- trim():  返回没有任何前导和尾随空格的字符串
- trimLeft(): 返回没有任何前导空格的字符串
- trimRight(): 返回没有尾随空格的字符串

```dart
var str = ' dart ';
str.trim();  //'dart'
str.trimLeft(); // 'dart '
str.trimRight();  // ' dart'
```

- padLeft(width,[padding = ' ']):  若字符串长度小于`width`,则从`左侧`用`padding`填充到指定长度
- padRight(width,[padding = ' ']):  若字符串长度小于`width`,则从`右侧`用`padding`填充到指定长度

```dart
var str = 'string';
print(str.padLeft(10,'1'));  //1111string
print(str.padRight(10,'1')); //string1111
```

- contains(other, [startIndex = 0]):  判断字符串是否包含匹配的字符，可以使用正则

```dart
var string = 'Dart strings';
string.contains('D');                     // true
string.contains(new RegExp(r'[A-Z]'));    // true
string.contains('X', 1);                  // false
string.contains(new RegExp(r'[A-Z]'), 1); // false
```

- replaceFirst(from,to.[index=0]) :  从开始位置将第一个`from`用`to`替换，返回替换后的字符串

```dart
'0.0001'.replaceFirst(new RegExp(r'0'), ''); // '.0001'
'0.0001'.replaceFirst(new RegExp(r'0'), '7', 1); // '0.7001'
```

- replaceFirstMapped(from,fn(match),[index=0]): 从开始位置将第一个`from`用`fn`的返回值替换，返回替换后的字符串

```dart
var str = 'string';
var temp = str.replaceFirstMapped(new RegExp(r'r'),(str){
  print(str[0]); // 'r'
  return '22';
});
temp   // st22ing
```

- replaceAll(from,to): 将所有的`from`用`to`替换，返回替换后的字符串

```dart
'resume'.replaceAll(new RegExp(r'e'), 'é'); // 'résumé'
```

- replaceAllMapped(from, fn(match)): 将所有的`from`用`fn`返回值替换，返回替换后的字符串

- replaceRange(start,end,replacement):  返回用`replacement`替换从`start`到`end`的子字符串

- split(pattern) : 用`pattern`将字符串分割，返回分割后的字符串列表，返回类型为`List`

```dart
var string = 'Pub';
string.split('');                       // ['P', 'u', 'b']
```

- splitMapJoin(pattern,{onMatch(match),onNonMatch(nonMatch)}): 用`pattern`分割字符串，用`onMatch`的返回值替换`pattern`,用`onNonMatch`的返回值替换`pattern`分隔符以外的内容。

```dart
var str = 'stringr';
var temp = str.splitMapJoin(new RegExp(r'tri'),
                            onMatch:(str){
                              return '_1_';
                            },
                            onNonMatch:(str){
                              return '2';
                            }
                           );
print(temp);  /// '2_1_2'
```

- toLowerCase() :  将字符串转换成小写字符
- toUpperCase():  将字符串转换成大写字符

```dart
'ALPHABET'.toLowerCase(); // 'alphabet'
'alphabet'.toUpperCase(); // 'ALPHABET'
```



### 属性

| get属性    | 说明                               | 用法           | 返回类型 |
| ---------- | ---------------------------------- | -------------- | -------- |
| length     | 返回字符串长度                     | str.length     | int      |
| hashCode   | 返回字符串的哈希码                 | str.hashCode   | int      |
| isEmpty    | 字符串是否为空字符串               | str.isEmpty    | bool     |
| isNotEmpty | 字符串是否不为空字符串             | str.isNotEmpty | bool     |
| codeUnits  | 返回此字符串的UTF-16代码单元的列表 | str.codeUnits  | List     |
| runes      | 返回此字符串可迭代的Unicode        | str.runes      | Runes    |

```dart
  var str = 'dart';
  print(str.length); //4
  print(str.hashCode); //530770249
  print(str.isEmpty); //false
  print(str.isNotEmpty); //true
  print(str.codeUnits);  //[100, 97, 114, 116]
  print(str.runes);  //(100, 97, 114, 116)
```

## Iterable可迭代对象

### 构造函数

```dart
Iterable.generate(int count, [E generator(int index)])
  
```

### 方法

- `cast<R>`()： 
- `followedBy(Iterable<E> other)`:  返回此iterable和[other]的组合

```dart
var list = [1.2, 2, 3, 4, 5];
var temp = list.map((item){
  return item*2;
});
print(temp);  //(2.4, 4, 6, 8, 10)
print(list.followedBy(temp)); //(1.2, 2, 3, 4, 5, 2.4, 4, 6, 8, 10)
```

- `map<T>(f(e))`: 返回此iterable所有元素执行后`f()`新的iterable

```dart
var list = [1.2, 2, 3, 4, 5];
var temp = list.map((item){
  return item*2;
});
print(temp); //(2.4, 4, 6, 8, 10)
```

- `where(bool test(E element))`:  返回此iterable中所有符合`test`的元素组成的新的iterable

```dart
var list = [1.2, 2, 3, 4, 5];
  var temp = list.where((e){
    return e>3;
  });
print(temp); //(4,5)
```

- `whereType<T>()`； 返回此iterable元素中类型为`T`的元素组成的iterable

```dart
var list = [1.2, 2, 3, 4, 5];
print(list.whereType<int>());  //(2, 3, 4, 5)
print(list.whereType<double>()); //(1.2)
```

- `expand<T>(Iterable<T> f(E element))`: 将iterable中的元素使用`f`扩展成多个或0个元素，并返回扩展后的iterable

```dart
var list = [1.2, 2, 3, 4, 5];
var temp = list.expand((item){
  return [item,1];
});
print(temp);  //(1.2, 1, 2, 1, 3, 1, 4, 1, 5, 1)
```

- contains(element): 检测iterable中是否包含指定元素，包含则返回true，否则返回false。
- forEach(void f(E element))：对iterable中所有元素执行`f`，无返回值。

```dart\
var list = [1.2, 2, 3, 4, 5];
list.forEach((item){
print(item);// 1.2   2  3 4 5
});
```

- reduce(E f(E value, E element)) : 对iterable中的元素逐一执行`f`,上一次`f`返回值做为当前次的`value`,`element`为当前元素。`value`默认为第一个元素。返回最后一次`f`的返回值。

```dart
var list = [1.2, 2, 3, 4, 5];
var temp = list.reduce((sum,item){
  return sum + item;
});
print(temp);  // 15.2
```

- `fold<T>(T initialValue, T combine(T previousValue, E element))`: 与reduce类似，只是提供了一个初始值。

```dart
var list = [1.2, 2, 3, 4, 5];
var temp = list.fold(2,(sum,item){
  return sum+item;
});
print(temp); //17.2
```

- every(bool test(E element))：所有元素满足`test`则返回true,否则返回false。
- join([String separator = ""])： 使用分割符`separator `将所有元素合成一个字符串。

```dart
var list = [1.2, 2, 3, 4, 5];
print(list.join('|')); //1.2|2|3|4|5
```

- any(bool test(E element))： 任意元素满足`test`则返回true,否则返回false
- toList({bool growable = true}): 将可迭代对象转换成List，内部调用`List.from`
- toSet():将可迭代对象转换成Set,内部调用`Set.from`
- take(int count): 从当前Iterable中返回指定个数的Iterable.

```dart
var list = [1.2, 2, 3, 4, 5];
print(list.take(3)); //(1.2, 2, 3)
```

- takeWhile(bool test(E value)): 返回满足`test`的元素组成的Iterable

- skip(int count): 返回该Iterable除去前`count`个元素组成的Iterable

```dart
var list = [1.2, 2, 3, 4, 5];
print(list.skip(3));  //(4,5)
```

- skipWhile(bool test(E value)): 返回该Iterable除去满足`test`的元素组成的Iterable

- firstWhere(bool test(E element), {E orElse()}): 返回第一个满足`test`的元素，若不存在满足`test`的元素，则返回`orElse`的返回结果

- lastWhere(bool test(E element), {E orElse()})：返回最后一个满足`test`的元素，若不存在满足`test`的元素，则返回`orElse`的返回结果

```dart
var list = [1.2, 2, 3, 4, 5];
print(list.firstWhere((item){
  return item>2;
})); // 3
print(list.lastWhere((item){
  return item<5;
}));  // 4
```

- singleWhere(bool test(E element), {E orElse()}): 如果一个元素满足`test`，则返回该元素，多个元素满足则报错，没有元素满足则返回`orElse`返回的结果

```dart
var list = [1.2, 2, 3, 4, 5];
var temp = list.singleWhere((item){
  return item>5;
},orElse:(){
  return 6;
});
print(temp);  //6
```

- elementAt(index): 返回索引为index的元素。

```dart
var list = [1.2, 2, 3, 4, 5];
print(list.elementAt(0));  // 1.2
```

- toString(): 对每个元素执行自身的`toString`方法。

### 属性

| get属性    | 说明                                               | 用法           | 返回类型 |
| ---------- | -------------------------------------------------- | -------------- | -------- |
| length     | 返回可迭代对象的长度                               | ite.length     | int      |
| isEmpty    | 可迭代对象是否为空                                 | ite.isEmpty    | bool     |
| isNotEmpty | 可迭代对象是否`不`为空                             | ite.isNotEmpty | bool     |
| first      | 返回第一个元素                                     | ite.first      | E        |
| last       | 返回最后一个元素                                   | ite.last       | E        |
| single     | 检测该对象是否只有一个元素，是返回该元素，否则报错 | ite.single     | E        |



## List

由于List是可迭代对象的字类，具有可迭代对象的方法和属性。

### 构造函数

```dart
external factory List([int length])

//声明一个长度为length,每个元素用fill填充的List,growable为false表示该List长度固定不可增长
external factory List.filled(int length, E fill, {bool growable = false})

//将一个可迭代的对象转换成一个List，growable为true表示该list长度可增长
external factory List.from(Iterable elements, {bool growable = true})
  
factory List.of(Iterable<E> elements, {bool growable = true}) =>
      List<E>.from(elements, growable: growable)  
//返回一个指定长度的generator返回值组成的list
factory List.generate(int length, E generator(int index),
      {bool growable = true}) {
    List<E> result;
    if (growable) {
      result = <E>[]..length = length;
    } else {
      result = List<E>(length);
    }
    for (int i = 0; i < length; i++) {
      result[i] = generator(i);
    }
    return result;
  }

//创建一个包含所有迭代元素elements的不可修改List，长度和元素都不可改变
external factory List.unmodifiable(Iterable elements)
```



### 声明list

```dart
var list = new List()    //声明一个长度为0的list
var list2 = new List(2)   // 声明一个长度为2的list
var list3 = []   // 字面量声明一个长度为0的list
var list4 = new List<int>.filled(3, 0, growable: true); // [0, 0, 0]  
var list5 = new List<int>.generate(3, (int index) => index * index); // [0, 1, 4]
```

声明一个List时，若指明了长度，则该List长度是只读属性，不能重新赋值。

```dart
List fixedLengthList = new List(3);
fixedLengthList.length;     // 3
fixedLengthList.length = 1; // Error

List growableList = new List();
growableList.length; // 0;
growableList.length = 3;
```

### 方法

- add(value): 在list末尾添加值，无返回值
- addAll(iterable): 将可迭代的iterable所有元素添加到list末尾，无返回值
- sort([compare(a, b)]):  根据compare功能指定的顺序对该列表进行排序，无返回值。

```dart
numbers = ['two', 'three', 'four']
numbers.sort((a, b) => a.length.compareTo(b.length))  
print(numbers);  // [two, four, three]
```

- shuffle([Random random]):  随机调整此列表的元素。无返回值。
- indexOf(element, [int start = 0]):  从索引start开始，返回此列表中element的第一个索引,不存在返回-1。
- lastIndexOf(E element, [int start])：从索引start开始,向列表头部方向检测，返回此列表中element的第一个索引,不存在返回-1

```dart
List<String> notes = ['do', 're', 'mi', 're'];
notes.indexOf('re');    // 1
notes.indexOf('re', 2); // 3
notes.lastIndexOf('re');  // 3
```

- indexWhere(bool test(E element), [int start = 0]): 从索引start开始,返回满足提供的`test`的列表中的第一个索引,不存在返回-1

- lastIndexWhere(bool test(E element), [int start])：从索引start开始,向列表头部方向检测，返回满足提供的`test`的列表中的第一个索引,不存在返回-1

```dart
List<String> notes = ['do', 're', 'mi', 're'];
notes.indexWhere((note) => note.startsWith('r'));       // 1
notes.indexWhere((note) => note.startsWith('r'), 2);    // 3

notes.lastIndexWhere((note) => note.startsWith('r'));       // 3
notes.lastIndexWhere((note) => note.startsWith('r'), 2);    // 1
```

- clear(): 清空列表，无返回值。若列表长度是固定的则会抛出异常。无返回值
- insert(int index, E element)： 从索引位置向列表中插入元素，列表长度必须是可增长的。无返回值
- insertAll(int index, Iterable  iterable)： 从索引位置向列表中插入`iterable`中的元素，列表长度必须是可增长的。无返回值

```dart
List<String> list = ['a', 'b', 'c'];
list.insert(1,'dd');
print(list); //[a, dd, b, c]
list.insertAll(1, ['bee', 'sea']);
print(list); //[a, bee, sea, dd, b, c]
```

- `setAll(int index, Iterable<E> iterable)`: 从索引位置开始，用`iterable`中的元素设置List中的元素值。无返回值

```dart
List<String> list = ['a', 'b', 'c'];
list.setAll(1, ['bee', 'sea']);
list.join(', '); // 'a, bee, sea'
```

- remove(Object value): 从列表中删除第一次出现的`value`，成功返回true,否则返回false。

```dart
List<String> parts = ['head', 'shoulders', 'knees', 'toes'];
parts.remove('head'); // true
```

- removeAt(int index)： 从列表中删除对应索引上的元素。返回删除的元素。
- removeLast(): 删除列表中的最后一个元素，并返回。
- removeWhere(bool test(E element))： 从列表中删除所有符合`test`的元素。无返回值。

```dart
List<String> numbers = ['one', 'two', 'three', 'four'];
numbers.removeWhere((item) => item.length == 3);
numbers.join(', '); // 'three, four'
```

- retainWhere(bool test(E element))： 从列表中删除所有`不`符合`test`的元素。无返回值。

```dart
List<String> numbers = ['one', 'two', 'three', 'four'];
numbers.retainWhere((item) => item.length == 3);
numbers.join(', '); // 'one, two'
```

- sublist(int start, [int end])： 返回一个从索引`start`到`end`元素的新列表。

```dart
var colors = ["red", "green", "blue", "orange", "pink"];
print(colors.sublist(1, 3)); // [green, blue]
```

- getRange(int start, int end): 返回一个从索引`start`到`end`元素的可迭代对象。

```dart
List<String> colors = ['red', 'green', 'blue', 'orange', 'pink'];
Iterable<String> range = colors.getRange(1, 4);
pring(range);   //(green, blue, orange)
```

- `setRange(int start, int end, Iterable<E> iterable, [int skipCount = 0])`: 使用`iterable`中的元素设置从`start`到`end`的元素，`skipCount `表示跳过`iterable`中头部元素个数，无返回值。

```dart
List<int> list1 = [1, 2, 3, 4];
List<int> list2 = [5, 6, 7, 8, 9];
list1.setRange(1, 3, list2, 3);
print(list1);  //[1, 8, 9, 4]
```

- removeRange(int start, int end)： 删除[index]到[end]范围内的对象。无返回值

```dart
List<int> list1 = [1, 2, 3, 4];
list1.removeRange(1, 3);
print(list1); //[1,4]
```

- fillRange(int start, int end, [E fillValue])： 使用`fillValue`填充[index]到[end]范围内的对象，无返回值

```dart
List<int> list1 = [1, 2, 3, 4];
list1.fillRange(1, 3, 0);
print(list1);  //[1, 0, 0, 4]

List<int> list = new List(3);
list.fillRange(0, 2, 1);
print(list); //  [1, 1, null]
```

- `replaceRange(int start, int end, Iterable<E> replacement)`: 使用`replacement`替换从`start`到`end`的元素，无返回值

```dart
List<int> list = [1, 2, 3, 4, 5];
list.replaceRange(1, 4, [6, 7]);
print(list);  //[1, 6, 7, 5]
```

- asMap(): 返回一个不可变的map。

```dart
List<int> list = [1, 2, 3, 4, 5];
print(list.asMap()); //{0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
```

**对于能增删列表元素的方法，要求列表必须是能增长的，也就是为指定列表长度。否则会出错**

### 静态方法

- `castFrom<S,T>(List<S> source)`： 将列表元素类型`S`转换成另一种类似`T`，元素类型`S`必须是转换后类型`T`的字类，否则会出错，返回类型转换后的列表。
- copyRange:(List target, int at, List source,[int start, int end]): 将一个列表的范围复制到另一个列表

```dart
var list = [1.2, 2, 3, 4, 5];
var lis2 = [2,9,8,7,6,5];
List.copyRange(list, 1, lis2,2,5);
print(list);  //[1.2, 8, 7, 6, 5]
```

- `writeIterable<T>(List<T> target, int at, Iterable<T> source)`:  将可迭代的元素写入列表

### 操作符

`+`：将两个list合并后返回一个可增长的列表。

```dart
List<String> list = ['a', 'b', 'c'];
var list2 = list + ['12','11'];
print(list2);  //[a, b, c, 12, 11]
print(list);  //[a, b, c]
```

`==`： 比较两个list是否相等，比较内存指向。

```dart
List<int> list = [1, 2, 3, 4, 5];
var list2 = list;
print(list==list2);  //true
print(list==[1,2,3,4,5]);  //false
```



### 属性

| set属性 | 说明                                         | 用法                | 返回类型 |
| ------- | -------------------------------------------- | ------------------- | -------- |
| first   | 设置list的第一个值，第一个值必须存在否则出错 | list.first=value    | void     |
| last    | 设置list的最后一个值                         | list.last=value     | void     |
| length  | 设置list的长度                               | list.length = value | ints     |



| get属性  | 说明                           | 用法          | 返回类型 |
| -------- | ------------------------------ | ------------- | -------- |
| length   | 获取list的长度                 | list.length   | int      |
| reversed | 以相反的顺序返回此列表中的对象 | list.reversed | Iterable |

## set

## map

## 函数

## 类

## 泛型

## 网络编程

### http

### socket



