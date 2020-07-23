import React, { createContext, useState, useContext, useCallback, useMemo } from 'react'

import api from '../services/api'

export interface Product {
  id: string
  height: number
  width: number
  wires: number
  format: {
    id: number
    name: string
  }
  image_url: string
}

interface FormatSerializer {
  value: number;
  label: string;
}

interface ProductsInfo {
  items: Product[]
  meta: {
    totalItems: number
    itemCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
  }
}

interface ProductsContextData {
  products: Product[]
  height: [number, number]
  setHeight: React.Dispatch<React.SetStateAction<[number, number]>>
  width: [number, number]
  setWidth: React.Dispatch<React.SetStateAction<[number, number]>>
  wires: number | undefined
  setWires: React.Dispatch<React.SetStateAction<number | undefined>>
  format: FormatSerializer | undefined
  setFormat: React.Dispatch<React.SetStateAction<FormatSerializer | undefined>>
  sort_by: string
  setSortBy: React.Dispatch<React.SetStateAction<string>>
  loadProducts: (page?: any) => Promise<void>
  productsInfo: ProductsInfo
}

const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData)

export const ProductProvider: React.FC = ({ children }) => {
  const [height, setHeight] = useState<[number, number]>([0, 0])
  const [width, setWidth] = useState<[number, number]>([0, 0])
  const [wires, setWires] = useState<number>()
  const [format, setFormat] = useState<FormatSerializer>()
  const [sort_by, setSortBy] = useState('id')
  const [productsInfo, setProductsInfo] = useState<ProductsInfo>({
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: 0,
      totalPages: 0,
      currentPage: 0
    }
  })

  const products = useMemo(() => productsInfo.items, [productsInfo.items])

  const loadProducts = useCallback(async (page = 1) => {
    interface Params {
      height: string
      width: string
      wires: number
      format: number
    }

    const params: Params = {} as Params

    if (height[1] > 0) {
      params.height = height.join(',')
    }

    if (width[1] > 0) {
      params.width = width.join(',')
    }

    if (wires) {
      params.wires = wires
    }

    if (format) {
      params.format = format.value
    }

    const response = await api.get<ProductsInfo>('/products', {
      params: {
        ...params,
        sort_by,
        page
      }
    })

    setProductsInfo(response.data)
  }, [format, height, sort_by, width, wires])

  return (
    <ProductsContext.Provider value={{
      products,
      height,
      setHeight,
      width,
      setWidth,
      wires,
      setWires,
      format,
      setFormat,
      sort_by,
      setSortBy,
      loadProducts,
      productsInfo
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProducts = (): ProductsContextData => useContext(ProductsContext)
