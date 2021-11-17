import { GetStaticProps } from "next";
import Link from "next/link";
import { User } from "../../types";
import Layout from "../../components/General/Layout";
import List from "../../components/List";
import { server } from "../../../config";
type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => {
  console.log(server);
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const items: User[] = await fetch(`${server}/api/users`).then((res) =>
    res.json()
  );

  return { props: { items } };
};

export default WithStaticProps;
