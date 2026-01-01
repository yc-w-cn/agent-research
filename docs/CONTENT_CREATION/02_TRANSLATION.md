# 翻译与本地化指南

## 概述

本指南说明如何将英文内容翻译为中文，确保术语一致性。

## 翻译原则

- **准确性**：保持原文技术含义准确
- **流畅性**：符合中文表达习惯
- **一致性**：专业术语翻译统一
- **完整性**：不遗漏关键信息

## 专业术语翻译对照表

维护一个术语翻译对照表，确保一致性：

| 英文术语 | 中文翻译 | 备注 |
|---------|---------|------|
| Retrieval-Augmented Generation | 检索增强生成 | RAG |
| Large Language Models | 大语言模型 | LLM |
| Agentic | 智能体/代理 | Agentic |
| Reflection | 反思 | - |
| Planning | 规划 | - |
| Tool Use | 工具使用 | - |
| Multiagent Collaboration | 多代理协作 | - |
| Fine-tuning | 微调 | - |
| Inference | 推理 | - |
| Embedding | 嵌入 | - |
| Vector Database | 向量数据库 | - |

## 翻译工作流程

### 1. 初译

快速翻译，不追求完美。

### 2. 校对

对照原文检查准确性。

### 3. 润色

优化表达，提高可读性。

### 4. 术语检查

使用术语对照表统一术语。

### 5. 格式检查

确保符合文档格式要求。

## 翻译质量控制

- 翻译完成后，请至少一人进行校对
- 重点检查技术术语的准确性
- 确保中英文描述在语义上一致
- 避免直译，注重意译

## 多语言描述格式

### 格式 1：字符串（单语言）

```mdx
arxiv:
  id: 2501.09136
  description: |
    Large Language Models (LLMs) have revolutionized artificial intelligence (AI) by enabling human like text generation and natural language understanding.
```

### 格式 2：对象（多语言）

```mdx
arxiv:
  id: 2501.09136
  description:
    zh: |
      大语言模型（LLM）通过实现类似人类的文本生成和自然语言理解，彻底改变了人工智能（AI）领域。
    en: |
      Large Language Models (LLMs) have revolutionized artificial intelligence (AI) by enabling human like text generation and natural language understanding.
```

## 注意事项

1. **术语一致性**：使用术语对照表，保持术语翻译统一
2. **语义准确性**：确保翻译准确传达原文含义
3. **表达流畅性**：符合中文表达习惯，避免生硬直译
4. **完整性**：不遗漏关键信息
5. **格式规范**：遵循文档格式要求

## 工具和资源

**翻译工具**：
- DeepL: https://www.deepl.com
- Google Translate: https://translate.google.com
