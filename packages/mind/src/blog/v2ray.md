# V2Ray

一般程序员都有正确上网的诉求，所以这边直接看相关文档

注意：如果使用阿里云的海外服务器
1. 阿里云的安全组端口要开启
2. 客户端可能需要更新

## 介绍文档
[https://github.com/233boy/v2ray/wiki/安装](https://github.com/233boy/v2ray/wiki/V2Ray%E6%90%AD%E5%BB%BA%E8%AF%A6%E7%BB%86%E5%9B%BE%E6%96%87%E6%95%99%E7%A8%8B)


## 服务端命令
bash <(curl -s -L https://git.io/v2ray.sh)

## 客户端配置
- 客户端下载地址：https://github.com/233boy/v2ray/wiki/V2RayN%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B
- 在服务端使用命令: v2ray qr，生成客户端配置链接
- 把服务端生成的配置链接填入客户端


## v2ray管理
``` bash
systemctl start v2ray
systemctl stop v2ray
systemctl status v2ray
systemctl restart v2ray

systemctl stop v2ray
systemctl disable v2ray

rm -rf /etc/v2ray
rm -rf /usr/bin/v2ray
rm -rf /var/log/v2ray
rm -rf /lib/systemd/system/v2ray.service
rm -rf /etc/init.d/v2ray


bash <(curl -s -L https://git.io/v2ray.sh)

v2ray url
v2ray info 查看 V2Ray 配置信息
v2ray config 修改 V2Ray 配置
v2ray link 生成 V2Ray 配置文件链接
v2ray infolink 生成 V2Ray 配置信息链接
v2ray qr 生成 V2Ray 配置二维码链接
v2ray ss 修改 Shadowsocks 配置
v2ray ssinfo 查看 Shadowsocks 配置信息
v2ray ssqr 生成 Shadowsocks 配置二维码链接
v2ray status 查看 V2Ray 运行状态
v2ray start 启动 V2Ray
v2ray stop 停止 V2Ray
v2ray restart 重启 V2Ray
v2ray log 查看 V2Ray 运行日志
v2ray update 更新 V2Ray
v2ray update.sh 更新 V2Ray 管理脚本
v2ray uninstall 卸载 V2Ray
```