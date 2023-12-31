---
title: Generation Phase
---

# 生成阶段

Bao 在启动前，会进入生成阶段。

生成阶段是完成你创建一个文件后，无需编写代码就可以直接访问的"魔法"的来源。当你创建了新的 Api 或修改了 Api 所需的参数后，需要重新运行 Bao，来重新执行生成阶段来更新你的更改。而当你修改了代码逻辑时，得益于 Bun 的热更新功能，你无需重启 Bao，即可直接看到修改后的效果。

## 细节

具体而言，生成阶段会完成以下几件事：

- 递归扫描你的 `/src/app` 目录，并将你的 Api 的路由，生成在 `/generate/api-schema.ts` 文件中。每次有新的请求时，会尝试从这个文件中匹配所对应的 Api 并执行。

- 单层扫描你的 `/src/bootstrap` 目录，并将你的 Bootstrap 的概要，生成在 `/generate/bootstrap-schema.ts` 文件中。每次 Bao 启动时，会尝试执行你所有的 Bootstrap 中的代码。

- 将你所有的的 Api 的所有的 params 的校验代码，生成在 `/generate/products/api-params.ts` 文件中。由它来保障，你的 Api 参数的类型安全与数据校验。

- 重新构建客户端，将你位于 `/package/client` 目录中的客户端，使用最新的生成数据进行重新构建。此时，对于使用此包的前端工程，无需重新构建，即可直接使用最新的客户端。
