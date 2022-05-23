import { CONFIG } from './config'

export const VALIDGUESSES = [
  'about',
  'after',
  'lever',
  'never',
  'phone',
  'youth',
  'zebra',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
