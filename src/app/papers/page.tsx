import Link from 'next/link';

export default function PapersPage() {
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
            学术
            <br />
            <span className="text-zinc-400">论文</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-600 max-w-xl">
            探索最新的 Agent 领域研究成果
          </p>
        </header>

        <section className="space-y-12">
          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">核心论文</h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  ReAct: Synergizing Reasoning and Acting in Language Models
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  提出了 ReAct
                  范式，将推理和行动结合，使大语言模型能够更好地执行复杂任务。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  AutoGPT: An Autonomous GPT-4 Experiment
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  展示了自主 Agent 的潜力，能够自动分解目标并执行相关任务。
                </p>
              </article>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              多 Agent 系统
            </h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  MetaGPT: Meta Programming for A Multi-Agent Collaborative
                  Framework
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  将人类工作流程引入多 Agent
                  协作，通过标准化操作程序提高协作效率。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  AgentVerse: Facilitating Multi-Agent Collaboration
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  提供了一个灵活的多 Agent 协作框架，支持各种协作模式。
                </p>
              </article>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">工具使用</h2>
            <div className="space-y-6">
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  Toolformer: Language Models Can Teach Themselves to Use Tools
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  让语言模型自主学习如何使用外部工具，增强其能力。
                </p>
              </article>
              <article className="group">
                <h3 className="text-lg font-semibold group-hover:text-zinc-600 transition-colors">
                  Chameleon: Plug-and-Play Compositional Reasoning
                </h3>
                <p className="mt-2 text-base text-zinc-600">
                  通过组合不同的工具和模块，实现灵活的推理和问题解决。
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
