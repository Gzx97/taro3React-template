# 皮带管家--小程序端

这个项目使用 Taro3 + Taro-ui + TypeScript 

- [图表库使用 taro-react-echarts](https://taro-ext.jd.com/plugin/view/62d610ef53a8a975043e7f2c)

## 快速开始

```bash
# 安装依赖
$ yarn
# 运行
$ yarn dev:weapp
# 打包
$ yarn build:weapp
```

## 注意


1. 页面分享设置

```
  useShareAppMessage(() => {
    // 使用时，必须为页面配置 enableShareAppMessage: true。（修改配置文件后请重新编译项目）
    return {
      path: SHARE.SHARE_PATH,
      title: SHARE.SHARE_Title,
      imageUrl: SHARE.SHARE_URL
    }
  })

```
## 相关资源一览

- [相关功能文档地址](https://...)
- [接口文档地址](http://...)
- [设计稿-移动端](https://...)

## 约定

1. 命名风格

- hooks：`camelCase` 风格，并以 `use` 开头。例如： `useGetGlobalConfig`
- 常量： `SCREAMINGSNAKE_CASE` 风格。例如：`DATE_FORMAT`

1. 注释请遵循 [JSDoc](https://jsdoc.app/) | [中文文档](http://shouce.jb51.net/jsdoc/index.html)

## 开发流程

功能开发或修复请切到相关分支，然后提 Pull Request 到 dev 分支。

### 分支名格式

#### 功能开发

feat/版本/功能名（或任务 ID）

```
feat/gzx/xxx
```

#### 修复 bug

fix/bug 号（或 bug 内容）

```
fix/xxx
```

### 检出分支

你可以执行下面的命令检出一个分支

```
git checkout -B feat/xxx
```

### 其他

1. 请使用 `git cz` 或者 `gcz` 提交代码。本项目遵循 [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog) 提交规范。示例：

```
# 修复bug fix: bug内容
fix: 修复了一个致命的bug
# feature feat: 任务内容
feat: 增加了一个新功能
```
