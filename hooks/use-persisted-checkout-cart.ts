'use client'

import { useCallback, useEffect, useState } from 'react'
import type { SelectedService } from '@/components/checkout/service-card'
import {
  CHECKOUT_CART_STORAGE_KEY,
  parseCartFromStorage,
} from '@/components/checkout/checkout-cart-storage'

function normalizePackageLabel(value?: string): string {
  if (!value) return ''
  return value
    .replace(/\s*[-—]\s*\$\d[\d,]*(?:\/[a-z]+)?\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

function serviceKey(line: SelectedService): string {
  const raw = line.catalogId ?? line.id ?? line.name ?? ''
  return raw.trim().toLowerCase()
}

function normalizeStoredLines(lines: SelectedService[]): SelectedService[] {
  // Keep only the latest selected option per service.
  const byKey = new Map<string, SelectedService>()
  for (const line of lines) {
    const lineQty = Math.max(1, line.lineQty ?? 1)
    const normalizedLine: SelectedService = {
      ...line,
      lineQty,
      totalPrice: line.basePrice * lineQty,
    }
    byKey.set(serviceKey(normalizedLine), normalizedLine)
  }
  return Array.from(byKey.values())
}

export function usePersistedCheckoutCart() {
  const [lines, setLines] = useState<SelectedService[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const parsed = parseCartFromStorage(localStorage.getItem(CHECKOUT_CART_STORAGE_KEY))
    setLines(normalizeStoredLines(parsed))
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
        const inputKey = input.catalogId.trim().toLowerCase()
        const idx = prev.findIndex(
          (s) => (s.catalogId ?? s.id ?? '').trim().toLowerCase() === inputKey,
        )
        if (idx >= 0) {
          const next = [...prev]
          const cur = next[idx]
          const lineQty = addQty
          next[idx] = {
            ...cur,
            catalogId: input.catalogId,
            name: input.name,
            quantity: normalizePackageLabel(input.quantity) || input.quantity,
            basePrice: input.basePrice,
            lineQty,
            totalPrice: input.basePrice * lineQty,
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
