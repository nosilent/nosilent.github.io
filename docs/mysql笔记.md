```mysql
//启动服务
net start mysql

//修改root登录密码
mysqladmin -uroot -p password 123

//登录服务
mysql -u root -p

//数据库列表
SHOW DATABASES;

//选择要操作的Mysql数据库
USE 数据库名;

//创建数据库
CREATE DATABASE 数据库名;
//删除数据库
drop database <数据库名>;

//显示数据库中的数据表
show tables;

//显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息
SHOW COLUMNS FROM 数据表;

//创建数据表
CREATE TABLE table_name (column_name column_type);
//删除数据表
DROP TABLE table_name ;

//插入数据
INSERT INTO table_name ( field1, field2,...fieldN )  VALUES ( value1, value2,...valueN );

//查询数据
SELECT column_name,column_name FROM table_name [WHERE Clause] [LIMIT N][ OFFSET M]；
//like 匹配/模糊匹配， %表示多个，_表示一个，用 AND 或者 OR 指定一个或多个条件
SELECT field FROM table_name WHERE field LIKE condition1 [AND [OR]] filed2 ='somevalue'；

SELECT * from runoob_tbl  WHERE field1 LIKE '%COM';


//更新数据
UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]；

//删除数据
DELETE FROM table_name [WHERE Clause]；

// 排序,ORDER BY 子句将查询数据排序后再返回数据,ASC升序，DESC降序
SELECT field1, field2,...fieldN table_name1, table_name2...
ORDER BY field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]

//数据分组， GROUP BY 语句 将数据表按field进行分组
SELECT name, COUNT(*) FROM   table_name GROUP BY field;


//表连接
// 1. INNER JOIN, 获取两个表中字段匹配关系的记录
SELECT 别名1.field1, 别名1.field2, 别名2.field1 FROM table_name1 别名1 INNER JOIN table_name2 别名2 ON 别名1.field3 = 别名2.field3;
等价于=>
SELECT 别名1.field1, 别名1.field2, 别名2.field1 FROM table_name1 别名1, table_name2 别名2 WHERE 别名1.field3 = 别名2.field3;

// 2. LEFT JOIN ,会读取左边数据表的全部数据，即便右边表无对应数据
SELECT 别名1.field1, 别名1.field2, 别名2.field1 FROM table_name1 别名1(左表) LEFT JOIN table_name2 别名2（右表） ON 别名1.field3 = 别名2.field3;

// 3. RIGHT JOIN 会读取右边数据表的全部数据，即便左边边表无对应数据。
SELECT 别名1.field1, 别名1.field2, 别名2.field1 FROM table_name1 别名1(左表) RIGHT JOIN table_name2 别名2（右表） ON 别名1.field3 = 别名2.field3;
```

