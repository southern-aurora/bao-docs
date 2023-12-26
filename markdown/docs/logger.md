---
title: Logger
---

# Logger

日志对应用线上产生的问题排查非常重要，虽然可以使用 `console` 打印日志，但我们可能会有更多的日志需求。比如，本地调试时，将日志打印在终端中，而在生产环境中，不在终端打印以节省性能，并将日志保存到文件中，或者，将日志发送到云服务商的日志系统中。

Bao 提供了一个日志记录器，可以帮助你解决这些问题。Bao 本身的日志，也是通过日志记录器来写入的。

## 使用

我们可以随时通过 `useLogger` 方法来创建一个日志记录器，它需要一个 `executeId`。

```ts
const logger = useLogger(context.executeId);
```

我们可以使用它写入任何等级的日志。看起来，它的用法和几乎 `console` 一样。略有不同的是，日志的第一个参数必须总是 `string` 格式，用于描述日志的信息，被称为 "日志描述"。第二个参数开始则允许传入任意类型的参数，它们被称为 "日志参数"。

```ts
logger.debug("Your Message", { hello: "world" });
```

### executeId

使用日志记录器需要传入 `executeId`，它来自你 Api 的 `context` 对象，它是唯一的。对于每个请求来说，都是不相同的。Bao 的日志记录器通过它们来区分不同的请求。

在较高并发的场景下，不同用户会在同一时间向你发送请求。这意味着，不同用户请求的日志将交替出现。当出现问题时，我们往往无法定位一条日志属于哪个请求，这为我们在生产环境中的除错带来了很大的困扰。因此，我们非常建议你传入 `executeId`。但是，在某些特殊场景下，你可能无法取到它。这个时候，你可以传入 `global`，日志记录器会向所有并发中的请求，同时写入这条日志。

```ts
const logger = useLogger("global");
```

## 完整例子

```ts{8-12}
// file: /src/app/api.ts

import { useLogger, defineApi } from "southern-aurora-bao";

export const helloWorld = defineApi({
  meta: {},
  action(params: {}, context) {
    const logger = useLogger(context.executeId);
    logger.debug("Hello world!");
    logger.log("Hello world!");
    logger.warn("Hello world!");
    logger.error("Hello world!");
  },
});
```

## 日志标签

除了打印日志之外，你还可以为一个请求打上日志标签。通过 `loggerPushTags` 方法，可以为某个请求添加若干自定义标签。

```ts
import { loggerPushTags } from "southern-aurora-bao";

loggerPushTags(executeId, { userInfo: ..., permissions: ... });
```

在以往的日志中，我们往往会把请求的所属用户信息、权限等数据直接输出到日志中，这会掩埋我们的关键信息。合理的使用标签，有助于让你的日志只有关键信息，变得更加易读。

## 默认的日志标签

|               Key | Value                           |
| ----------------: | ------------------------------- |
|            `from` | 来源 "http-server" \| "execute" |
|       `executeId` | 执行此请求的唯一 id             |
|          `method` | 请求方式                        |
|              `ip` | 请求发起者的 IP 地址            |
|             `url` | 请求地址                        |
|          `params` | 请求的参数 (Object)             |
|            `body` | 最终响应的数据 (Raw String)     |
|          `timein` | 接收到请求的时间 (Number)       |
|         `timeout` | 请求响应的时间 (Number)         |
|  `requestHeaders` | 请求头 (Object)                 |
| `responseHeaders` | 响应头 (Object)                 |

你不能认为这些内容总是存在的，例如，在一些极端情况，请求直接被终止时，可能 `body`、`params`、`responseHeaders` 等内容不会被添加。以及，当通过编写 `execute` 代码，而非发送 `HTTP` 请求的方式调用时，诸如 `ip` 等数据将会不存在，同时也会获得一些其他的值。

## 自定义日志记录器

你可以自由修改 `/src/logger.ts` 来自定义日志记录器的行为。默认情况下，正如代码编写所示，你的日志记录器会在控制台中直接显示你的日志。

```ts
// file: /src/logger.ts

import { type LoggerOptions, type ExecuteId } from "southern-aurora-bao";

export const loggerOptions = {
  onInsert: (options) => {
    // eslint-disable-next-line no-console
    console[options.loggerLevel](options.description, ...options.params);

    return true;
  },
  onSubmit: (tags, logs) => {
    // eslint-disable-next-line no-console
    console.log(`🧊 Bao Responsed! by :`, tags.url);
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(tags));
  },
} satisfies LoggerOptions;
```

### onInsert

`onInsert` 会在你每次使用日志记录器记录日志时被调用，它必须是一个同步的方法。你需要返回 `true` 或 `false`。当你返回 `false` 时，此日志将丢弃。例如，你可以通过返回 `false`，来实现生产环境中，不记录 `debug` 等级的日志的功能。

我们建议你，不要在此方法中将日志持久化保存 (如写入文件、发送到各种日志系统中)。每次请求可能会有大量的日志需要写入，这将导致极其频繁的 IO，会带来性能下降。

我们建议你在 `onSubmit` 方法中再将日志持久化保存，只在此方法中将日志输出在控制台中，并判断此条日志是否需要丢弃。

### onSubmit

`onSubmit` 会在一个请求即将结束时被调用，它可以是一个异步的方法或者返回 `Promise`。你可以在此阶段，将关于此请求的有关的日志持久化保存。

它的参数包含了当前请求所被打上的日志标签，以及日志。
