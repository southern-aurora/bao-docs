---
title: CacheResult
---

# 结果缓存

将一个方法的结果缓存一段时间。下次调用时，将优先从缓存中获取。

当应用遇到较高的并发时，结果缓存功能可以有效帮助我们缓解数据库的压力，或者避免重复执行一些耗时的运算，提高你的应用的整体吞吐量。

## 配置

请确保你已经配置好了 Redis，可以参见上一个缓存章节来了解。

## 逻辑

使用 `defineResultCache` 方法来定义一个结果缓存，你需要传递的参数中，会包含一个方法。你需要在此方法中编写你需要缓存的运算。

当代码执行到 `defineResultCache` 时，当缓存未过期时，会从缓存中读取结果。如果过期，则会运行你的方法获取结果，同时，将结果重新缓存起来。

为了缓解遭遇缓存雪崩的概率，你需要设置两个过期的秒数，分别是 `TTL` 和 `realTTL`。

当 `TTL` 未过期时，处于正常缓存阶段，此时，所有的结果都来自于缓存。

当 `TTL` 过期后，此时处于缓存过期阶段，此时，Bao 会允许 1 个请求去重新运算你的结果，并进入重新计算阶段。

在重新运算阶段期间，其他请求会获取到的是原先的旧数据缓存，直到重新运算阶段结束，回归正常缓存阶段，并更新了缓存。

重新运算阶段可能会失败，导致回归缓存过期阶段。此时，下一个请求到达时，会重新进入重新运算阶段。重新运算阶段在默认情况下持续 6 秒，如果超过了 6 秒未成功，则认为重新运算失败。可通过 `options.realGetInterval` 来修改这个超时时间。

当 `TTL + realTTL` 也同样过期后，缓存的结果，将会从缓存中彻底删除。

## 示例

```ts
const result = defineResultCache("your-key", 60, 60, async () => {
  const now = new Date().getTime();
  await new Promise((resolve) => setTimeout(resolve, 1000)); // sleep for 1 second
  return now;
});
```

## 参数

- `key: string`: 缓存的键

- `TTL: number`: 缓存过期的秒数

- `realTTL: number`: 缓存过期后，距离真实删除缓存的秒数

- `fn: Function`: 要缓存的方法

- `options: { realGetInterval?: number; }`: 选项
