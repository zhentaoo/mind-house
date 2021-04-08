# Linux 命令

## ln
软链接：
    ln -s ~/Code/Illidan Illida
    创建一个快捷方式(指针)，指向原地址


硬链接：
    ln -s ~/Code/Illidan Illidan

## netstat

netstat -an | grep 3306

3306 替换成需要 grep 的端口号

## lsof

通过 list open file 命令可以查看到当前打开文件，在 linux 中所有事物都是以文件形式存在，包括网络连接及硬件设备。
lsof -i:80

-i 参数表示网络链接，:80 指明端口号，该命令会同时列出 PID，方便 kill

## ps -ef grep node

ps -ef | grep java 查找 java 进程
root 9890 9846 0 14:36 pts/0 00:00:00 grep --color=auto java
kill -9 9890

http://www.cnblogs.com/peida/archive/2012/12/19/2824418.html

## rsync , rz

- 上传文件的服务
  - 安装：yum install lrzsz
  - 使用：rz
- 解压文件的服务

  - unzip

- 远程服务器同步文件：

  - rsync -avz www.conf xxx@www.xxx.com:/etc/nginx/conf.d

- 上传文件的服务
  - 安装：yum install lrzsz
  - 使用：rz

## chown

> chown: 修改文件的所有者

Linux/Unix 的档案存取权限分为三级 : 档案拥有者、群组、其他。利用 chmod 可以藉以控制档案如何被他人所存取。

chmod 777 file 和 chmod a=rwx file

777 -> rwxrwxrwx -> 该登录用户（可以用命令 id 查看）、他所在的组和其他人都有最高权限

效果相同
chmod ug=rwx,o=x file

将档案 file1.txt 的拥有者设为 users 群体的使用者 jessie :
chown jessie:users file1.txt

## find

查找目录：find /（查找范围） -name '查找关键字' -type d

查找文件：find /（查找范围） -name ‘查找关键字’ -print

查找文件的方法:
which nginx
locate nginx.conf

find:

查找目录：find /（查找范围） -name '查找关键字' -type d
查找文件：find /（查找范围） -name 查找关键字 -print

## Grep

> Linux 系统中 grep 命令是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹 配的行打印出来。grep 全称是 Global Regular Expression Print，表示全局正则表达式版本，它的使用权限是所有用户。

\$ grep ‘test’ d\*
显示所有以 d 开头的文件中包含 test 的行。

\$ grep ‘test’ aa bb cc
显示在 aa，bb，cc 文件中匹配 test 的行。

\$ grep ‘[a-z]\{5\}’ aa
显示所有包含每个字符串至少有 5 个连续小写字符的字符串的行。

\$ grep ‘w\(es\)t._\1′ aa
如果 west 被匹配，则 es 就被存储到内存中，并标记为 1，然后搜索任意个字符(._)，这些字符后面紧跟着 另外一个 es(\1)，找到就显示该行。如果用 egrep 或 grep -E，就不用”\”号进行转义，直接写成’w(es)t.\*\1′就可以了。

## tgz tar

.tar
解包：tar xvf FileName.tar
打包：tar cvf FileName.tar DirName

.tgz .tar.gz
解压：tar zxvf FileName.tar.gz

压缩：tar zcvf FileName.tar.gz DirName

.tar.xz 的解压方法：

xz -d mpfr-3.1.2.tar.xz
tar -xvf mpfr-3.1.2.tar

.zip 解压文件的服务  
unzip

## tail

tail -f /data/log/access.log

实时查看文件

## sed

sed 是一种在线编辑器，它一次处理一行内容。

处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用 sed 命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。

接着处理下一行，这样不断重复，直到文件末尾。

文件内容并没有 改变，除非你使用重定向存储输出。

Sed 主要用来自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等。

## 小知识 RC

rc：

- .babelrc .vimrc .bas
- rc -> runcom -> run command 运行

cli:

> 具有从档案中取出一系列命令来执行的功能
> command line interface 命令行工具
