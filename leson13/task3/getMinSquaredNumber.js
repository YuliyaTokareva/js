export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return null;
  }
  const absoluteValues = arr.map((num) => Math.abs(num));
  const max = Math.min(...absoluteValues);
  const result = max * max;
  console.log(result);
  return result;
};
getMinSquaredNumber([]);
