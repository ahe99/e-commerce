export const Divider = ({
  className,
  size = 2,
}: {
  className?: string
  size?: number
}) => {
  const borderSize = `border-t-${size}`
  return (
    <hr
      className={`${className} ${borderSize} w-full border-dashed border-slate-800`}
    />
  )
}
