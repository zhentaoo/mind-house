# Mysql

## 安装

1. 下载 mysql 5.7 + sequel-pro【迅雷下载比较快】

   - server: https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-5.7.29-macos10.14-x86_64.dmg
   - client: https://github.com/sequelpro/sequelpro/releases/download/release-1.1.2/sequel-pro-1.1.2.dmg

2. 双击安装

   - 下一步下一步下一步下一步
   - 首次安装 mysql 会提供默认密码，一定要记录 mysql 分配的初始密码。

3. 添加环境变量：

   - vim .zshrc
   - alias mysql=/usr/local/mysql/bin/mysql
   - source .zshrc

4. 初次部署修改密码

   - mysql -uroot -p
   - SET PASSWORD FOR 'root'@'localhost' = PASSWORD('aaa123456');

5. 如果 sql 不生效：可能是 sql mode 的问题，
   参考：https://www.jianshu.com/p/500e2397c15b

## 卸载

```shell
sudo rm /usr/local/mysql
sudo rm -rf /usr/local/mysql*
sudo rm -rf /Library/StartupItems/MySQLCOM
sudo rm -rf /Library/PreferencePanes/My*
rm -rf ~/Library/PreferencePanes/My*
sudo rm -rf /Library/Receipts/mysql*
sudo rm -rf /Library/Receipts/MySQL*
sudo rm -rf /var/db/receipts/com.mysql.*
```

## 常用 SQL

```sql
-- 建表
CREATE TABLE `db_odeer_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `env` varchar(20) DEFAULT NULL COMMENT '系统环境',
  `user_name` varchar(50) NOT NULL COMMENT '用户名',
  `user_mail` varchar(50) DEFAULT NULL COMMENT '用户邮箱',
  `user_info` text COMMENT '用户信息',
  `fe_route` varchar(200) DEFAULT NULL COMMENT '前端路由',
  `api_route` varchar(200) DEFAULT NULL COMMENT '接口路由',
  `page_name` varchar(100) NOT NULL COMMENT '功能名、页面名',
  `request_all_info` text COMMENT '所有请求信息',
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `update_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `system` varchar(50) DEFAULT NULL COMMENT '系统',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70743 DEFAULT CHARSET=utf8mb4 COMMENT='Node层';

-- 删表
DROP TABLE db_odeer_map;

-- 插入记录
INSERT INTO `db_odeer_map`(name, age, sex) VALUES ('xiaoa','18', '1');

-- 查询记录
SELECT * FROM `db_odeer_map`

-- 更新记录
UPDATE db_odeer_map SET status= 3, auditor = '算法审核' WHERE id = 1;

-- 删除记录
DELETE FROM db_odeer_map WHERE user_id=3;

-- 聚合
SELECT
    page_name,
    GROUP_CONCAT(DISTINCT user_name, '-', user_mail) as user_name,
    count(page_name) as num,
FROM
    db_odeer_map
where
    env = '${env}'
    and create_time > '${startTime}'
GROUP BY
    page_name DESC,
    user_name
ORDER BY
    num DESC
