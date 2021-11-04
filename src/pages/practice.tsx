import Contact from "components/Contact";
import Layout from "components/Layout";
import React from "react";
import { headInformation } from "data/headInformation";
import TodoArea from "components/TodoArea";
import { Heading } from "components/Heading";
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
      <Heading
        title="Contact"
        feature="CRUD(Create,Read,Update,Delete)"
        tools="状態管理ツールRecoil"
      />
      <Contact />
    </Layout>
  );
};

export default practice;
