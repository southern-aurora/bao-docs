# Bao 文档

# Bao Docs

欢迎来到 Bao Docs 仓库，这里是 Bao 的文档站点的源代码。

Welcome to the Bao Docs repository, this is the source code of the Bao documentation site.

如果你想要查看 Bao 的文档，请访问 [https://southern-aurora.github.io/bao-docs/](https://southern-aurora.github.io/bao-docs/)。

If you want to view the documentation of Bao, please visit [https://southern-aurora.github.io/bao-docs/](https://southern-aurora.github.io/bao-docs/).

## 贡献

## Contribution

Bao Docs 使用 VitePress 作为文档站点的框架，使用 Markdown 作为文档的书写语言。

Bao Docs uses VitePress as the framework for the documentation site and Markdown as the language for writing documentation.

但是它有些特殊：你可能注意到了，文档中每行都是按照中文、英文、中文、英文……的顺序进行书写的。包括标题也是，即便有些标题在中文中是英文的。

But it's special: you may have noticed that each line in the documentation is written in Chinese, English, Chinese, English... in order. Including the title, even if some of the titles are in English in Chinese.

是的，这是因为 Bao Docs 的文档是双语的，我们会在每一行的后面添加英文翻译。这么做，有助于文档的编写者同时书写多种语言的文档，而不需要为每一种语言的文档，都创建一个新的页面。

Yes, this is because the documentation of Bao Docs is bilingual, and we will add English translation at the end of each line. This makes it easier for the documentation writer to write documents in multiple languages at the same time without having to create a new page for each language.

暂时的，Bao Docs 官方只维护中文和英文两种语言的文档。我们希望官方的文档尽量保证及时和准确，而我们的团队成员只能够阅读和书写中文（母语）与英文两种语言。我们非常欢迎社区的开发者们，建立并维护自己的其他语言的 Bao Docs 文档站点，如果你创建了一个新的站点，欢迎通过 Issue 告诉我们，我们会在官方文档中为你的站点添加链接。

For the time being, Bao Docs officially only maintains documentation in two languages: Chinese and English. We hope that the official documentation can be timely and accurate, and our team members can only read and write in Chinese (mother tongue) and English. We welcome developers in the community to build and maintain their own Bao Docs documentation sites in other languages. If you create a new site, please let us know via Issue and we will add a link to your site in the official documentation.

如果你想要为 Bao Docs 贡献文档，你可以直接在 GitHub 上编辑文档，然后提交 Pull Request。如果你想要在本地预览文档，你可以使用以下命令：

If you want to contribute documentation to Bao Docs, you can edit the documentation directly on GitHub and then submit a Pull Request. If you want to preview the documentation locally, you can use the following command:

```bash
co dev # 本地预览文档
```

```bash
co dev # Preview documentation locally
```
