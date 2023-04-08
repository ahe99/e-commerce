import { MdSearch } from 'react-icons/md'

import { Checkbox } from '@/components/atoms'

interface ProductFilterProps {
  categoryOptions?: string[]
  selectedOptions?: string[]
  onChangeSearchText?: (newSearchText: string) => void
  onSelectCategory?: (selectedCategory: string) => void
  onSelectAllCategory?: () => void
}

export const ProductFilter = ({
  categoryOptions = [],
  selectedOptions = [],
  onChangeSearchText = () => {},
  onSelectCategory = () => {},
  onSelectAllCategory = () => {},
}: ProductFilterProps) => {
  return (
    <div className="flex w-full flex-row items-center justify-between border-b-2 border-slate-800 pb-2">
      <div className="flex flex-row gap-2">
        <Checkbox
          label="All"
          isChecked={categoryOptions.length === selectedOptions.length}
          onClick={onSelectAllCategory}
        />
        {categoryOptions.map((category) => (
          <Checkbox
            key={category}
            label={category}
            isChecked={selectedOptions.includes(category)}
            onClick={() => onSelectCategory(category)}
          />
        ))}
      </div>
      <div className="flex flex-row items-center gap-1">
        <MdSearch />
        <input
          className="rounded-sm p-1"
          type="text"
          onChange={(e) => onChangeSearchText(e.target.value)}
        />
      </div>
    </div>
  )
}
