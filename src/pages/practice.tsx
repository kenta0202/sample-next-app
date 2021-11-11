// import Contact from "components/Contact";
import Layout from "components/General/Layout";
import React from "react";
import { headInformation } from "data/headInformation";
import TodoArea from "components/Practice/TodoArea";
import { Heading } from "components/Practice/Heading";
// import { Form } from "components/Practice/Form";
// import { Form } from "components/Practice/Form";
const practice = () => {
  const head = headInformation.practice;
  return (
    <Layout title={head.title} metaDescription={head.metaDescription}>
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
