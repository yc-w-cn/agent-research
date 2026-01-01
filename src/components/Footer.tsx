export default function Footer() {
  const version = process.env.APP_VERSION || '0.0.1';
  const buildDate =
    process.env.BUILD_DATE || new Date().toISOString().split('T')[0];

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-5xl px-8 py-6">
        <div className="flex items-center justify-between text-sm text-zinc-600">
          <span>版本: {version}</span>
          <span>构建日期: {buildDate}</span>
        </div>
      </div>
    </footer>
  );
}
