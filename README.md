## 简介
Element UI表单设计及代码生成器，可将生成的代码直接运行在基于Element的vue项目中；也可导出JSON表单，使用配套的解析器将JSON解析成真实的表单。 
- 【[国内预览地址](https://mrhj.gitee.io/form-generator)】 【[国际预览地址](https://jakhuang.github.io/form-generator)】
- 【[github仓库](https://github.com/JakHuang/form-generator)】 【 [码云仓库](https://gitee.com/mrhj/form-generator)】
- [配套vscode插件](https://github.com/JakHuang/form-generator-plugin)
- [配套JSON解析器](https://github.com/JakHuang/form-generator/blob/dev/src/components/parser/example/Index.vue)

## JSON解析器
将保存在数据库中的JSON表单，解析成真实的表单  
[查看在线示例](https://mrhj.gitee.io/form-generator/#/parser) 
```
// 安装
npm i form-gen-parser
```
[更多信息](https://github.com/JakHuang/form-generator/tree/dev/src/components/parser) 

## vscode插件
帮助使用element UI的开发者完成基本的表单代码搭建任务，减少重复的劳动。  
vscode-plugin分支配套插件为：[form-generator-plugin](https://github.com/JakHuang/form-generator-plugin)；  
使用插件可右键打开设计器，直接将代码保存到工程中。  
安装插件请在vscode中搜索：
>jakHuang   
或  
Form Generator Plugin
## 运行
- 确保已经安装node.js 10+
- 首次下载项目后，安装项目依赖：
```
yarn
```
或
```
npm install
```
- 本地开发
```
npm run dev
```
- 构建
```
npm run build
```
