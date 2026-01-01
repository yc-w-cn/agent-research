# 内容添加操作规范

## 概述

本文档说明如何向 Agent Research 网站添加论文、代码和资源内容。

## 目录结构

```
src/
├── content/              # 内容文件目录
│   ├── papers/          # 论文内容
│   │   ├── index.mdx    # 论文索引文件
│   │   └── *.mdx        # 各个论文的详细内容
│   ├── code/            # 代码仓库内容
│   │   ├── index.mdx    # 代码索引文件
│   │   └── *.mdx        # 各个代码仓库的详细内容
│   └── resources/       # 资源内容
│       ├── index.mdx    # 资源索引文件
│       └── *.mdx        # 各个资源的详细内容
docs/
└── SWISS_DESIGN_STYLE.md
```

## 文件命名规范

- 所有文件名使用**小写字母和连字符**（kebab-case）
- URL 路径与文件名保持一致
- 示例：`agentic-rag-survey.mdx` → `/papers/agentic-rag-survey`

## 索引文件设计

### 索引文件结构

索引文件用于集中管理和分类内容，避免单个文件过长。按类型和主题进行拆分：

```mdx
---
title: 论文索引
---

## 核心论文

### ReAct 范式
- [ReAct: Synergizing Reasoning and Acting](/papers/react)

### 工具使用
- [Toolformer: Language Models Can Teach Themselves to Use Tools](/papers/toolformer)

## 多 Agent 系统

### 协作框架
- [MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework](/papers/metagpt)
- [AgentVerse: Facilitating Multi-Agent Collaboration](/papers/agentverse)
```

### 索引文件拆分原则

1. **按类型拆分**：论文、代码、资源分别有独立的索引
2. **按主题拆分**：当单个索引超过 50 个条目时，按主题拆分为多个索引文件
3. **按字母拆分**：当同一主题下条目过多时，按首字母拆分

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
| category | string | 是 | 分类，对应索引中的主题 |
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

在对应的目录下创建 MDX 文件：

```bash
# 添加论文
src/content/papers/agentic-rag-survey.mdx

# 添加代码仓库
src/content/code/langchain.mdx

# 添加资源
src/content/resources/agentbench.mdx
```

### 步骤 2：更新索引文件

在对应的索引文件中添加链接：

```mdx
## Agentic RAG

- [Agentic RAG - A Survey](/papers/agentic-rag-survey)
```

### 步骤 3：验证链接

确保：
- 文件名使用小写连字符
- URL 路径正确
- 索引链接可点击

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
2. **合理分类**：确保内容被正确分类到索引中
3. **及时更新**：定期检查链接有效性
4. **统一格式**：遵循 Swiss 设计风格，保持视觉一致性
5. **标签规范**：使用小写连字符作为标签格式

## 范例

完整的范例请参考：
- [Agentic RAG Survey](/papers/agentic-rag-survey)
- [Agentic RAG Survey 索引条目](/papers/index.mdx)

## 注意事项

1. **文件编码**：使用 UTF-8 编码
2. **换行符**：使用 LF（Unix 风格）
3. **缩进**：使用 2 个空格
4. **注释**：所有注释使用中文
5. **变量名**：代码中的变量名使用英文
