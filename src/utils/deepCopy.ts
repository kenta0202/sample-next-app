import _ from "lodash";
type deepCopyType = { <T>(array: T[]): T[] };

export const deepCopy: deepCopyType = <T>(array: T[]) => {
  const newArray = _.cloneDeep(array);
  return newArray;
};
