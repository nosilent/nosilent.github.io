## 变量

### 定义变量

 变量以 $ 符号开始，后面跟着变量的名称 ， 变量名是区分大小写的 

```php
 <?php $txt="Hello world!"; $x=5; $y=10.5; ?> 
```

### 变量作用域

` PHP `有四种不同的变量作用域 

- local
- global
- static
- parameter

####  局部和全局作用域

`全局变量`可以被脚本中的任何部分访问，要在一个函数中访问一个全局变量，需要使用 global 关键字。 

```php
<?php
$x=5;
$y=10;
function myTest()
{
    global $x,$y;
    $y=$x+$y;
}
myTest();
echo $y; // 输出 15
?>
```

` PHP` 将所有全局变量存储在一个名为 `$GLOBALS[index]` 的数组中。 *index* 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。 

```php
<?php
$x=5;
$y=10;
function myTest()
{
    $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
} 
myTest();
echo $y;
?>
```

#### Static 作用域

 一个函数完成时，它的所有变量通常都会被删除 , 有时候希望某个局部变量不要被删除 , 在第一次声明该变量时使用 **static** 关键字 

```php
function myTest()
{
    static $x=0;
    echo $x;
    $x++;
    echo PHP_EOL;    // 换行符
}
myTest()
myTest()
```

 每次调用该函数时，该变量将会保留着函数前一次被调用时的值 

#### 参数作用域

 参数是通过调用代码将值传递给函数的局部变量 

```php
<?php
function myTest($x)
{
    echo $x;
}
myTest(5);
?>
```

## 输出语句

 在 PHP 中有两个基本的输出方式： echo 和 print。 

 echo - 可以输出一个或多个字符串 ， print -只允许输出一个字符串， echo 输出的速度比 print 快， echo 没有返回值，print有返回值1 

### echo

 echo 是一个语言结构，使用的时候可以不用加括号，也可以加上括号： echo 或 echo()。 

 使用 echo 命令输出字符串（字符串可以包含 HTML 标签） 

```php
<?php
  $txt2 = "学习 PHP"
echo "<h2>PHP 很有趣!</h2>";
echo "Hello world!<br>";
echo "在 $txt2 学习 PHP ";
echo "这是一个", "字符串，", "使用了", "多个", "参数。";
?>
```

### print

 print 同样是一个语言结构，可以使用括号，也可以不使用括号： print 或 print()。 

```php
<?php
$txt1="学习 PHP";
$txt2="RUNOOB.COM";
print $txt1;
print "<h2>PHP 很有趣!</h2>";
print "在 $txt2 学习 PHP ";
?>
```

## EOF(heredoc) 

 EOF(heredoc)是一种在命令行shell和程序语言（像Perl、PHP、Python和Ruby）里定义一个字符串的方法。 

- 必须后接分号，否则编译通不过。
- **EOF** 可以用任意其它字符代替，只需保证结束标识与开始标识一致。
- 结束标识必须顶格独自占一行(即必须从行首开始，前后不能衔接任何空白和字符)。**
-  开始标识可以不带引号或带单双引号，不带引号与带双引号效果一致，解释内嵌的变量和转义符号，带单引号则不解释内嵌的变量和转义符号。
-  当内容需要内嵌引号（单引号或双引号）时，不需要加转义符，本身对单双引号转义，此处相当与q和qq的用法

```php
<?php
echo <<<EOF
    <h1>我的第一个标题</h1>
    <p>我的第一个段落。</p>
EOF;
// 结束需要独立一行且前后不能空格
?>
```

 在` heredoc` 中，变量不需要用连接符 **.** 或 **,** 来拼接 

```php
<?php
$name="runoob";
$a= <<<EOF
    "abc"$name
    "123"
EOF;
// 结束需要独立一行且前后不能空格
ech
```

## 数据类型

 String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）。 

使用` var_dump()` 函数返回变量的数据类型和值 。 

 对象必须使用class关键字声明类对象 

## 常量

 一个常量由英文字母、下划线、和数字组成,但数字不能作为首字母出现。 (常量名不需要加 $ 修饰符) 

 设置常量，使用 define() 函数 。常量在定义后，默认是全局变量，可以在整个运行的脚本的任何地方使用 。

```php
bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
```

- **name：**必选参数，常量名称，即标志符。
- **value：**必选参数，常量的值。
- **case_insensitive** ：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。

```php
<?php
// 区分大小写的常量名
define("GREETING", "欢迎访问");
echo GREETING;    // 输出 "欢迎访问"
echo '<br>';
echo greeting;   // 输出 "greeting"
?>
```

