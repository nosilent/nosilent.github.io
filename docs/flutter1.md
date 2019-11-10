## 程序构成

## 布局组件

### 线性布局

 指沿水平或垂直方向排布子组件 

#### Row

将children中的内容水平展示，构造函数实现：

```dart
Row({
  Key key,
  MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start, //子组件在Row所占用的水平空间内对齐方式
  MainAxisSize mainAxisSize = MainAxisSize.max, //表示Row在主轴(水平)方向占用的空间,类似块和行类块宽度显示方式
  CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center, //子组件在纵轴方向的对齐方式
  TextDirection textDirection,  //水平方向子组件的布局顺序
  VerticalDirection verticalDirection = VerticalDirection.down, //表示Row纵轴（垂直）的对齐方向
  TextBaseline textBaseline,
  List<Widget> children = const <Widget>[], //子组件数组
}) : super(
  children: children,
  key: key,
  direction: Axis.horizontal,
  mainAxisAlignment: mainAxisAlignment,
  mainAxisSize: mainAxisSize,
  crossAxisAlignment: crossAxisAlignment,
  textDirection: textDirection,
  verticalDirection: verticalDirection,
  textBaseline: textBaseline,
);
```

```dart
Row(
  mainAxisAlignment: MainAxisAlignment.end,
  textDirection: TextDirection.rtl,
  verticalDirection: VerticalDirection.up,
  children: <Widget>[
    Text(" hello world "),
    Text(" I am Jack "),
  ],
),
```

#### Column

 在垂直方向排列其子组件 

```dart
Column({
  Key key,
  MainAxisAlignment mainAxisAlignment = MainAxisAlignment.start,
  MainAxisSize mainAxisSize = MainAxisSize.max,
  CrossAxisAlignment crossAxisAlignment = CrossAxisAlignment.center,
  TextDirection textDirection,
  VerticalDirection verticalDirection = VerticalDirection.down,
  TextBaseline textBaseline,
  List<Widget> children = const <Widget>[],
}) : super(
  children: children,
  key: key,
  direction: Axis.vertical,
  mainAxisAlignment: mainAxisAlignment,
  mainAxisSize: mainAxisSize,
  crossAxisAlignment: crossAxisAlignment,
  textDirection: textDirection,
  verticalDirection: verticalDirection,
  textBaseline: textBaseline,
);
```

### 流式布局

 在`Row`和`Colum`中，如果子`widget`超出屏幕范围，则会报溢出错误。使用流式布局，溢出部分则会自动折行 

#### Wrap

```dart
Wrap({
  Key key,
  this.direction = Axis.horizontal, 
  this.alignment = WrapAlignment.start,
  this.spacing = 0.0, //主轴方向子widget的间距
  this.runAlignment = WrapAlignment.start,  //纵轴方向的对齐方式
  this.runSpacing = 0.0, //纵轴方向的间距
  this.crossAxisAlignment = WrapCrossAlignment.start,
  this.textDirection,
  this.verticalDirection = VerticalDirection.down,
  List<Widget> children = const <Widget>[],
}) : super(key: key, children: children);
```

#### Flow

```dart
Flow({
  Key key,
  @required this.delegate,
  List<Widget> children = const <Widget>[],
}) : assert(delegate != null),
     super(key: key, children: RepaintBoundary.wrapAll(children));

Flow.unwrapped({
  Key key,
  @required this.delegate,
  List<Widget> children = const <Widget>[],
}) : assert(delegate != null),
     super(key: key, children: children);
```

### 弹性布局Flex

 弹性布局允许子组件按照一定比例来分配父容器空间 , `Flex`组件可以沿着水平或垂直方向排列子组件 ,

 `Row`和`Column`都继承自`Flex` 

#### flex

```dart
Flex({
  Key key,
  @required this.direction,
  this.mainAxisAlignment = MainAxisAlignment.start,
  this.mainAxisSize = MainAxisSize.max,
  this.crossAxisAlignment = CrossAxisAlignment.center,
  this.textDirection,
  this.verticalDirection = VerticalDirection.down,
  this.textBaseline,
  List<Widget> children = const <Widget>[],
}) : assert(direction != null),
     assert(mainAxisAlignment != null),
     assert(mainAxisSize != null),
     assert(crossAxisAlignment != null),
     assert(verticalDirection != null),
     assert(crossAxisAlignment != CrossAxisAlignment.baseline || textBaseline != null),
     super(key: key, children: children);
```

#### Expanded

 可以按比例“扩伸” `Row`、`Column`和`Flex`子组件所占用的空间 

```dart
const Expanded({
  Key key,
  int flex = 1,
  @required Widget child,
}) : super(key: key, flex: flex, fit: FlexFit.tight, child: child);
```

```dart
Flex(
  direction: Axis.horizontal,
  children: <Widget>[
    Expanded(
      flex: 1,
      child: Container(
        height: 30.0,
        color: Colors.red,
      ),
    ),
    Expanded(
      flex: 2,
      child: Container(
        height: 30.0,
        color: Colors.green,
      ),
    ),
  ],
)
```

### 层叠布局

层叠布局和Web中的绝对定位是相似的，子组件可以根据距父容器四个角的位置来确定自身的位置 , 

`Stack`允许子组件堆叠，而`Positioned`用于根据`Stack`的四个角来确定子组件的位置。 

#### Stack

```dart
Stack({
  Key key,
  this.alignment = AlignmentDirectional.topStart,
  this.textDirection,
  this.fit = StackFit.loose,
  this.overflow = Overflow.clip,
  List<Widget> children = const <Widget>[],
}) : super(key: key, children: children);
```

#### Positioned

```dart
const Positioned({
  Key key,
  this.left,
  this.top,
  this.right,
  this.bottom,
  this.width,
  this.height,
  @required Widget child,
}) : assert(left == null || right == null || width == null),
     assert(top == null || bottom == null || height == null),
     super(key: key, child: child);

Positioned.directional({
Key key,
@required TextDirection textDirection,
double start,
double top,
double end,
double bottom,
double width,
double height,
@required Widget child
}){
  assert(textDirection != null);
  double left;
  double right;
  switch (textDirection) {
    case TextDirection.rtl:
      left = end;
      right = start;
      break;
    case TextDirection.ltr:
      left = start;
      right = end;
      break;
  }
  return Positioned(
    key: key,
    left: left,
    top: top,
    right: right,
    bottom: bottom,
    width: width,
    height: height,
    child: child,
  );
}

const Positioned.fill({
  Key key,
  this.left = 0.0,
  this.top = 0.0,
  this.right = 0.0,
  this.bottom = 0.0,
  @required Widget child,
}) : width = null,
     height = null,
     super(key: key, child: child);

Positioned.fromRect({
  Key key,
  Rect rect,
  @required Widget child,
}) : left = rect.left,
     top = rect.top,
     width = rect.width,
     height = rect.height,
     right = null,
     bottom = null,
     super(key: key, child: child);

Positioned.fromRelativeRect({
  Key key,
  RelativeRect rect,
  @required Widget child,
}) : left = rect.left,
     top = rect.top,
     right = rect.right,
     bottom = rect.bottom,
     width = null,
     height = null,
     super(key: key, child: child);
```

### 对齐与定位

#### Align

 `Align` 组件可以调整子组件的位置，并且可以根据子组件的宽高来确定自身的的宽高 

```dart
const Align({
  Key key,
  this.alignment = Alignment.center, //表示子组件在父组件中的起始位置
  this.widthFactor,   //宽度缩放因子
  this.heightFactor,  //高度缩放因子
  Widget child,
}) : assert(alignment != null),
     assert(widthFactor == null || widthFactor >= 0.0),
     assert(heightFactor == null || heightFactor >= 0.0),
     super(key: key, child: child);
```

##### Alignment

```dart
const Alignment(
double x,
double y
)
```

 定目标位置,Alignment(double x, double y)表示点(x * w/2 + w/2, y * h/2 + h/2)，w、h为目标的宽高 

| 属性 | 范围 | 说明                                                         |
| ---- | ---- | ------------------------------------------------------------ |
| x    | -1~1 | 0为中心，-1为左边界，1为右边界，若值超出边界值则按边界值计算 |
| y    | -1~1 | 0为中心，-1为上边界，1为下边界，若值超出边界值则按边界值计算 |

| 常量属性     | 使用                   | 说明                                      |
| ------------ | ---------------------- | ----------------------------------------- |
| bottomCenter | Alignment.bottomCenter | 底部水平居中，相当于Alignment(0.0, 1.0)   |
| bottomLeft   | Alignment.bottomLeft   | 左下角，相当于Alignment(-1.0,-1.0)        |
| bottomRight  | Alignment.bottomRight  | 有下角，相当于Alignment(1.0,-1.0)         |
| center       | Alignment.center       | 水平和垂直居中，相当于Alignment(0.0,0.0)  |
| centerLeft   | Alignment.centerLeft   | 左边界垂直居中，相当于Alignment(-1.0,0.0) |
| centerRight  | Alignment.centerRight  | 右边界垂直居中，相当于Alignment(1.0,0.0)  |
| topCenter    | Alignment.topCenter    | 顶部居中，相当于Alignment(0.0,-1.0)       |
| topLeft      | Alignment.topLeft      | 左上角，相当于Alignment(0.0,-1.0)         |
| topRight     | Alignment.topRight     | 右上角，相当于Alignment(0.0,1.0)          |

#### Center

```dart
const Center({ Key key, 
              double widthFactor, 
              double heightFactor,
              Widget child 
     }): super(key: key,
          widthFactor: widthFactor,
          heightFactor: heightFactor, 
          child: child);
```

## 容器组件

### Scaffold、TabBar、底部导航



### Container

### 装饰容器DecoratedBox

### 变换Transform

### 尺寸限制类容器

 尺寸限制类容器用于限制容器大小 

#### ConstrainedBox

使用`constraints`对子元素添加约束

```dart
ConstrainedBox({
Key key,
@required BoxConstraints constraints,
Widget child
})
```

##### BoxConstraints

```dart
const BoxConstraints({
double minWidth: 0.0,
double maxWidth: double.infinity,
double minHeight: 0.0,
double maxHeight: double.infinity
})

const BoxConstraints.expand({
  double width,
  double height,
}) : minWidth = width ?? double.infinity,
     maxWidth = width ?? double.infinity,
     minHeight = height ?? double.infinity,
     maxHeight = height ?? double.infinity;  

BoxConstraints.loose(Size size)
  : minWidth = 0.0,
    maxWidth = size.width,
    minHeight = 0.0,
    maxHeight = size.height

BoxConstraints.tight(Size size)
  : minWidth = size.width,
    maxWidth = size.width,
    minHeight = size.height,
    maxHeight = size.height;

const BoxConstraints.tightFor({
  double width,
  double height,
}) : minWidth = width ?? 0.0,
     maxWidth = width ?? double.infinity,
     minHeight = height ?? 0.0,
     maxHeight = height ?? double.infinity;

const BoxConstraints.tightForFinite({
  double width = double.infinity,
  double height = double.infinity,
}) : minWidth = width != double.infinity ? width : 0.0,
     maxWidth = width != double.infinity ? width : double.infinity,
     minHeight = height != double.infinity ? height : 0.0,
     maxHeight = height != double.infinity ? height : double.infinity;
```

##### Size

```dart
const Size(double width, double height) : super(width, height);

Size.copy(Size source) : super(source.width, source.height);

const Size.fromHeight(double height) : super(double.infinity, height);

const Size.fromRadius(double radius) : super(radius * 2.0, radius * 2.0);

const Size.fromWidth(double width) : super(width, double.infinity);

const Size.square(double dimension) : super(dimension, dimension);
```

| 常量     | 用法          | 说明                                          |
| -------- | ------------- | --------------------------------------------- |
| infinite | Size.infinite | 等同于 Size(double.infinity, double.infinity) |
| zero     | Size.zero     | 等同于 Size(0.0，0.0)                         |



#### SizedBox

#### UnconstrainedBox

### 剪裁Clip

### 填充Padding

```dart
const Padding({
Key key,
@required EdgeInsetsGeometry padding,
Widget child
})
```

#### EdgeInsetsGeometry

 `EdgeInsetsGeometry`是一个抽象类，开发中一般都使用`EdgeInsets`类，它是`EdgeInsetsGeometry`的一个子类

```dart
const EdgeInsets.all(double value)
  : left = value,
    top = value,
    right = value,
    bottom = value;

const EdgeInsets.fromLTRB(this.left, this.top, this.right, this.bottom);
  
EdgeInsets.fromWindowPadding(ui.WindowPadding padding, double devicePixelRatio)
  : left = padding.left / devicePixelRatio,
    top = padding.top / devicePixelRatio,
    right = padding.right / devicePixelRatio,
    bottom = padding.bottom / devicePixelRatio;

const EdgeInsets.only({
  this.left = 0.0,
  this.top = 0.0,
  this.right = 0.0,
  this.bottom = 0.0,
});

const EdgeInsets.symmetric({
  double vertical = 0.0,
  double horizontal = 0.0,
}) : left = horizontal,
     top = vertical,
     right = horizontal,
     bottom = vertical;
```



## 基础组件

### 文本

### 按钮

### 图片

### 选择框

### 输入框

### 表单

### 进度条

## 滚动组件

### SingleChildScrollView

### ListView

### GridView

### CustomScrollView

### 滚动监听及控制



## 功能组件

## 事件

## 动画

## 自定义组件

## 文件操作

## 网络请求

## 插件