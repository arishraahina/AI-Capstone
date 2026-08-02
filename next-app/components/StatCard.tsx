interface StatCardProps {
  title: string;
  count: number;
  description: string;
  type: 'total' | 'completed' | 'pending';
}

export default function StatCard({ title, count, description, type }: StatCardProps) {
  const styles = {
    total: {
      bg: 'bg-white',
      border: 'border-blue-100',
      badgeBg: 'bg-blue-100 text-blue-800',
      iconBg: 'bg-blue-600 text-white',
      iconPath: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      ),
    },
    completed: {
      bg: 'bg-white',
      border: 'border-emerald-100',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      iconBg: 'bg-emerald-600 text-white',
      iconPath: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      ),
    },
    pending: {
      bg: 'bg-white',
      border: 'border-amber-100',
      badgeBg: 'bg-amber-100 text-amber-800',
      iconBg: 'bg-amber-500 text-white',
      iconPath: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
    },
  }[type];

  return (
    <div className={`${styles.bg} rounded-2xl border ${styles.border} p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            {title}
          </p>
          <h3 className="text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            {count}
          </h3>
        </div>
        <div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center shadow-md`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {styles.iconPath}
          </svg>
        </div>
      </div>
      <p className="mt-4 text-xs font-medium text-slate-500 flex items-center gap-1.5">
        <span className={`inline-block w-2 h-2 rounded-full ${type === 'completed' ? 'bg-emerald-500' : type === 'pending' ? 'bg-amber-500' : 'bg-blue-500'}`} />
        {description}
      </p>
    </div>
  );
}
