# cloud-letter
cloud-letter@0.0.1

## [Demo page](https://foretoo.github.io/cloud-letter)
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