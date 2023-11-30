export default function LayoutItem({ className, label, children }: { className?: string, label: string, children: React.ReactNode }) {
  return (
    <div className={className}>
      <label className="block text-xl mb-1">{label}</label>
      <div className="text-base">
        {children}
      </div>
    </div>
  )
}
