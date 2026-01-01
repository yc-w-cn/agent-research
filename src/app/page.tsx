export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-5xl px-8 py-32">
        <header className="mb-24">
          <h1 className="text-8xl font-bold tracking-tight leading-none">
            Agent
            <br />
            <span className="text-zinc-400">Research</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-600 max-w-xl">
            探索 Agent 领域学术论文与代码资源库
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="h-1 w-12 bg-black" />
            <h2 className="text-2xl font-bold tracking-tight">学术论文</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              探索最新的 Agent 领域研究成果。
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-1 w-12 bg-black" />
            <h2 className="text-2xl font-bold tracking-tight">开源代码</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              收集整理高质量的 Agent 相关开源项目，包括框架、工具和实现示例。
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-1 w-12 bg-black" />
            <h2 className="text-2xl font-bold tracking-tight">资源导航</h2>
            <p className="text-base text-zinc-600 leading-relaxed">
              汇总 Agent 研究所需的各类资源，包括数据集、评测基准和教程文档。
            </p>
          </div>
        </section>

        <footer className="mt-32 pt-16 border-t border-zinc-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">2026</p>
              <p className="text-lg font-bold">Agent Research</p>
            </div>
            <div className="flex gap-12 text-sm text-zinc-600">
              <span>Research</span>
              <span>Code</span>
              <span>Resources</span>
              <span>About</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
