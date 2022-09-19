//Note: To genarate list of [1 ... 100] => list(1, 100)
export const list = (buffer: number, size: number) =>
  [...Array(size)].map((_, i) => i + buffer)