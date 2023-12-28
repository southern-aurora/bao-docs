# Router 路由

路由，用于根据路径决定所具体执行的 Api。

在 [Install](/markdown/docs/install.md) 章节中，你可能已经体验到了路由的"魔法"。在 Bao 中，路由几乎是不用你来亲自编写的。Bao 会自动寻找在 `/src/app` 目录下名为 `api.ts` 的文件，并为你自动生成路由。它的生成规则，就像下面这样：

```ts
toHyphen(你的路径 + "/" + 方法名);
```

假设，你编写了一个 [Api](/markdown/docs/api.md) 文件，其中，有一个 `helloWorld` 的方法，路径为：

```
/src/app/foo/bar/api.ts
```

此时，只要访问 `http://localhost:9000/foo/bar/hello-world` 即可执行这个 Api。

## 补充路由逻辑

几乎所有的情况，你都应该使用 Bao 为你自动生成的路由。只有在特殊情况下，你才必须要自定义你的路由。此时，你可以编辑你的 `/src/router.ts` 文件。它的内容看起来像这样：

```ts
import type ApiParams from "../generate/products/api-params";

export const routerHandler = async (path: string, fullurl: URL): Promise<false | keyof (typeof ApiParams)["params"]> => {
  // ...
  return false;
};
```

你可以编辑这个方法的内容，来补充除了 Bao 自动为你生成的路由之外的，你期望的路由匹配逻辑。你可以 `return` 一个已存在的 Api 地址，它将被调用。如果你 `return false`，则会返回 `not-found` 的失败信息。

同时，它接受两个参数，`path` 和 `fullurl`。`path` 代表请求的路径后缀（删除了前面的域名和 [忽略的路径层级](/markdown/docs/config-framework.md#ignorepathlevel)），出于性能考虑，如果访问的 URL 中携带了 Parameters，则不会被删除，依旧保留在 `path` 中，像 `foo/bar?hello=world` 这样。`fullurl` 则是完整的 URL 对象，[忽略的路径层级](/markdown/docs/config-framework.md#ignorepathlevel) 不会被删除。

注意，这个方法的优先级永远比 Bao 为你自动生成的路由的优先级低，这意味着你不能做到禁止某个 Api 被访问。这么设计是为了保证你尽量只在这里编写路由匹配的规则，如果你需要完成某种授权才能访问某个 Api，请使用 [中间件](/markdown/docs/middleware.md) 功能。如果你需要禁止一个 Api 本身被直接调用，而通过此处编写的匹配规则可以间接访问，请在 Api 本身的代码中编写判断逻辑，并在合适的地方使其失败并返回 `not-found`。

```ts
throw defineFail("not-found", undefined);
```
