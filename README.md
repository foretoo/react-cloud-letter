# cloud-letter
cloud-letter

```typescript
CloudLetterProps = {
  children: string | JSX.Element
  width: string
  spaceWidth: string
  wordStyle?: {
    font: string
    fontFamily: string
    fontSize: string
    fontStyle: string
    fontVariant: string
    fontWeight: string
    fontStretch: string
    // lineHeight, padding props below
    // should be integers in px units
    // to get predictable behaviour
    lineHeight: string
    padding: string

    fill: string
    stroke: string
    strokeWidth: number
  }
}
```