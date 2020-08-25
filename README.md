[![Coverage Status](https://coveralls.io/repos/github/Lliuxs/hll-react-ui/badge.svg?branch=master)](https://coveralls.io/github/Lliuxs/hll-react-ui?branch=master)

### 文档地址
https://lliuxs.github.io/hll-react-ui/

1. 项目初始化
  - create-react-app  hll-design --template typescript
  - cd hll-design
  - npx -p @storybook/cli sb init --type react_scripts
  - yarn storybook
  - 添加插件 yarn add @storybook/addon-a11y @storybook/addon-knobs @storybook/- addon-storysource -D 修改.storybook中的main.js(配置文件)
  - 删除多余的文件 保留 setupTest(测试) react-app-env(编译使用)
  - yan add styled-components @types/styled-components -D
  - 全局样式 normalize.css  https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css
  - 全局插件 preview文件(编译时先执行preview文件)

2. 使用PLOP 自动生成重复的代码
  - https://plopjs.com/documentation/
  - npx plop 输入 Button

3. mdx文件
  - csf component story format
  - 默认故事的书写(stories)就是csf 每个导出都会有个名字 和一些配置修饰器插件参数配置
  - 每个导出默认代表一个故事 安装了docs插件可以支持mdx语法 md+jsx
  - mdx文件需要有一个meta标签

4. Button组件
  - 颜色 大小 loading状态 type disabled href(a标签)
  - 样式 ui库主要就是样式库的编写

5. 测试
  - npm run test 快照测试storyShots插件
  - fireEvent 提示找不到
    1. 重装 @testing-library/react 
    2. 或者引入import { fireEvent } from "@testing-library/dom" 声明declare module '@testing-library/dom'
  - 测试覆盖率
    - npm run coverage 详细信息 npx http-server ./coverage
    - https://coveralls.io/
      1. 选择github项目
      2. 进入详请找到token
      3. 在项目的secrets中设置COVERALLS_REPO_TOKEN
      4. 安装coveralls yarn add coveralls 添加script脚本 
      5. 添加yml action
      6. 在readme中添加embed

6. 发布npm包
    - tsconfig.build.json作为输出配置文件
    - npm publish
    - github package发包 作用域 + 包名
      1. https://github.com/settings/tokens 生成token保存起来 name和包名一致
      2. 设置registry"https://npm.pkg.github.com/@Lliuxs"
      3. 登录 npm login --registry=https://npm.pkg.github.com --scope=@Lliuxs
        username为github用户名 password为生成的token
      4. npm publish 主要github的项目名
      5. 在github上搜索包名

7. github action 持续集成
  - http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html
  - storybook可以生成静态页面 增加脚本 "build-storybook": "build-storybook --no-dll --quiet"
  1. 在github项目的设置中的Secret中添加name为ACCESS_TOKEN值为生成的token
  2. 添加Actions 创建yml文件
  3. git pull git push 会自动部署github page页面


8. 代码因子
  - https://www.codefactor.io/ 
  - import需要检测的仓库


9. 使用 patch-package 修改第三方模块
  - yarn add --dev patch-package postinstall-postinstall
  - 在项目根目录下的 node_modules 文件夹中找到要修改依赖包的相关文件 修改，然后回到根目录执行 yarn patch-package package-name
  - 打补丁yarn patch-package
  - 部署 "postinstall": "patch-package"

10. 添加sponsor按钮

11. 使用np发布
  