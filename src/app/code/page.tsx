import Link from 'next/link';

export default function CodePage() {
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
            开源
            <br />
            <span className="text-zinc-400">代码</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-600 max-w-xl">
            收集整理高质量的 Agent 相关开源项目
          </p>
        </header>

        <section className="space-y-12">
          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Agent 框架
            </h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  LangChain
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  最流行的 LLM 应用开发框架，提供了丰富的工具和组件来构建 Agent
                  应用。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  AutoGen
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  微软开发的多 Agent 对话框架，支持复杂的 Agent 交互和协作模式。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  CrewAI
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  用于编排角色扮演的自主 Agent 的框架，让 Agent
                  团队协作完成任务。
                </p>
              </article>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">工具库</h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  LlamaIndex
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  专注于数据连接的框架，帮助 Agent 高效地访问和处理外部数据。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  MemGPT
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  为 LLM 提供持久化记忆的框架，使 Agent
                  能够记住长期对话和上下文。
                </p>
              </article>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">实现示例</h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  BabyAGI
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  一个简单的任务驱动型 Agent 实现，展示了 Agent 的基本工作流程。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  AgentGPT
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  在浏览器中直接部署和运行自主 Agent 的 Web 应用。
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
