## 变量

### 声明变量

```go
//标准声明
var 变量名 变量类型

// 批量声明
var (
    a int
    b string
    c []float32
    d func() bool
    e struct {
        x int
    }
)

// 简短声明
名字 := 表达式
i, j := 0, 1
```

 变量声明以关键字 var 开头，后置变量类型，行尾无须分号。 

**简短模式**有以下限制：

- 定义变量，同时显式初始化。
- 不能提供数据类型。
- 只能用在函数内部。

### 初始化

```go
//标准形式
var 变量名 类型 = 表达式
var hp int = 100

// 推导类型的格式
// 将类型省略，编译器会尝试根据等号右边的表达式推导变量的类型。
var hp = 100

//简短形式
hp := 100
```

> 由于使用了`:=`，而不是赋值的`=`，因此推导声明写法的左值变量必须是没有定义过的变量。若定义过，将会发生编译错误。 

> 在多个短变量声明和赋值中，至少有一个新声明的变量出现在左值中，即便其他变量名可能是重复声明的，编译器也不会报错， 

###  多重赋值 

```go
var a int = 100
var b int = 200
b, a = a, b
```

 多重赋值时，变量的左值和右值按从左到右的顺序赋值。 

### 匿名变量

 匿名变量是一个下画线`_`， “_”本身就是一个特殊的标识符，被称为空白标识符 , 可以像其他标识符那样用于变量的声明或赋值（任何类型都可以赋值给它），但任何赋给这个标识符的值都将被抛弃 。

 不可以使用这个标识符作为变量对其它变量进行赋值或运算 

 匿名变量不占用内存空间，不会分配内存。匿名变量与匿名变量之间也不会因为多次声明而无法使用。 

## 常量

 常量使用关键字 const 定义，用于存储不会改变的数据，常量是在编译时被创建的，即使定义在函数内部也是如此，并且只能是布尔型、数字型（整数型、浮点型和复数）和字符串型 。

### 常量声明

 一个常量的声明也可以包含一个类型和一个值，但是如果没有显式指明类型，那么将从右边的表达式推断类型 

```go
const name [type] = value
//批量声明多个常量
const (
    e  = 2.7182818
    pi = 3.1415926
)
```

 批量声明的常量，除了第一个外其它的常量右边的初始化表达式都可以省略，如果省略初始化表达式则表示使用前面常量的初始化表达式，对应的常量类型也是一样的 

```go
const (
    a = 1
    b
    c = 2
    d
)
fmt.Println(a, b, c, d) // "1 1 2 2"
```

### iota常量生成器

 常量声明可以使用 iota 常量生成器初始化，它用于生成一组以相似规则初始化的常量，但是不用每行都写一遍初始化表达式。在一个 const 声明语句中，在第一个声明的常量所在的行，iota 将会被置为 0，然后在每一个有常量声明的行加一 。

```go
type Weekday int
const (
    Sunday Weekday = iota
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
)
```

#### 模拟枚举

 iota 不仅可以生成每次增加 1 的枚举值。还可以利用 iota 来做一些强大的枚举常量值生成器 。

```go
const (
    FlagNone = 1 << iota
    FlagRed
    FlagGreen
    FlagBlue
)
fmt.Printf("%d %d %d\n", FlagRed, FlagGreen, FlagBlue)   //2 4 8 十进制输出
fmt.Printf("%b %b %b\n", FlagRed, FlagGreen, FlagBlue)   //10 100 1000 二进制输出
```

### 无类型常量

 六种未明确类型的常量类型，分别是无类型的布尔型、无类型的整数、无类型的字符、无类型的浮点数、无类型的复数、无类型的字符串。 

## 数据类型

基本类型有：

- bool
- string
- int、int8、int16、int32、int64
- uint、uint8、uint16、uint32、uint64、uintptr
- byte // uint8 的别名
- rune // int32 的别名 代表一个 Unicode 码
- float32、float64
- complex64、complex128

### 数值类型

 数值类型分为以下几种：整数、浮点数、复数，有存在有符号和无符号之分。

 例如有符号整数包含 int8、int16、int32、int64 等 ， 无符号 uint8、uint16、uint32 和 uint64 等。

#### 复数声明

 复数是由两个浮点数表示的，其中一个表示实部（real），一个表示虚部（imag）

 复数的类型有两种，分别是 complex128（64 位实数和虚数）和 complex64（32 位实数和虚数），其中 complex128 为复数的默认类型。  

 声明复数的语法格式 :

```go
name := complex(x, y)
```

 x、y 分别表示构成该复数的两个 float64 类型的数值，x 为实部，y 为虚部 

### 布尔类型

 Go语言对于值之间的比较有非常严格的限制，只有两个相同类型的值才可以进行比较 

 布尔值并不会隐式转换为数字值 0 或 1 

 Go语言中不允许将整型强制转换为布尔型 

 布尔型无法参与数值运算，也无法与其他类型进行转换。 

声明一个布尔类型：

```go
var n bool
```

### 字符类型

字符有以下两种：

- 一种是 uint8 类型，或者叫 byte 型，代表了 ASCII 码的一个字符。 

-  另一种是 rune 类型，代表一个 UTF-8 字符，  rune 类型等价于 int32 类型 

#### 字符拼接

使用`+`或 `+=`拼接字符串

```go
str := "Beginning of the string " +
"second part of the string"

s := "hel" + "lo,"
s += "world!"
```

> go语言中必须使用双引号`""`来定义字符串 

#### 定义多行字符串

使用"`"反引号定义一个多行字符串， 在反引号间的所有代码均不会被编译器识别，而只是作为字符串的一部分 

```go
const str = `第一行
第二行
第三行
\r\n
`
```

### 类型转换

 Go语言不存在隐式类型转换，因此所有的类型转换都必须显式的声明 

```go
valueOfTypeB = typeB(valueOfTypeA)
类型 B 的值 = 类型 B(类型 A 的值)
```

#### string与Int类型转换

 Go语言中的 `strconv` 包提供了字符串和基本数据类型之间的转换功能 。

##### Itoa()

函数定义：

```go
func Itoa(i int) string
```

 `Itoa()` 函数用于将 int 类型数据转换为对应的字符串类型 

```go
num := 100
    str := strconv.Itoa(num)
    fmt.Printf("type:%T value:%#v\n", str, str)  //type:string value:"100"
```

##### Atoi()

函数定义：

```go
func Atoi(s string) (i int, err error)
```

` Atoi() `函数用于将字符串类型的整数转换为 int 类型 ,  Atoi() 函数有两个返回值(转换成功的整型， 转换成功为空转换失败为相应的错误信息 )

```go
str1 := "110"
str2 := "s100"
num1, err := strconv.Atoi(str1)
if err != nil {
  fmt.Printf("%v 转换失败！", str1)
} else {
  fmt.Printf("type:%T value:%#v\n", num1, num1) //type:int value:110
}
num2, err := strconv.Atoi(str2)
if err != nil {
  fmt.Printf("%v 转换失败！", str2)
} else {
  fmt.Printf("type:%T value:%#v\n", num2, num2) //s100 转换失败！
}
```

#### Parse系列函数

 Parse 系列函数用于将字符串转换为指定类型的值，其中包括 ParseBool()、ParseFloat()、ParseInt()、ParseUint()。 

 Parse 系列函数都有两个返回值，第一个返回值是转换后的值，第二个返回值为转化失败的错误信息。 

##### ParseBool()

 ParseBool() 函数用于将字符串转换为 bool 类型的值，它只能接受 1、0、t、f、T、F、true、false、True、False、TRUE、FALSE，其它的值均返回错误 。

该函数定义为：

```go
func ParseBool(str string) (value bool, err error)
```

示例：

```go
str1 := "110"
boo1, err := strconv.ParseBool(str1)
```

##### ParseInt()

 ParseInt() 函数用于返回字符串表示的整数值（可以包含正负号） 

函数定义：

```go
func ParseInt(s string, base int, bitSize int) (i int64, err error)
```

- base 指定进制，取值范围是 2 到 36。如果 base 为 0，则会从字符串前置判断，“0x”是 16 进制，“0”是 8 进制，否则是 10 进制 
-  bitSize 指定结果必须能无溢出赋值的整数类型，0、8、16、32、64 分别代表 int、int8、int16、int32、int64 
-  返回的 err 是 *NumErr 类型的，如果语法有误，err.Error = ErrSyntax，如果结果超出类型范围 err.Error = ErrRange。 

示例：

```go
str := "-11"
num, err := strconv.ParseInt(str, 10, 0)
```

##### ParseUint()

 ParseUint() 函数的功能类似于 ParseInt() 函数，但 ParseUint() 函数不接受正负号，用于无符号整型 .

函数定义：

```go
func ParseUint(s string, base int, bitSize int) (n uint64, err error)
```

##### ParseFloat()

 ParseFloat() 函数用于将一个表示浮点数的字符串转换为 float 类型 

函数定义：

```go
func ParseFloat(s string, bitSize int) (f float64, err error)
```

-  如果 s 合乎语法规则，函数会返回最为接近 s 表示值的一个浮点数（使用 IEEE754 规范舍入） 
-  bitSize 指定了返回值的类型，32 表示 float32，64 表示 float64； 
-  返回值 err 是 *NumErr 类型的，如果语法有误 err.Error=ErrSyntax，如果返回值超出表示范围，返回值 f 为 ±Inf，err.Error= ErrRange。 

示例：

```go
str := "3.1415926"
num, err := strconv.ParseFloat(str, 64)
```

#### Format系列函数

 Format 系列函数实现了将给定类型数据格式化为字符串类型的功能，其中包括 FormatBool()、FormatInt()、FormatUint()、FormatFloat()。 

#####  FormatBool()

 FormatBool() 函数可以一个 bool 类型的值转换为对应的字符串类型 

函数定义： 

```go
func FormatBool(b bool) string
```

示例：

```go
num := true
str := strconv.FormatBool(num)
fmt.Printf("type:%T,value:%v\n ", str, str)  //type:string,value:true
```

##### FormatInt()

 FormatInt() 函数用于将整型数据转换成指定进制并以字符串的形式返回， 

函数定义：

```go
func FormatInt(i int64, base int) string
```

 其中，参数 i 必须是 int64 类型，参数 base 必须在 2 到 36 之间，返回结果中会使用小写字母“a”到“z”表示大于 10 的数字。 

示例：

```go
var num int64 = 100
str := strconv.FormatInt(num, 16)
fmt.Printf("type:%T,value:%v\n ", str, str)  //type:string,value:64
```

##### FormatUint()

 FormatUint() 函数与 FormatInt() 函数的功能类似，但是参数 i 必须是无符号的 uint64 类型， 

函数定义：

```go
func FormatUint(i uint64, base int) string
```

示例：

```go
var num uint64 = 110
str := strconv.FormatUint(num, 16)
fmt.Printf("type:%T,value:%v\n ", str, str)  //type:string,value:6e
```

##### FormatFloat()

 FormatFloat() 函数用于将浮点数转换为字符串类型 

函数定义：

```go
func FormatFloat(f float64, fmt byte, prec, bitSize int) string
```

-  bitSize 表示参数 f 的来源类型（32 表示 float32、64 表示 float64），会据此进行舍入 
-  fmt 表示格式，可以设置为“f”表示 -ddd.dddd、“b”表示 -ddddp±ddd，指数为二进制、“e”表示 -d.dddde±dd 十进制指数、“E”表示 -d.ddddE±dd 十进制指数、“g”表示指数很大时用“e”格式，否则“f”格式、“G”表示指数很大时用“E”格式，否则“f”格式。 
-  prec 控制精度（排除指数部分）：当参数 fmt 为“f”、“e”、“E”时，它表示小数点后的数字个数；当参数 fmt 为“g”、“G”时，它控制总的数字个数。如果 prec 为 -1，则代表使用最少数量的、但又必需的数字来表示 f。 

示例：

```go
var num float64 = 3.1415926
str := strconv.FormatFloat(num, 'E', -1, 64)
fmt.Printf("type:%T,value:%v\n ", str, str)  //type:string,value:3.1415926E+00
```

#### Append系列函数

 Append 系列函数用于将指定类型转换成字符串后追加到一个切片中，其中包含 AppendBool()、AppendFloat()、AppendInt()、AppendUint()。 

 Append 系列函数和 Format 系列函数的使用方法类似，只不过是将转换后的结果追加到一个切片中。 

### 类型别名

#### 类型别名与类型定义

`类型别名`写法 ：

```go
type newName = Type
```

 `newName`只是 Type 的别名，本质上 `newName`与 Type 是同一个类型 ,使用`newName`和`Type`等效。

类型别名只在代码中存在，编译完成时不会再存在。

`类型定义`写法：

```go
// 将NewInt定义为int类型
type NewInt int
```

 定义类型的方法，通过 type 关键字的定义，`NewInt` 会形成一种新的类型，`NewInt `本身依然具备 int 类型的特性 

## 指针

 一个指针变量可以指向任何一个值的内存地址，它所指向的值的内存地址在 32 和 64 位机器上分别占用 4 或 8 个字节，占用字节的大小与所指向的值的大小无关。当一个指针被定义后没有分配到任何变量时，它的默认值为 nil。指针变量通常缩写为 ptr。 

 Go语言中使用在变量名前面添加`&`操作符（前缀）来获取变量的内存地址（取地址操作） 

```go
ptr := &v    // v 的类型为 T
```

 v 代表被取地址的变量，变量 v 的地址使用变量 ptr 进行接收，ptr 的类型为`*T`，称做 T 的指针类型，`*`代表指针 。

### 获取指定指向值

 使用`&`操作符对普通变量进行取地址操作并得到变量的指针后，可以对指针使用`*`操作符，也就是指针取值 。

```go
// 准备一个字符串类型
var house = "Malibu Point 10880, 90265"
// 对字符串取地址, ptr类型为*string
ptr := &house
// 打印ptr的类型
fmt.Printf("ptr type: %T\n", ptr)
// 打印ptr的指针地址
fmt.Printf("address: %p\n", ptr)
// 对指针进行取值操作
value := *ptr
// 取值后的类型
fmt.Printf("value type: %T\n", value)
// 指针取值后就是指向变量的值
fmt.Printf("value: %s\n", value)
```

### 使用指针修改值

```go
// 交换函数
func swap(a, b *int) {
    // 取a指针的值, 赋给临时变量t
    t := *a
    // 取b指针的值, 赋给a指针指向的变量
    *a = *b
    // 将a指针的值赋给b指针指向的变量
    *b = t
}
func main() {
// 准备两个变量, 赋值1和2
    x, y := 1, 2
    // 交换变量值
    swap(&x, &y)
    // 输出变量值
    fmt.Println(x, y)
}
```

 **`*`操作符作为右值时，意义是取指针的值，作为左值时，也就是放在赋值操作符的左边时，表示 指针指向的变量**

**当`*`操作在右值时，就是取指向变量的值，当`*`操作在左值时，就是将值设置给指向的变量。 **

### 创建指针

使用`new`关键词可以创建指针变量

```go
new(类型)

str := new(string)
*str = "Go语言教程"
fmt.Println(*str)
```

