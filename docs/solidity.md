## 类型
### 布尔类型
```sol
bool a = true
bool b = false
```

### 整型
关键字 `uint8` 到 `uint256` （无符号整型，从 8 位到 256 位）以及 `int8` 到 `int256`, 以 `8` 位为步长递增。 `uint` 和 `int` 分别是 `uint256` 和 `int256` 的别名。

> 对于一个整数类型 `X`，您可以使用 `type(X).min` 和 `type(X).max` 来访问该类型代表的`最小值`和`最大值`。

### 浮点型
`fixed` / `ufixed`：表示各种大小的有符号和无符号的定长浮点型。

在关键字 `ufixedMxN` 和 `fixedMxN` 中， `M` 表示该类型占用的位数， `N` 表示可用的小数位数。 `M` 必须能整除 `8`，即 `8` 到 `25`6 位。 N 则可以是从 `0` 到 `80` 之间的任意数。

`ufixed` 和 `fixed` 分别是 `ufixed128x18` 和 `fixed128x18` 的别名。

### 地址类型
- `address`: 保存一个20字节的值（一个以太坊地址的大小）
- `address payable`: 与 `address` 类型相同，但有额外的方法 `transfer` 和 `send`

```sol
    address payable x = payable(0x123);
    address myAddress = address(this);
    if (x.balance < 10 && myAddress.balance >= 10) x.transfer(10);
```

> 允许从 `address payable` 到 `address` 的隐式转换， 而从 `address` 到 `address payable` 的转换必须通过 `payable(<address>)` 来明确。

> 对于 `uint160`、`整数`、 `bytes20` 和`合约类型`，允许对 `address` 进行明确的转换和输出。

> 只有 `address` 类型和合约类型的表达式可以通过 `payable(...)` 显式转换为 `address payable` 类型。对于合约类型，只有在合约可以接收以太的情况下才允许这种转换，也就是说， 合约要么有一个 `receive` 函数，要么有一个 `payable` 类型的 `fallback` 的函数。

#### 方法
- `transfer`
- `send`: `send` 是 `transfer` 的低级对应部分。如果执行失败，当前的合约不会因异常而停止，但 `send` 会返回 `false`。
- `call`
- `delegatecall`
- `staticcall`

> `call`, `delegatecall` 和 `staticcall` 函数。 它们都接受一个 `bytes memory` 参数，并返回成功条件（作为一个 `bool`） 和返回的数据（ `bytes memory`）。 

```sol
bytes memory payload = abi.encodeWithSignature("register(string)", "MyName");
(bool success, bytes memory returnData) = address(nameReg).call(payload);
require(success);
```

### 合约类型
通过关键字`contract`声明一个`合约`, 通过`new`实例化一个合约。
```sol
contract D {
    constructor(uint a) {

    }
}

D newD = new D(arg)

```

### 字节类型
#### 定长字节
值类型 `bytes1`, `bytes2`, `bytes3`, ..., `bytes32` 代表从`1`到`32`的字节序列
#### 变长字节
- `bytes`：变长字节数组, `bytes1`，……， `bytes32`
- `string`：变长 `UTF-8` 编码字符串类型

```sol
bytes32 samevar = "stringliteral"
string str = "hello world"
string str2 = string.concat("hello", "world")
```
> `bytes.concat` 函数可以连接任意数量的 `bytes` 或 `bytes1 ... bytes32` 值, `string.concat` 连接任意数量的 `string` 值.

> 不带参数调用 `string.concat` 或 `bytes.concat`，它们会返回一个空数组。


### 枚举类型
枚举是创建用户定义类型的一种方式, 可以显式地转换为所有整数类型, 和从整数类型来转换, 但不允许隐式转换.从整数的显式转换在运行时检查该值是否在枚举的范围内，否则会导致 异常。 枚举要求至少有一个成员，其声明时的默认值是第一个成员。 枚举不能有超过256个成员。
使用关键字`enum`声明一个枚举。
```sol
enum direct { left, right, center }
```
> 枚举成员值从`0`开始，依次`+1`, 使用 `type(NameOfEnum).min` 和 `type(NameOfEnum).max` 您可以得到给定枚举的`最小值`和`最大值`。

### 自定义类型
使用关键字`type`自定义一个类型。
```sol
type UFixed256x18 is uint256;
```

## 引用类型
引用类型的值可以通过多个不同的名称进行修改, 使用一个引用类型，必须明确地提供存储该类型的数据区域。

### 数据位置
每个引用类型都有一个额外的属性，即 "数据位置"， 关于它的存储位置。有三个数据位置：
- `memory`: 其寿命限于外部函数调用
- `storage`: 存储状态变量的位置，其寿命限于合约的寿命 
- `calldata`: 是一个不可修改的、非持久性的区域，用于存储函数参数，其行为主要类似于`memory`

### 分配行为
数据位置不仅与数据的持久性有关，而且也与分配的语义有关：
- 在 `storage` 和 `memory` 之间的分配（或从 `calldata` 中分配） 总是创建一个独立的拷贝。
- 从 `memory` 到 `memory` 的赋值只创建引用。 这意味着对一个内存变量的改变在所有其他引用相同数据的内存变量中也是可见的。
- 从 `storage` 到 `local` 存储变量的赋值也只赋值一个引用
- 所有其他对 `storage` 的赋值总是拷贝的

## 函数
使用关键字`function`声明一个函数； 使用关键字`internal`或`external`声明函数为内部还是还是外面函数；使用关键字`pure`、`view`或`payable`表示函数状态类型；使用关键字`returns`或`return`声明多个返回值或一个返回值,最多可返回`7`个。
签名如下：
```sol
function (<parameter types>) {internal|external} [pure|view|payable] [returns (<return types>)]

contract Example {
    function f() public payable returns (bytes4) {
        assert(this.f.address == address(this));
        return this.f.selector;
    }

    function g() public {
        this.f{gas: 10, value: 800}();
    }
}

```
### 可见性
默认情况下，函数类型是内部函数，所以可以省略 `internal` 关键字; 
在合约中声明函数，必须指定可见性，没有默认类型。

### 函数状态
- `pure` 函数可以转换为 `view` 和 非 `payable` 函数
- `view` 函数可以转换为 非 `payable` 函数
- `payable` 函数可以转换为 非 `payable` 函数


## 数组
一个元素类型为 `T`，固定长度为 `k` 的数组可以声明为 `T[k]`， 而动态数组声明为 `T[]`。
- `.push()`: 追加一个零初始化的元素并返回它的引用。
- `.push(value)`: 向数组末端追加一个新的元素。
- `.pop()`: 从数组的末端移除一个元素
- `.length`: 当前数组长度

```sol
contract C {
    uint[][] s;

    function f() public {
        // 存储一个指向s的最后一个数组元素的指针。
        uint[] storage ptr = s[s.length - 1];
        // 删除s的最后一个数组元素。
        s.pop();
        // 写入已不在数组内的数组元素。
        ptr.push(0x42);
        // 现在向 ``s`` 添加一个新元素不会添加一个空数组，
        // 而是会产生一个长度为1的数组，元素为 ``0x42``。
        s.push();
        assert(s[s.length - 1][0] == 0x42);
    }
}
```

### 创建数组
- 使用字面量: 一个逗号分隔的一个或多个表达式的列表，用方括号（ `[...]` ）括起来, 长度是表达式的数量。
- 使用`new`关键字: 创建时需要指定数组长度，且长度不能再改变。以类型默认值初始化。
```sol
uint[] x = [1,2,3]

uint[] memory y = new uint[](7)
assert(y.length == 7);
```
