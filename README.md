

1. 项目初始化
  create-react-app  hll-design --template typescript
  cd hll-design
  npx -p @storybook/cli sb init --type react_scripts
  yarn storybook
  添加插件 yarn add @storybook/addon-a11y @storybook/addon-knobs @storybook/addon-storysource -D 修改.storybook中的main.js(配置文件)
  删除多余的文件 保留 setupTest(测试) react-app-env(编译使用)
  yan add styled-components @types/styled-components -D
  全局样式 normalize.css  https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css
  全局插件 preview文件(编译时先执行preview文件)

2. 使用PLOP 自动生成重复的代码
  https://plopjs.com/documentation/
  npx plop 输入 Button

3. mdx文件 
  csf component story format
  默认故事的书写(stories)就是csf 每个导出都会有个名字 和一些配置修饰器插件参数配置
  每个导出默认代表一个故事 安装了docs插件可以支持mdx语法 md+jsx
  mdx文件需要有一个meta标签

4. Button组件
