export interface DeviceProps {
  isHidden: boolean
  name: string
  width: number
  height: number
  userAgent: string
  orientation: 'portrait' | 'landscape'
  scale: number
  category: string
}
