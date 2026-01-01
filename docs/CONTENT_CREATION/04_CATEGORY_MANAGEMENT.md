# 分类标签管理指南

## 概述

本指南说明如何使用规范的分类标签，确保标签一致性。

## 分类标签体系

### 核心分类标签

| 标签 | 说明 | 适用场景 |
|------|------|---------|
| agentic-rag | 智能体 RAG | RAG 系统与 Agent 结合 |
| retrieval-augmented-generation | 检索增强生成 | RAG 相关内容 |
| llm-agent | 大语言模型智能体 | LLM Agent 相关 |
| multiagent | 多智能体 | 多 Agent 系统 |
| reflection | 反思机制 | 具备反思能力的系统 |
| planning | 规划 | 具备规划能力的系统 |
| tool-use | 工具使用 | 使用外部工具的系统 |
| rag | RAG | 传统 RAG 系统 |
| fine-tuning | 微调 | 模型微调相关 |
| embedding | 嵌入 | 向量嵌入相关 |
| vector-database | 向量数据库 | 向量数据库相关 |
| evaluation | 评测 | 评测方法和基准 |
| benchmark | 基准测试 | 评测基准 |
| dataset | 数据集 | 数据集资源 |
| tutorial | 教程 | 教程和指南 |
| framework | 框架 | 开发框架 |

## 标签使用规范

### 标签格式

- 使用小写字母和连字符（kebab-case）
- 示例：`agentic-rag`, `llm-agent`, `tool-use`

### 标签数量

- 每个内容 2-5 个标签
- 避免标签过多或过少

### 标签顺序

- 按重要性排序
- 最重要的标签放在前面

### 标签一致性

- 使用已有标签，避免创建新标签
- 保持标签的语义清晰

## 新标签添加流程

如果需要添加新标签：

1. 检查是否已有类似标签
2. 评估标签的通用性和复用性
3. 在分类标签清单中添加新标签
4. 更新本文档的标签清单

## 注意事项

1. **标签规范性**：使用已有标签，避免创建新标签
2. **标签一致性**：保持标签的语义清晰
3. **标签数量**：每个内容 2-5 个标签
4. **标签顺序**：按重要性排序
5. **标签格式**：使用小写字母和连字符

## 示例

### 正确示例

```mdx
categories:
  - agentic-rag
  - retrieval-augmented-generation
```

```mdx
github:
  tags:
    - reflection
    - tools
    - multiagent
```

### 错误示例

```mdx
categories:
  - AgenticRAG  # 错误：使用了大写字母
  - retrieval_augmented_generation  # 错误：使用了下划线
```

```mdx
github:
  tags:
    - reflection
    - tools
    - multiagent
    - rag
    - llm-agent
    - planning
    - tool-use
    - fine-tuning  # 错误：标签过多
```
