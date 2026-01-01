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
type: paper
category: agentic-rag
date: 2025-01-27
tags:
  - reflection
  - tools
  - multiagent
  - multi-agent-systems
  - rag
  - llm-agent
  - agentic
  - agentic-framework
  - agentic-workflow
  - agentic-rag
  - agentic-ai
  - agentic-pattern
arxiv: 2501.09136
github: asinghcsu/AgenticRAG-Survey
stars: 1400
related:
  - type: note
    title: 论文笔记 - Agentic Retrieval-Augmented Generation
    url: https://masutangu.com/2025/02/27/paper-note-agentic-rag/
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
| type | string | 是 | 类型：paper/code/resource |
| category | string | 是 | 分类标签 |
| date | string | 是 | 发布日期，格式 YYYY-MM-DD |
| tags | array | 否 | 标签列表 |
| arxiv | string | 否 | arXiv 论文编号 |
| github | string | 否 | GitHub 仓库路径（用户名/仓库名） |
| stars | number | 否 | GitHub 星标数 |
| related | array | 否 | 相关资源列表 |

### 内容编写规范

1. **标题层级**：使用 H2（##）作为最高层级，避免 H1
2. **代码块**：使用语言标记，如 \`\`\`python
3. **链接**：使用相对路径引用站内内容
4. **图片**：使用相对路径 `/public/images/...`

## 添加新内容流程

### 步骤 1：创建内容文件

在 content 目录下创建 MDX 文件：

```bash
# 添加论文
src/content/agentic-rag-survey.mdx

# 添加代码仓库
src/content/langchain.mdx

# 添加资源
src/content/agentbench.mdx
```

### 步骤 2：验证链接

确保：
- 文件名使用小写连字符
- URL 路径正确

## 内容类型说明

### 论文（Paper）

- 包含 arXiv 链接
- 可选关联 GitHub 仓库
- 包含论文摘要、核心贡献、方法说明
- 可添加相关笔记和解读

### 代码（Code）

- 包含 GitHub 仓库链接
- 记录星标数
- 包含项目简介、主要特性、使用场景
- 可添加示例代码

### 资源（Resource）

- 包含外部链接
- 说明资源类型（数据集、评测基准、教程等）
- 提供资源描述和使用说明

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
