"use client"

import { Provider } from 'react-redux'
import { store } from "./store";

import { useMemo } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const storeInstance = useMemo(() => store(), [])

  return <Provider store={storeInstance}>{children}</Provider>
}