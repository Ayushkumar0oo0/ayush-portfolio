interface DashboardCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
}

export default function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-blue-500/40 transition">

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-zinc-400 text-sm">
          {title}
        </h3>

        {icon}
      </div>

      <h2 className="text-4xl font-black">
        {value}
      </h2>

    </div>
  );
}