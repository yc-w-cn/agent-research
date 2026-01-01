# 内容添加操作规范

## 概述

本文档说明如何向 Agent Research 网站添加论文、代码和资源内容。

## 目录结构

```
src/
└── content/              # 内容文件目录
    └── *.mdx            # 所有内容文件直接放在此处
docs/
└── SWISS_DESIGN_STYLE.md
```

## 文件命名规范

- 所有文件名使用**小写字母和连字符**（kebab-case）
- URL 路径与文件名保持一致
- 示例：`agentic-rag-survey.mdx` → `/agentic-rag-survey`

## 内容文件规范

### 前置元数据（Frontmatter）

每个内容文件必须包含前置元数据：

```mdx
---
title: Agentic RAG - A Survey
categories:
  - agentic-rag
  - retrieval-augmented-generation
date: 2025-01-27
arxiv:
  id: 2501.09136
  subjects:
    - cs.AI
    - cs.CL
    - cs.IR
  description: Agentic-RAG explores advanced Retrieval-Augmented Generation systems enhanced with AI LLM agents.
github:
  repo: asinghcsu/AgenticRAG-Survey
  stars: 1400
  tags:
    - reflection
    - tools
    - multiagent
    - rag
    - llm-agent
related:
  - title: 论文笔记 - Agentic Retrieval-Augmented Generation
    url: https://masutangu.com/2025/02/27/paper-note-agentic-rag/
    description: 深入解读 Agentic RAG 的核心概念和方法
---

## 概述

Agentic-RAG explores advanced Retrieval-Augmented Generation systems enhanced with AI LLM agents.

## 核心内容

...

## 关键特性

...

## 相关资源

- [论文笔记](https://masutangu.com/2025/02/27/paper-note-agentic-rag/)
```

### 元数据字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | 是 | 标题 |
| categories | array | 是 | 分类标签数组，支持多个分类 |
| date | string | 是 | 发布日期，格式 YYYY-MM-DD |
| arxiv | object | 否 | arXiv 论文信息（有此字段会自动显示在 papers 页面） |
| arxiv.id | string | 否（arxiv存在时必填） | arXiv 论文编号 |
| arxiv.subjects | array | 否 | arXiv 论文主题分类 |
| arxiv.description | string | 否 | arXiv 论文描述 |
| github | object | 否 | GitHub 仓库信息（有此字段会自动显示在 code 页面） |
| github.name | string | 否（github存在时必填） | GitHub 仓库名称 |
| github.description | string | 否 | GitHub 仓库描述（支持多行文本） |
| github.stars | number | 否 | GitHub 星标数 |
| github.tags | array | 否 | GitHub 仓库标签 |
| related | array | 否 | 相关资源列表（有此字段会自动显示在 resources 页面） |
| related[].title | string | 否 | 相关资源标题 |
| related[].url | string | 否 | 相关资源链接 |
| related[].description | string | 否 | 相关资源描述 |

### 自动分类规则

内容会根据元数据自动出现在对应页面：
- **papers 页面**：包含 `arxiv` 字段的内容
- **code 页面**：包含 `github` 字段的内容
- **resources 页面**：包含 `related` 字段的内容

一个内容可以同时出现在多个页面。

### 内容编写规范

1. **标题层级**：使用 H2（##）作为最高层级，避免 H1
2. **代码块**：使用语言标记，如 \`\`\`python
3. **链接**：使用相对路径引用站内内容
4. **图片**：使用相对路径 `/public/images/...`

## 添加新内容流程

### 步骤 1：创建内容文件

在 content 目录下创建 MDX 文件：

```bash
# 添加论文（有 arxiv 字段）
src/content/agentic-rag-survey.mdx

# 添加代码（有 github 字段）
src/content/langchain.mdx

# 添加资源（有 related 字段）
src/content/agentbench.mdx
```

### 步骤 2：验证链接

确保：
- 文件名使用小写连字符
- URL 路径正确

## 内容类型说明

### 论文（Papers）

- 包含 `arxiv` 对象字段
- `arxiv.id`：arXiv 论文编号
- `arxiv.subjects`：论文主题分类（可选）
- `arxiv.description`：论文描述（可选）
- 可选关联 `github` 仓库
- 包含论文摘要、核心贡献、方法说明
- 可添加 `related` 字段关联笔记和解读

### 代码（Code）

- 包含 `github` 对象字段
- `github.name`：GitHub 仓库名称
- `github.description`：仓库描述（可选，会在代码列表中显示）
- `github.stars`：星标数（可选）
- `github.tags`：仓库标签（可选）
- 包含项目简介、主要特性、使用场景
- 可添加示例代码

### 资源（Resources）

- 包含 `related` 字段
- `related[].title`：资源标题
- `related[].url`：资源链接
- `related[].description`：资源描述（可选）
- 说明资源类型（数据集、评测基准、教程等）
- 提供资源描述和使用说明

### 混合类型

一个内容可以同时属于多个类型：
- 论文 + 代码：同时有 `arxiv` 和 `github`
- 论文 + 资源：同时有 `arxiv` 和 `related`
- 代码 + 资源：同时有 `github` 和 `related`
- 全部：同时有 `arxiv`、`github` 和 `related`

## 最佳实践

1. **保持简洁**：每个内容文件控制在 100 行以内
2. **及时更新**：定期检查链接有效性
3. **统一格式**：遵循 Swiss 设计风格，保持视觉一致性
4. **标签规范**：使用小写连字符作为标签格式

## 范例

完整的范例请参考：
- [Agentic RAG Survey](/agentic-rag-survey)

## 注意事项

1. **文件编码**：使用 UTF-8 编码
2. **换行符**：使用 LF（Unix 风格）
3. **缩进**：使用 2 个空格
4. **注释**：所有注释使用中文
5. **变量名**：代码中的变量名使用英文
