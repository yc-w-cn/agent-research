import Link from 'next/link';

const navItems = [
  { label: '首页', href: '/' },
  { label: '论文', href: '/papers' },
  { label: '代码', href: '/code' },
  { label: '资源', href: '/resources' },
];

export default function Navigation() {
  return (
    <nav className="border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-black">
            Agent Research
          </Link>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
