export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-param-reassign
    array[i] = appendString + array[i];
  }

  return array;
}
