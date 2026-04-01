import type { SelectedService } from '@/components/checkout/service-card'

export const CHECKOUT_CART_STORAGE_KEY = 'conquerors-checkout-services-v1'

export const CHECKOUT_REVIEW_FORM_STORAGE_KEY = 'conquerors-checkout-review-form-v1'

/** Persisted after "Submit Request" for `/checkout/success` (see localStorage.setItem("orderData", ...)). */
export const ORDER_DATA_STORAGE_KEY = 'orderData'

export type StoredOrderServiceLine = {
  name: string
  selectedPackage?: string
  price: number
}

export type StoredOrderData = {
  fullName: string
  email: string
  phoneNumber: string
  /** Optional interest from review form dropdown. */
  serviceInterestedIn?: string
  message?: string
  promoCode?: string
  submissionDate: string
  submittedAtIso: string
  selectedServices: StoredOrderServiceLine[]
  totalPrice: number
}

export function parseOrderData(raw: string | null): StoredOrderData | null {
  if (!raw?.trim()) return null
  try {
    const data = JSON.parse(raw) as StoredOrderData
    if (
      !data ||
      typeof data.fullName !== 'string' ||
      typeof data.email !== 'string' ||
      typeof data.phoneNumber !== 'string' ||
      !Array.isArray(data.selectedServices) ||
      data.selectedServices.length === 0
    ) {
      return null
    }
    if (typeof data.totalPrice !== 'number' || !Number.isFinite(data.totalPrice)) return null
    for (const row of data.selectedServices) {
      if (typeof row.name !== 'string' || typeof row.price !== 'number' || !Number.isFinite(row.price)) {
        return null
      }
    }
    return data
  } catch {
    return null
  }
}

export function normalizeCartLine(row: SelectedService): SelectedService {
  const catalogId = row.catalogId ?? row.id.split('-')[0] ?? row.id
  const lineQty = Math.max(1, row.lineQty ?? 1)
  return {
    ...row,
    catalogId,
    lineQty,
    totalPrice: row.basePrice * lineQty,
  }
}

export function parseCartFromStorage(raw: string | null): SelectedService[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as SelectedService[]
    if (!Array.isArray(parsed)) return []
    return parsed.map(normalizeCartLine)
  } catch {
    return []
  }
}

export function lineItemTotal(s: SelectedService): number {
  return s.basePrice * (s.lineQty ?? 1)
}
