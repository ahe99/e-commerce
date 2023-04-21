export const Divider = ({ className }: { className?: string }) => {
  return (
    <hr
      className={`${className} w-full border-t-2 border-dashed border-slate-800`}
    />
  )
}
