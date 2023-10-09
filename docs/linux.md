## 基础命令
-  shutdown 关机
```bash
    # 立即关机
    shutdown -h now

    # 20:25分关机
    shutdown -h 20:25

    # 10分钟后关机
    shutdown -h +10

    # 立即关机重启
    shutdown -r now

    # 30分钟后重启，并显示提示信息给所有在线的使用者
    shutdown -r +30 "提示信息"

    # 发出警告信息，并不会关机
    shutdown -k now "提示信息"
```
-  reboot/halt/poweroff 重启
-  sync：数据同步写入磁盘
-  date 日期
-  locale 语言
-  bc 计算器
-  cal 日历


## 文件权限
- /etc/passwd: 用于存放账号信息
- /etc/shadow: 用于记录个人秘密
- /etc/group: 用于记录组名
### 权限说明
```bash
    # 权限      链接数量  拥有者账号   群组名   文件大小  最近修改日期     文件名称
    drwxr-x---     3       root      root    4096    Sep 21 19:01   wx-web/
    -rw-------     1      ubuntu    ubuntu   3428    Sep 27 10:35  .bash_history
```
> `rwx`所在位置不会改变，有该权限就会显示字符，没有该权限就变成-，`r`表示可读，`w`表示可写，`x`表示可执行，没有`x`不能进入或运行对应文件，`r`:4, `w`:2,  `x`:1

- 第一个字符表示档案类型
    + `d` 表示目录
    + `-` 表示文件
    + `l` 表示连结档
    + `b` 表示为装置文件里面的可供存储的接口设备
    + `c` 表示为装置文件里面的串行端口设备

- 第`二`个字符到第`四`个字符表示`文件拥有者`权限
- 第`五`个字符到第`七`个字符表示`群组账号`权限
- 第`八`个字符到到第`十`个字符表示`非群组账号`权限

### 修改文件属性和权限
- chgrp: 改变文件所属群组
- chown: 改变文件拥有者
- chmod: 改变文件的权限
```bash
# 指令   群组   需要修改的文件名
 chgrp  users  filename

# 指令  拥有者:群组  需要修改的文件名 
 chown root:root   filename
# 指令  拥有者  需要修改的文件名 
 chown root   filename

# 指令   .群组  需要修改的文件名 
 chown  .root  filename

# 指令   权限  文件
 chmod  777   filename
# 指令   权限(u表示拥有者，g表示群组，o表示其他成员)      文件
 chmod    u=rwx,go=rx                           filename
# 指令   权限(a表示所有，+表示加入，-表示移除，=表示设定)  文件
 chmod   a+w                                     filename
 chmod   u-w                                     filename
 chmod   o=x                                     filename
```
> `chown`可以同时修改`拥有者`和`群组`,也可以只修改其中的一个

### 文件种类与扩展名
#### 种类
+ `d` 表示目录
+ `-` 表示文件
+ `l` 表示连结档
+ `b` 表示为装置文件里面的可供存储的接口设备
+ `c` 表示为装置文件里面的串行端口设备
+ `s` 资料接口文件，socket
+ `p` 数据输送文件

#### 扩展名
没有所谓的扩展名，文件能不能执行只与`x`权限有关。为了一眼识别出类型才使用了扩展名。常用扩展名如下：
- *.sh: 脚本或批处理文件
- *Z, *.tar, *.tar.gz, *.zip, *.tgz: 经过打包的压缩文件
- *.html, *.php: 网页相关文件

### 文件操作
- 复制
```bash 
# 指令 操作 需要复制的文件   复制目的地
  cp      sourcefile     targetfile
  cp  -s  sourcefile     targetfile  
  cp  -l  sourcefile     targetfile
  cp  -u  sourcefile     targetfile
  cp  -r  sourcefile     targetfile
  cp  -a  sourcefile     targetfile
  cp  -p  sourcefile     targetfile
```
> `-s`是`符号链接`(快捷方式),`-l`是实体链接, `-u`表示目录文件与原文件有差异时才复制，`-r`递归持续复制，`-p`表示连同文件的属性一起复制

- 移除
```bash
# 指令  操作   文件/目录
   rm         filename
   rm   -i    filename
   rm   -r    targetname
   rmdir      targetname
```
> `-i`会二次确认，`-r`表示递归删除, `-f`表示强制删除

- 移动
```bash
# 指令  原文件        目的地文件
  mv   sourcefile   targetfile 

# 将 /temp/test文件移动到/demo目录下，移动后名称为test1
  mv   /temp/test   /demo/test1

# 将 /temp/test 移动到 /demo/目录下，文件名不变
  mv   /temp/test   /demo/
```
> `mv`命令也可以用来修改文件名称；当移动到地址结尾带有`/`时，表示将文件移动到该目录下；结尾不带`/`时，表示移动后的文件名

- 文件查阅
    + `cat`: 从第一行开始显示文件内容
    + `tac`: 从最后一眼开始显示文件内容
    + `nl`: 显示内容的时候也输出行号
    + `more`: 一页一页的显示文件内容
    + `less`: 与`more`类似，但可往前翻页
    + `head`: 只看头几行
    + `tail`: 只看结尾几行
    + `od`: 以二进制的方式读取文件内容

- 新建文件
```bash
   # touch [-acdmt] 文件 
   # -a 仅修改文件的access time
   # -c 仅修改文件的时间，若该文件不存在则不建立新文件
   # -d 欲修订的日期, 也可以使用 --date="日期或时间"
   # -m 仅修改mtime
   # -t 欲修订的时间，格式为[YYYYMMDDhhmm]  
```

### 文件默认权限与隐藏权限
- 文件预设权限 umask
```bash
    # 设置默认权限
    umask 003   # -rw-rw-r--

    # 查看默认权限
    umask   # 003

    umask -S   # u=rwx,g=rx,o=

```
> `umask`设置的是需要移除的权限，和`chmod`设置的分值正好相反

- 文件隐藏属性
```bash
# chattr [+-=][ASacdistu] 文件或目录名称
# + 增加某一个特殊参数
# - 移除某一个特殊参数
# = 设定
# A 设定该属性，文件的atime不会被修改
# S 设定该属性，文件进行任何修改时，同步写入磁盘
# a 设定该属性，文件将只能增加数据，不能删除或修改数据
# c 设定该属性，将自动压缩文件或解压缩文件
# d 当dump程序被执行时，可使该文件或目录不会被dump备份
# i 文件不能被删除、改名、设定连接也无法写入或新增数据，只能root能设定此属性
# s 设定该属性，文件如果被删除，将会被完成移除出硬盘空间
# u 与s相反，文件被删除了，数据内容其实还存在磁盘中
```
> `a`和`i`设定值必须`root`才能设定

```bash
# lsattr [-adR] 文件或目录
# -a 将隐藏文件的属性也展示出来
# -d 如果是目录，仅列出目录本身的属性而非目录内的文件名
# -R 连同目录的数据也一并列出来
```
