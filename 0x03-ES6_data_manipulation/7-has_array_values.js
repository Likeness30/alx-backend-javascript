export default function hasValuesFromArray(set, array) {
  return array.some((value) => set.has(value));
}
