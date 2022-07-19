- pass height of clouds (spans' line-heights) and hor.padding as props to CloudLetter

- store both words ans spaces refs, handle their widths, and grab data from mode related only

- preserve initial widths of spans (when change align from center to left | right, widths of spans don't shrink)

- ui in the clouds: grab data from children and draw its clouds via canvas on background 