使用教程：

1. 安装 nodeJS 软件

2. cmd 进入项目目录，执行命令：

```sh
npm install
```

3. 前往 goEasy 网站申请免费的 key (https://www.goeasy.io/)

注册（登录）账号后，进入 我的应用 页面

点击：创建新的应用

填写信息如下：

应用名称：随意
区域：华东（杭州）
应用类型：基础型
套餐选择：免费类型

4. 申请免费应用后，复制 Common key 的值

5. 打开 src/config.js，填写至对应位置

6. cmd 进入项目目录，执行命令：

```sh
npm run build
```

7. 将生成的dist目录上传至服务器