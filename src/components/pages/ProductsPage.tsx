'use client'
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

import { Checkbox } from '@/components/atoms'
import { ProductList } from '@/components/organisms'

import { Product } from '@/utils/ProductData'

const mockProducts: Product[] = [
  {
    id: 'p001',
    name: 'Beef Noodle Soup',
    description:
      'A hearty and delicious noodle soup with tender beef, flavorful broth, and fresh vegetables.',
    price: 150,
    stock_quantity: 30,
    category_name: 'Main Dish',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p002',
    name: 'Fried Rice with Shrimp',
    description:
      'A classic Chinese dish made with fluffy rice, juicy shrimp, and a mix of vegetables and seasonings.',
    price: 120,
    stock_quantity: 25,
    category_name: 'Main Dish',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p003',
    name: 'Vegetable Stir-Fry',
    description:
      'A colorful and healthy dish made with a variety of fresh vegetables stir-fried to perfection.',
    price: 100,
    stock_quantity: 35,
    category_name: 'Side Dish',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p004',
    name: 'Spring Rolls',
    description:
      'Crispy and savory rolls filled with a mix of vegetables and meat, served with a sweet and tangy dipping sauce.',
    price: 80,
    stock_quantity: 40,
    category_name: 'Appetizer',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p005',
    name: 'Hot and Sour Soup',
    description:
      'A spicy and sour soup with a flavorful broth, tofu, mushrooms, and bamboo shoots.',
    price: 90,
    stock_quantity: 30,
    category_name: 'Soup',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p006',
    name: 'Sesame Chicken',
    description:
      'Crispy and juicy chicken pieces coated in a sweet and savory sesame sauce, served with steamed rice.',
    price: 130,
    stock_quantity: 20,
    category_name: 'Main Dish',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p007',
    name: 'Pork Dumplings',
    description:
      'Steamed or pan-fried dumplings filled with flavorful ground pork and vegetables, served with a soy-based dipping sauce.',
    price: 100,
    stock_quantity: 10,
    category_name: 'Appetizer',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p008',
    name: 'Tom Yum Soup',
    description:
      'A spicy and sour soup with shrimp, mushrooms, and fragrant herbs like lemongrass and kaffir lime leaves.',
    price: 110,
    stock_quantity: 25,
    category_name: 'Soup',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p009',
    name: 'Green Curry with Chicken',
    description:
      'A creamy and aromatic Thai curry with tender chicken, vegetables, and herbs like basil and cilantro.',
    price: 140,
    stock_quantity: 20,
    category_name: 'Main Dish',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p010',
    name: 'Chicken Curry Rice',
    description:
      'Tender chicken pieces in a rich and spicy curry sauce served with steamed rice.',
    price: 140,
    stock_quantity: 20,
    category_name: 'Main Dish',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
  {
    id: 'p011',
    name: 'Mango Sticky Rice',
    description:
      'A delicious Thai dessert made with sticky rice, fresh mango slices, and a sweet coconut milk sauce.',
    price: 80,
    stock_quantity: 30,
    category_name: 'Dessert',
    createdAt: '2023-03-27T08:25:25.154Z',
    updatedAt: '2023-03-27T08:25:25.154Z',
  },
]

const mockCategories = [
  ...new Set(mockProducts.map(({ category_name }) => category_name)),
]
type ProductFilterType = {
  category: string[]
  text: string
}

export const ProductsPage = () => {
  const [filter, setFilter] = useState<ProductFilterType>({
    category: [],
    text: '',
  })

  const handleChangeCategory = (selectedCategory: string) => {
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
    setFilter((prev) => ({ ...prev, text: newSearchText }))
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
  return (
    <main className="h-full w-full">
      <div className="mx-auto flex h-full w-3/4 flex-col p-8">
        <ProductFilter
          categoryOptions={mockCategories}
          selectedOptions={filter.category}
          onChangeSearchText={handleChangeSearchText}
          onSelectCategory={handleChangeCategory}
          onSelectAllCategory={handleSelectAllCategory}
        />
        <ProductList products={searchedProducts} />
      </div>
    </main>
  )
}

interface ProductFilterProps {
  categoryOptions?: string[]
  selectedOptions?: string[]
  onChangeSearchText?: (newSearchText: string) => void
  onSelectCategory?: (selectedCategory: string) => void
  onSelectAllCategory?: () => void
}

const ProductFilter = ({
  categoryOptions = [],
  selectedOptions = [],
  onChangeSearchText,
  onSelectCategory,
  onSelectAllCategory,
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
