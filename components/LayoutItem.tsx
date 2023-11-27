export default function LayoutItem({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xl">{label}</label>
      <div className="text-base">
        {children}
      </div>
    </div>
  )
}
