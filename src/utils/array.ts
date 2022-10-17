export const chunk = <T>(array: T[], option: { size: number } | { division: number }): T[][] =>
  'size' in option
    ? chunkBySize(array, option.size)
    : chunkBySize(array, Math.ceil(array.length / option.division));

const chunkBySize = <T>(array: T[], size: number): T[][] =>
  array.reduce((acc: T[][], _, index) => (index % size ? acc : [...acc, array.slice(index, index + size)]), []);
