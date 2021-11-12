// import Contact from "components/Contact";
import Layout from "components/General/Layout";
import React from "react";
import TodoArea from "components/Practice/TodoArea";
import { Heading } from "components/Practice/Heading";
// import { Form } from "components/Practice/Form";
const practice = () => {
  return (
    <Layout>
      <Heading
        title="TodoApp"
        feature="CRUD(Create,Read,Update,Delete)"
        tools="状態管理ツールRecoil"
      />
      <TodoArea />
      {/* <Heading
        title="Contact"
        feature="CRUD(Create,Read,Update,Delete)"
        tools="状態管理ツールRecoil"
      /> */}
      {/* <Form /> */}
    </Layout>
  );
};

export default practice;
