export default function LayoutItem({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xl mb-1">{label}</label>
      <div className="text-base">
        {children}
      </div>
    </div>
  )
}
