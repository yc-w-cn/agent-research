# 文件创建与提交指南

## 概述

本指南说明如何创建文件并提交代码。

## 文件创建

### 创建文件

在 `src/content` 目录下创建新文件：

```bash
touch src/content/your-content-name.mdx
```

### 文件命名规范

- 使用小写字母和连字符（kebab-case）
- 文件名要简洁、有代表性
- 示例：`agentic-rag-survey.mdx`

### 文件路径

```
src/
└── content/
    └── your-content-name.mdx
```

## 文件内容

### 基本结构

```mdx
---
title: 标题
categories:
  - 分类1
  - 分类2
date: YYYY-MM-DD
arxiv: # 可选
  id: 论文编号
  subjects:
    - cs.AI
  description:
    zh: 中文描述
    en: 英文描述
github: # 可选
  name: 仓库名称
  description: 仓库描述
  stars: 星标数
  tags:
    - 标签1
related: # 可选
  - title: 相关资源标题
    url: 链接
    description: 描述
---

## 概述

简要介绍内容的背景和意义

## 核心内容

详细说明主要内容

### 主要贡献

列出主要贡献点

## 关键特性

说明关键特性

## 相关资源

列出相关资源链接
```

## 文件提交

### 提交信息格式

```
docs: 添加 [内容标题]

- 添加 [内容类型] 内容
- 包含 [主要特性]
- 关联 [相关资源]
```

### 提交示例

```
docs: 添加 Agentic RAG Survey

- 添加论文内容
- 包含 arXiv 论文和 GitHub 仓库
- 关联论文笔记和相关资源
```

### 提交命令

```bash
git add src/content/your-content-name.mdx
git commit -m "docs: 添加 [内容标题]"
git push
```

## 注意事项

1. **文件命名**：使用小写字母和连字符（kebab-case）
2. **文件路径**：文件必须放在 `src/content` 目录下
3. **提交信息**：使用规范的提交信息格式
4. **内容质量**：确保内容质量符合要求
5. **审核通过**：确保内容审核通过后再提交

## 常见问题

### 问题 1：文件名不符合规范

**解决方案**：使用小写字母和连字符（kebab-case），如 `agentic-rag-survey.mdx`。

### 问题 2：文件路径错误

**解决方案**：确保文件放在 `src/content` 目录下。

### 问题 3：提交信息不规范

**解决方案**：使用规范的提交信息格式，参考提交示例。

### 问题 4：内容未审核

**解决方案**：确保内容审核通过后再提交。

### 问题 5：文件内容不完整

**解决方案**：检查文件内容，确保所有必填字段都已填写。
