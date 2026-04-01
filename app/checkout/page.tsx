import { Suspense } from 'react'
import { CheckoutPageContent } from './checkout-page-content'

function CheckoutLoading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <p className="text-sm text-[#6B7280]">Loading checkout…</p>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutPageContent />
    </Suspense>
  )
}
