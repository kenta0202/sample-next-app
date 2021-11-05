import React, { useEffect as UseEffect, useState as UseState } from "react";
import { db } from "db/firebase";
// import { collection, onSnapshot } from "firebase/firestore";

type User = {
  name: string;
  age?: number;
  id?: string;
};

const addTodo = (user: string) =>
  db.collection("users").add({
    id: 1,
    name: user,
    age: 11,
  });

const changeTodo = (user: string) => {
  void db
    .collection("users")
    .doc("0qYjdHcHa1ASq57SXwFq")
    .update({ name: user, age: 99 });
};

const deleteTodo = () => {
  void db.collection("users").doc("0qYjdHcHa1ASq57SXwFq").delete();
};
const test = () => {
  // state
  const [users, setUsers] = UseState<User[]>([{ name: "Loading..." }]);

  // init
  UseEffect(() => {
    db.collection("users").onSnapshot((collection) => {
      const data = collection.docs.map<User>((doc) => ({
        id: doc.id,
        age: doc.data().age as number,
        name: doc.data().name as string,
      }));
      setUsers(data);
    });
  }, []);
  console.log(users);

  return (
    <div>
      <button onClick={() => addTodo("ああ")}>add</button>
      <br />
      <button onClick={() => changeTodo("おお")}>change</button>
      <br />
      <button onClick={() => deleteTodo()}>delete</button>
      <br />
      <div className="mt-5">
        {users.map((user) => (
          <ul key={user.id} className="flex flex-row gap-5">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.id}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default test;
