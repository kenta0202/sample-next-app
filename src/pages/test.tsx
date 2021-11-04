import React, { useEffect as UseEffect, useState as UseState } from "react";
import { db } from "db/firebase";
import { collection, onSnapshot } from "@firebase/firestore";

type User = {
  name: string;
  age?: number;
  id?: string;
};

const test = () => {
  // state
  const [users, setUsers] = UseState<User[]>([{ name: "Loading..." }]);

  // init
  UseEffect(() => {
    db.collection("users").onSnapshot((collection) => {
      const data = collection.docs.map<User>((doc) => ({
        id: doc.id,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        age: doc.data().age,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        name: doc.data().name,
      }));
      setUsers(data);
    });
  }, []);
  console.log(users);

  return <div>test</div>;
};

export default test;
