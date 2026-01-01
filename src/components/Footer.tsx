export default function Footer() {
  const version = process.env.APP_VERSION || '0.0.1';
  const buildDate =
    process.env.BUILD_DATE || new Date().toISOString().split('T')[0];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-5xl px-8 py-8">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>
            Agent Research v{version} · {buildDate}
          </span>
          <span>© {currentYear} Yuchen Wang</span>
        </div>
      </div>
    </footer>
  );
}
