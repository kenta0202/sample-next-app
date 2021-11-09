import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "store/Todo/TodoListState";
import { Todo } from "types/Todo";

const TodoArea = () => {
  const settodoListInfo = useSetRecoilState(todoListState);
  const todoListInfo = useRecoilValue(todoListState);

  const [text, setText] = useState<string>("");
  const [beforeEdittextnumber, setbeforeEditTextnumber] = useState<number>();
  const [Edittext, setEditText] = useState<string>("");
  const [todoListNumber, setTodoListNumber] = useState<number>(1);
  const [isAdded, setisAdded] = useState<boolean>(false);
  const [checkboxValue, setCheckboxValue] = useState<Array<string>>([text]);
  const [isEdited, setisEdited] = useState<boolean>(false);

  // タスクを入力できるようにする
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // タスクを追加したとき
  const OnClickAddTask = () => {
    if (text) {
      setTodoListNumber(todoListNumber + 1);
      settodoListInfo((names) => [
        ...names,
        { id: todoListNumber, title: text },
      ]);
      setText("");
      todoListNumber == 1 && setisAdded(true);
      console.log(isAdded);
    }
  };

  // チェックボックスを押した時
  const CheckboxhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (checkboxValue.includes(e.target.value)) {
      // 含ませていれば、配列をセットし直す
      setCheckboxValue(checkboxValue.filter((item) => item != e.target.value));
    } else {
      setCheckboxValue([...checkboxValue, e.target.value]);
    }
    // console.log(checkboxValue);
  };

  // 一括削除ボタンをクリック
  const deleteValue = () => {
    // console.log(checkboxValue);
    // console.log(todoListInfo);

    const changed = todoListInfo.filter(({ title }) => {
      return !checkboxValue.includes(title);
    });
    settodoListInfo(() => changed);
    setCheckboxValue([]);
  };

  // タスクを削除するボタンをクリックしたとき
  const deleteTask = (todoList: Todo) => {
    console.log(todoList);
    console.log(todoListInfo);
    const changed: Todo[] = todoListInfo.filter(({ title }) => {
      return title !== todoList.title;
    });
    // 配列.splice(index,1)
    settodoListInfo(() => changed);
    setCheckboxValue([]);
  };

  // タスクを変更するボタンをクリックしたとき
  const changeText = () => {
    const newTodo: Todo = { id: beforeEdittextnumber, title: Edittext };
    const newTodoListinfo = todoListInfo.filter(({ id }) => {
      return id !== beforeEdittextnumber;
    });
    const changed: Todo[] = [...[newTodo], ...newTodoListinfo];
    // const changed:Todo[] = todoListInfo.filter((key, index) => {
    //   if (key.id === beforeEdittextnumber) {
    //     todoListInfo[index].title = Edittext;
    //   }
    //   return todoListInfo;
    // }, []);
    // todoListInfoをwritableに直さないとできない

    settodoListInfo(() => changed);
    setEditText("");
    setisEdited(false);
  };

  return (
    <div className="container flex flex-col my-3 mx-auto  ">
      <div className="flex flex-row flex-wrap gap-4 items-center my-4">
        <input
          value={text}
          onChange={onChangeText}
          type="text"
          placeholder="タスクを入力してください"
          className="py-1 px-2 mx-2 placeholder-gray-600 text-darkgrey dark:text-darkgrey dark:bg-gray-300 rounded-lg outline-none"
        />
        <button onClick={OnClickAddTask} className="btn">
          追加
        </button>
        <div className="">
          {isAdded && (
            <div>
              追加されたタスクは
              {todoListInfo.length}個です
            </div>
          )}
        </div>
      </div>
      <ul className="container flex flex-col gap-3 ml-4">
        {todoListInfo.map((todoList) => {
          return (
            <div className=" container flex items-center" key={todoList.id}>
              <li className="mr-4 min-w-1/3 text-lg">
                <span className="mr-3">{todoList.id}</span>
                {todoList.title}
              </li>
              <input
                type="checkbox"
                value={todoList.title}
                onChange={CheckboxhandleChange}
                checked={checkboxValue.includes(todoList.title)}
                // ture or false
              />
              <div className="flex gap-3 text-center">
                <button
                  className="ml-3 text-xs border-2 btn "
                  onClick={() => {
                    setisEdited(!isEdited);
                    setbeforeEditTextnumber(todoList.id);
                    console.log(beforeEdittextnumber);
                  }}
                >
                  編集
                </button>
                <button
                  onClick={() => {
                    deleteTask(todoList);
                  }}
                  className=" text-xs border-2 btn"
                >
                  削除
                </button>
              </div>
            </div>
          );
        })}
        {isEdited && (
          <div className="flex flex-row gap-2">
            {beforeEdittextnumber}
            <input
              type="text"
              className="px-1 w-1/3 text-xs placeholder-gray-600 text-darkgrey dark:text-darkgrey dark:bg-gray-300 rounded-xl outline-none"
              placeholder="変更するタスクを入力してください"
              value={Edittext}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditText(e.target.value);
              }}
            />
            <button onClick={changeText} className=" text-xs btn">
              完了
            </button>
          </div>
        )}

        {isAdded && (
          <div className="flex flex-row gap-4 items-center mt-3 ml-4">
            <button onClick={deleteValue} className=" btn">
              一括削除
            </button>
            <p>選択されているタスク：{checkboxValue.join(" ")}</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TodoArea;
