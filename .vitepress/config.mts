import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/bao-docs/",
  title: "Bao Docs",
  description: "A human-centered Bun framework, developing APIs is now easy enough!",
  outDir: "./docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [{ icon: "github", link: "https://github.com/southern-aurora/bao" }],
    nav: [
      {
        text: `
          <span class="lang-en">Sponsors</span>
          <span class="lang-zh">支持者们</span>
        `,
        link: "/SUPPORT",
      },
    ],
    sidebar: [
      {
        text: `
          <span class="lang-en">Index</span>
          <span class="lang-zh">首页</span>
        `,
        items: [
          {
            text: `
              <span class="lang-en">Introduction</span>
              <span class="lang-zh">介绍</span>
            `,
            link: "/",
          },
        ],
      },
      {
        text: `
          <span class="lang-en">Overview</span>
          <span class="lang-zh">概述</span>
        `,
        items: [
          {
            text: `
              <span class="lang-en">Install</span>
              <span class="lang-zh">安装</span>
            `,
            link: "/markdown/docs/install",
          },
          {
            text: `
              <span class="lang-en">GenerationPhase</span>
              <span class="lang-zh">生成阶段</span>
            `,
            link: "/markdown/docs/generation-phase",
          },
        ],
      },
      {
        text: `
          <span class="lang-en">Abilities</span>
          <span class="lang-zh">能力</span>
        `,
        items: [
          {
            text: `
              <span class="lang-en">Router</span>
              <span class="lang-zh">Router 路由</span>
            `,
            link: "/markdown/docs/router",
          },
          {
            text: `
              <span class="lang-en">Api</span>
              <span class="lang-zh">Api 接口</span>
            `,
            link: "/markdown/docs/api",
          },
          {
            text: `
              <span class="lang-en">Middleware</span>
              <span class="lang-zh">Middleware 中间件</span>
            `,
            link: "/markdown/docs/middleware",
          },
          {
            text: `
              <span class="lang-en">Bootstrap</span>
              <span class="lang-zh">Bootstrap 启动项</span>
            `,
            link: "/markdown/docs/bootstrap",
          },
          {
            text: `
              <span class="lang-en">Use</span>
              <span class="lang-zh">Use 使用</span>
            `,
            link: "/markdown/docs/use",
          },
          {
            text: `
              <span class="lang-en">Meta</span>
              <span class="lang-zh">Meta 元数据</span>
            `,
            link: "/markdown/docs/meta",
          },
          {
            text: `
              <span class="lang-en">Context</span>
              <span class="lang-zh">Context 上下文</span>
            `,
            link: "/markdown/docs/context",
          },
          {
            text: `
              <span class="lang-en">Config</span>
              <span class="lang-zh">Config 配置</span>
            `,
            link: "/markdown/docs/config",
          },
          {
            text: `
              <span class="lang-en">ConfigFramework</span>
              <span class="lang-zh">ConfigFramework 框架配置</span>
            `,
            link: "/markdown/docs/config-framework",
          },
          {
            text: `
              <span class="lang-en">Cache</span>
              <span class="lang-zh">Cache 缓存</span>
            `,
            link: "/markdown/docs/cache",
          },
          {
            text: `
              <span class="lang-en">CacheResult</span>
              <span class="lang-zh">CacheResult 结果缓存</span>
            `,
            link: "/markdown/docs/cache-result",
          },
          {
            text: `
              <span class="lang-en">Logger</span>
              <span class="lang-zh">Logger 日志</span>
            `,
            link: "/markdown/docs/logger",
          },
          {
            text: `
              <span class="lang-en">Database</span>
              <span class="lang-zh">Database 数据库</span>
            `,
            link: "/markdown/docs/database",
          },
          {
            text: `
              <span class="lang-en">FailureHandling</span>
              <span class="lang-zh">FailureHandling 失败处理</span>
            `,
            link: "/markdown/docs/fail-handling",
          },
          {
            text: `
              <span class="lang-en">Client</span>
              <span class="lang-zh">Client 客户端</span>
            `,
            link: "/markdown/docs/client",
          },
          {
            text: `
              <span class="lang-en">Test</span>
              <span class="lang-zh">Test 测试</span>
            `,
            link: "/markdown/docs/test",
          },
        ],
      },
      {
        text: `
          <span class="lang-en">Recipes</span>
          <span class="lang-zh">食谱</span>
        `,
        items: [
          { text: "Prisma", link: "/markdown/recipes/prisma" },
          { text: "MikrORM", link: "/markdown/recipes/mikro-orm" },
        ],
      },
      {
        text: `
          <span class="lang-en">Document</span>
          <span class="lang-zh">文档</span>
        `,
        items: [
          //
          {
            text: `
              <span class="lang-en">Contribution</span>
              <span class="lang-zh">贡献</span>
            `,
            link: "/README",
          },
        ],
      },
    ],
    aside: false,
    search: {
      provider: "local",
    },
  },
});
