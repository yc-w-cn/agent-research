import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-5xl px-8 py-32">
        <Link
          href="/"
          className="inline-block mb-12 text-zinc-600 hover:text-black transition-colors"
        >
          ← 返回首页
        </Link>

        <header className="mb-24">
          <h1 className="text-8xl font-bold tracking-tight leading-none">
            资源
            <br />
            <span className="text-zinc-400">导航</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-600 max-w-xl">
            汇总 Agent 研究所需的各类资源
          </p>
        </header>

        <section className="space-y-12">
          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">数据集</h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  AgentBench
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  评估 LLM 作为 Agent 能力的综合基准测试，涵盖多种任务类型。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  ToolBench
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  评估 LLM 工具使用能力的基准测试，包含大量真实 API 调用场景。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  InterCode
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  交互式代码执行基准测试，评估 Agent 在编程任务中的表现。
                </p>
              </article>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">评测基准</h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  AgentEval
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  评估 Agent 任务完成能力的框架，支持多种评估指标。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  ML-Bench
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  机器学习任务基准测试，评估 Agent 在数据分析和建模方面的能力。
                </p>
              </article>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">教程文档</h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  LangChain 官方文档
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  最全面的 Agent 开发教程，涵盖从基础到高级的所有概念。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  Andrew Ng 的 AI Agent 课程
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  DeepLearning.AI 推出的 AI Agent 专项课程，系统讲解 Agent
                  原理和应用。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  Awesome AI Agents
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  GitHub 上精选的 AI Agent 资源列表，持续更新最新的项目和论文。
                </p>
              </article>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">社区资源</h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  LangChain Discord 社区
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  活跃的 Agent 开发者社区，可以获取帮助和分享经验。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  Reddit r/LangChain
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  讨论最新 Agent 技术和项目的论坛。
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
