import { MdSearch } from 'react-icons/md'
import {
  Box,
  Input,
  Divider,
  Select,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'

import { Checkbox } from '@/components/atoms'

export const SORT_BASE_OPTIONS = [
  'ASCEND_CREATE_TIME',
  'DESCEND_CREATE_TIME',
  'ASCEND_PRICE',
  'DESCEND_PRICE',
] as const

export type SortBaseType = (typeof SORT_BASE_OPTIONS)[number] | null

interface ProductFilterProps {
  categoryOptions?: string[]
  selectedOptions?: string[]
  onChangeSearchText?: (newSearchText: string) => void
  onSelectCategory?: (selectedCategory: string) => void
  onSelectAllCategory?: () => void
  onChangeSortBase?: (newSortBase: SortBaseType) => void
}

export const ProductFilter = ({
  categoryOptions = [],
  selectedOptions = [],
  onChangeSearchText = () => {},
  onSelectCategory = () => {},
  onSelectAllCategory = () => {},
  onChangeSortBase = () => {},
}: ProductFilterProps) => {
  return (
    <Box className="flex w-full flex-col">
      <Box className="mb-2 flex flex-col items-end justify-between border-b-2 border-slate-800 pb-2 md:flex-row">
        <Box className="flex flex-row flex-wrap gap-2 ">
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
        </Box>
        <Box className="flex flex-shrink-0 flex-row items-center justify-between">
          <InputGroup variant="filled" className="rounded-md border-slate-600">
            <InputLeftElement pointerEvents="none">
              <MdSearch />
            </InputLeftElement>
            <Input
              type="text"
              onChange={(e) => onChangeSearchText(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Box>
      <Box className="w-max self-end">
        <Select
          variant="outline"
          size="md"
          className="rounded-md border-2 border-slate-600"
          onChange={(e) => onChangeSortBase(e.target.value as SortBaseType)}
          placeholder="sort by"
        >
          {SORT_BASE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Box>
    </Box>
  )
}
