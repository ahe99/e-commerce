'use client'
import React, { useState } from 'react'
import dayjs from 'dayjs'

import {
  Pagination,
  ProductList,
  ProductFilter,
  SortBaseType,
} from '@/components/organisms'

import { mockProducts, mockCategories } from '@/utils/mockData'

type ProductFilterType = {
  category: string[]
  text: string
}

const PRODUCTS_PER_PAGE = 12

export const ProductsPage = () => {
  const [filter, setFilter] = useState<ProductFilterType>({
    category: mockCategories,
    text: '',
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBase, setSortBase] = useState<SortBaseType>()

  const handleChangeSortBase = (newSortBase: SortBaseType) => {
    resetPagination()
    setSortBase(newSortBase)
  }

  const handleChangeCategory = (selectedCategory: string) => {
    resetPagination()
    setFilter((prev) => {
      const { text, category } = prev
      let newCategory = []
      if (category.includes(selectedCategory)) {
        newCategory = category.filter((item) => item !== selectedCategory)
      } else {
        newCategory = [...category, selectedCategory]
      }

      return {
        text,
        category: newCategory,
      }
    })
  }

  const handleSelectAllCategory = () => {
    resetPagination()
    setFilter((prev) => {
      const { text, category } = prev
      if (category.length === mockCategories.length) {
        return { ...prev, category: [] }
      } else {
        return { ...prev, category: mockCategories }
      }
    })
  }

  const handleChangeSearchText = (newSearchText: string) => {
    resetPagination()
    setFilter((prev) => ({ ...prev, text: newSearchText }))
  }

  const handleSelectPage = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const resetPagination = () => {
    setCurrentPage(1)
  }

  const filteredProducts = mockProducts.filter((product) =>
    filter.category.includes(product.category_name),
  )
  const searchedProducts = filteredProducts.filter((product) => {
    if (filter.text) {
      return product.name.toUpperCase().includes(filter.text.toUpperCase())
    } else {
      return true
    }
  })
  const sortedProducts = searchedProducts.sort((productA, productB) => {
    if (sortBase === 'ASCEND_CREATE_TIME') {
      return dayjs(productA.createdAt).diff(productB.createdAt)
    } else if (sortBase === 'DESCEND_CREATE_TIME') {
      return -dayjs(productA.createdAt).diff(productB.createdAt)
    } else if (sortBase === 'ASCEND_PRICE') {
      return productA.price - productB.price
    } else if (sortBase === 'DESCEND_PRICE') {
      return -(productA.price - productB.price)
    } else {
      return 0
    }
  })
  const paginatedProducts = sortedProducts.filter(
    (_, index) =>
      index >= PRODUCTS_PER_PAGE * (currentPage - 1) &&
      index < PRODUCTS_PER_PAGE * currentPage,
  )
  return (
    <div className="h-full w-full">
      <div className="mx-auto flex h-full w-3/4 flex-col items-center gap-8 p-8">
        <div className="flex w-full flex-col gap-2">
          <ProductFilter
            categoryOptions={mockCategories}
            selectedOptions={filter.category}
            onChangeSearchText={handleChangeSearchText}
            onSelectCategory={handleChangeCategory}
            onSelectAllCategory={handleSelectAllCategory}
            onChangeSortBase={handleChangeSortBase}
          />
          <ProductList products={paginatedProducts} />
        </div>
        <Pagination
          total={Math.ceil(searchedProducts.length / PRODUCTS_PER_PAGE)}
          currentPage={currentPage}
          onChange={handleSelectPage}
        />
      </div>
    </div>
  )
}
