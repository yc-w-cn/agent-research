import Link from 'next/link';

import { getContentByType } from '@/lib/content-loader';

export default async function Home() {
  const [papers, code, resources] = await Promise.all([
    getContentByType('paper'),
    getContentByType('code'),
    getContentByType('resource'),
  ]);

  return (
    <div className="bg-white text-black">
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
          <Link href="/papers" className="space-y-4 group">
            <div className="h-1 w-12 bg-black group-hover:w-16 transition-all" />
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl font-bold tracking-tight group-hover:text-zinc-600 transition-colors">
                学术论文
              </h2>
              <span className="text-sm text-zinc-400">{papers.length}</span>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              探索最新的 Agent 领域研究成果。
            </p>
          </Link>

          <Link href="/code" className="space-y-4 group">
            <div className="h-1 w-12 bg-black group-hover:w-16 transition-all" />
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl font-bold tracking-tight group-hover:text-zinc-600 transition-colors">
                开源代码
              </h2>
              <span className="text-sm text-zinc-400">{code.length}</span>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              收集整理高质量的 Agent 相关开源项目，包括框架、工具和实现示例。
            </p>
          </Link>

          <Link href="/resources" className="space-y-4 group">
            <div className="h-1 w-12 bg-black group-hover:w-16 transition-all" />
            <div className="flex items-baseline gap-3">
              <h2 className="text-2xl font-bold tracking-tight group-hover:text-zinc-600 transition-colors">
                相关资源
              </h2>
              <span className="text-sm text-zinc-400">{resources.length}</span>
            </div>
            <p className="text-base text-zinc-600 leading-relaxed">
              汇总 Agent 研究所需的各类资源，包括数据集、评测基准和教程文档。
            </p>
          </Link>
        </section>
      </main>
    </div>
  );
}
