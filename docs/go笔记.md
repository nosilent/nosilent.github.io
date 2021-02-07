## flag包使用

### 获取命令行参数

1. 定义

2. 解析

```go
//第一种
func main(){
    //1. 使用flag.String函数定义一个命令行参数"one",默认值为"default",描述为"one value"
    one := flag.String("one","default","one value")
    //2. 使用flag.Parse函数转化
    flag.Parse()
    flag.Usage()  //显示参数信息  -one 参数类型  描述
    fmt.Println(*one)
}

//第二种
func mian(){
	var one string
    
    flag.StringVar(&one,"one","default","one value")
    flag.Parse()
    fmt.Println(one)
}
```

### 模拟文件拷贝

```go
var force, show bool

func mycopy(src, targetName string) {
	fmt.Println(src, targetName)
	file, err := os.Open(src)
	if err != nil {
		fmt.Println("err1", err)
		return
	}
	defer file.Close()

	_, err2 := os.Stat(targetName)
	if err2 != nil {
		file2, _ := os.Create(targetName)
		io.Copy(file2, file)
		return
	}

	if !force {
		fmt.Printf("%v文件已存在, 是否覆盖？y/n\n", targetName)
		read := bufio.NewReader(os.Stdin)
		data, _, _ := read.ReadLine()
		if data[0] != 'y' {
			return
		}
		file2, _ := os.Create(targetName)
		io.Copy(file2, file)
	}

}
func main() {
	flag.BoolVar(&force, "f", false, "是否强制执行操作")
	flag.BoolVar(&show, "show", false, "是否显示复制路径")
	flag.Parse()
	if flag.NArg() < 2 {
		flag.Usage()
		return
	}
	mycopy(flag.Arg(0), flag.Arg(1))
}
```



