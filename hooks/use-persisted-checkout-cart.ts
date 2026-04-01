'use client'

import { useCallback, useEffect, useState } from 'react'
import type { SelectedService } from '@/components/checkout/service-card'
import {
  CHECKOUT_CART_STORAGE_KEY,
  parseCartFromStorage,
} from '@/components/checkout/checkout-cart-storage'

export function usePersistedCheckoutCart() {
  const [lines, setLines] = useState<SelectedService[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setLines(parseCartFromStorage(localStorage.getItem(CHECKOUT_CART_STORAGE_KEY)))
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated || typeof window === 'undefined') return
    try {
      localStorage.setItem(CHECKOUT_CART_STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* ignore */
    }
  }, [lines, hydrated])

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((s) => s.id !== id))
  }, [])

  const addOrMergeLine = useCallback(
    (input: {
      catalogId: string
      name: string
      quantity?: string
      basePrice: number
      lineQty?: number
    }) => {
      const addQty = Math.max(1, Math.floor(input.lineQty ?? 1))
      setLines((prev) => {
        const idx = prev.findIndex(
          (s) =>
            s.catalogId === input.catalogId &&
            s.quantity === input.quantity &&
            s.basePrice === input.basePrice,
        )
        if (idx >= 0) {
          const next = [...prev]
          const cur = next[idx]
          const lineQty = (cur.lineQty ?? 1) + addQty
          next[idx] = {
            ...cur,
            lineQty,
            totalPrice: cur.basePrice * lineQty,
          }
          return next
        }
        return [
          ...prev,
          {
            id: `${input.catalogId}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            catalogId: input.catalogId,
            name: input.name,
            quantity: input.quantity,
            basePrice: input.basePrice,
            lineQty: addQty,
            totalPrice: input.basePrice * addQty,
          },
        ]
      })
    },
    [],
  )

  return { lines, setLines, removeLine, addOrMergeLine, hydrated }
}
