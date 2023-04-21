'use client'
import { MdDone } from 'react-icons/md'

interface CheckboxProps {
  label?: string
  onClick?: () => void
  isChecked: boolean
}
export const Checkbox = ({
  label,
  onClick = () => {},
  isChecked,
}: CheckboxProps) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <div
        className={`h-4 w-4 rounded-sm border-2 border-slate-600 hover:cursor-pointer ${
          isChecked ? 'bg-slate-400' : 'bg-transparent'
        }`}
        onClick={onClick}
      />
      <div>{label}</div>
    </div>
  )
}