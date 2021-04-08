# GIT

## Rebase

- Rebase 压缩 commit:
  - git rebase -i HEAD~4
  - 修改需要合并的 commit 为 squash
  - 保存退出 wq
  - git push -f

- Rebase 取代 Merge 合并：
  - git pull 拉取最新 master 到本地
  - feat/xx rebase master


## 查看Git配置
- 系统级别: cat /etc/gitconfig 
- 用户级别: cat ~/.gitconfig 
- 项目级别: cat .git/config

## Git用户设置
- 查看当前git用户配置
  - git config --list
  - git config user.name
  - git config user.email

- 设置全局用户
  - git config --global user.name "John Doe"
  - git config --global user.email johndoe@example.com
    
- 设置局部用户
  - cd ${reponame}/.git
  - git config user.anme "Jonh Doe"

## 修改远程源
- 查看源：git remote -v
- 添加源：git remote add [NAME] [GIT URL]
- 修改源：git remote set-url origin [GIT URL]
- 删除源：git remote remove [NAME]

## 小操作
- 只clone最新版本：git clone --depth=1