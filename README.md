# ssr 与 微前端 的结合

[ssr文档](http://doc.ssr-fc.com/)

[micro-app文档](https://zeroing.jd.com/micro-app/)

目前为 `Beta` 状态，发现问题请及时在[ssr](https://github.com/ykfe/ssr/issues) 反馈

```bash
$ yarn && yarn run init && yarn dev
$ open http://localhost:8080
```

项目提供了两个 demo，分别是 `main` 和 `main-ssr`，分别代表主应用为普通的 vue 但页面应用和主应用使用 ssr 框架的场景。

open http://localhost:8080/main/children/ when you run `npm run dev`
open http://127.0.0.1:3001/main/children/ when you run `npm run dev:ssr`

## 用法分析

这里我们为了贴近真实的线上应用需要用微前端的情况设计了这个初始 `Demo`, 这里讨论的是主应用与子应用部署在相同域名的情况，如果是非相同域名，则处理起来更加的简单。

在真正的业务架构中，主应用与子应用是独立的两个应用。我们通常会在网关层将不同的 `path` 分发到不同的应用。

例如 `myhost.com/main` 转发到主应用，`myhost.com/children` 转发到子应用。此时我们需要在主应用中加载子应用。

首先我们在主应用中分配一个 `path` 专门用来承接子应用。这里分配的是 `/children/*`

当我们访问 `myhost.com/main/children` 的时候，在主应用的 `children` 组件中嵌入 `micro app` 的标签，标签链接指向子应用的真实路径 `myhost.com/children`

此时子应用需要做两件事情

- 服务端使用原始的请求 `path` 加上默认的路由前缀 `prefix=/children` 找到正确的组件进行服务端渲染
- 客户端阶段，由于此时我们当前在主应用当前 `url` 真实的路径是 `/main/children`, 所以这里设置 `clientPrefix=/main/children` 使得子应用可以在客户端阶段找到正确的组件进行渲染
