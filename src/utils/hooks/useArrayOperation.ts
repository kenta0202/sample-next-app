import { useState } from "react";
import { deepCopy } from "../deepCopy";

export const useArrayOperation = <T>(data: T[]) => {
  const [array, setArray] = useState(data);

  // 要素追加
  const arrayAdd = (data: T) => {
    setArray([...array, data]);
  };
  // 要素削除
  const arrayRemove = (index: number) => {
    const result = deepCopy(array);
    result.splice(index, 1);
    setArray(result);
  };
  // 要素更新
  const arrayUpdate = (index: number, data: T) => {
    const result = deepCopy(array);
    result.splice(index, 1, data);
    setArray(result);
  };

  return [array, setArray, { arrayAdd, arrayRemove, arrayUpdate }] as const;
};
