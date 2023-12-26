---
title: Config
---

# Config

我们经常需要存储各种配置，比如，与数据库的连接信息、各种秘钥。配置的获取渠道也各有不同，也许是硬编码，也许是 `.env.localhost` 文件，也许是环境变量。

## 编写

我们约定俗成，将配置写在 `/src/config` 目录中，此目录没有"魔法"。

我们约定俗成，配置文件导出一个以 `config` 开头的对象，就像这样：

```ts
// file: /src/config/example.ts

export const configExample = {
  hello: "world",
};
```

在其他任意位置，我们都可以通过直接导入这个对象，来读取配置。

## 读取环境变量

环境变量是一种常见的配置方式，但是环境变量没有类型，因此我们读取到的环境变量都是字符串。

Bao 提供了一些方法，来帮助你将环境变量字符串转为相应的类型。

```ts
// file: /src/config/example.ts

import { env } from "node:process";
import { envToBoolean, envToNumber, envToString } from "southern-aurora-bao";

export const configExample = {
  fooNumber: envToNumber(env.FOO, 9000),
  barBoolean: envToBoolean(env.BAR, false),
  BazString: envToString(env.BAZ, "hello-world"),
};
```

## 指定模式

默认情况下，Bun 会读取 `.env` 文件，假设你有多个环境，比如，在本地开发时使用一套环境变量，而在部署时，使用另一套，你可以通过指定模式，来使你在部署时，使用不同的文件名。

比如，你想要使用 `.env.production` 文件，你可以通过设置环境变量 `MODE` 的值为 `.env.production` 来实现。

除此以外，你也可以通过在执行命令时，指定 `--mode=.env.production` 来实现。

注意：如果你使用 [Prisma](https://www.prisma.io/)，由于 Prisma 不支持更改 `.env` 文件的名称，因此，你可能需要额外为 Prisma 设置环境变量。

## 读取 .env 文件

在 `v1.0.12` 之后版本的 Bun，已经实现了[自动读取环境变量的功能](https://bun.sh/docs/runtime/env#manually-specifying-env-files)。

如果你在使用旧版本的 Bun，同时又想要自动读取项目根目录下的 `.env` 文件，并将其注入到 `process.env` 中，可以在你的 `/index.ts` 顶部添加如下代码：

```ts
import "southern-aurora-bao/load-env-file";
```

在 Bao 的 `.env` 文件中，不会对内容进行任何形式的转义，因此，你始终不需要为 `.env` 文件中的内容添加引号。
