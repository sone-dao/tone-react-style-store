import { StoreApi, UseBoundStore, create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ToneStyles = {
  global: [string, string]
  uploader: [string, string]
  user: [string, string]
}

export type UseStyleStore = UseBoundStore<StoreApi<ToneStyles>>

export default create<ToneStyles>()(
  persist(
    (set) => ({
      global: ['', ''],
      uploader: ['', ''],
      user: ['', ''],
    }),
    { name: 'tone.styles' }
  )
)
