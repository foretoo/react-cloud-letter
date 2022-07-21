# cloud-letter

React-based component wraps your letter in auto-merged cloud-like shape. Created with respect to [polygon-clipping](https://github.com/mfogel/polygon-clipping) implementation of the Martinez-Rueda-Feito polygon clipping algorithm.

## [Demo page](https://foretoo.github.io/cloud-letter)
v0.0.1
</br>

```typescript
CloudLetterProps = {
  children: string | JSX.Element | (string | JSX.Element)[] | null
  width: number
  spaceWidth: number
  cloudHeight: number

  mode?: "WORD" | "PARTIAL" | "SPACE"
  align?: "left" | "center" | "right"
  snap?: number
  grid?: boolean

  fill?: string
  stroke?: string
  strokeWidth?: number
}
```