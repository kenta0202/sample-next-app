import React from "react";
import Layout from "../../components/Layout";
import { Link as Scroll } from "react-scroll";

const ScrollPage: React.VFC = () => {
  return (
    <>
      <Layout title="firstPost">
        <nav className="p-2 ">
          <Scroll
            to="concept"
            smooth={true}
            duration={600}
            offset={-50}
            className="font-medium text-[#008c8d] hover:opacity-50 hover:cursor-pointer"
          >
            コンセプト
          </Scroll>
        </nav>
        <section id="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas,
          expedita cupiditate itaque vero quam? Alias nobis iure molestias
          numquam magni harum laboriosam cumque consequuntur ad! Dolor cum dicta
          ipsa.\
        </section>
        <br />
        <section id="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas,
          expedita cupiditate itaque vero quam? Alias nobis iure molestias
          numquam magni harum laboriosam cumque consequuntur ad! Dolor cum dicta
          ipsa.\
        </section>
        <br />
        <section id="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas,
          expedita cupiditate itaque vero quam? Alias nobis iure molestias
          numquam magni harum laboriosam cumque consequuntur ad! Dolor cum dicta
          ipsa.\
        </section>
        <br />
        <section id="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas,
          expedita cupiditate itaque vero quam? Alias nobis iure molestias
          numquam magni harum laboriosam cumque consequuntur ad! Dolor cum dicta
          ipsa.\
        </section>
        <br />
        <section id="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas,
          expedita cupiditate itaque vero quam? Alias nobis iure molestias
          numquam magni harum laboriosam cumque consequuntur ad! Dolor cum dicta
          ipsa.\
        </section>
        <br />
        <section id="concept">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas,
          expedita cupiditate itaque vero quam? Alias nobis iure molestias
          numquam magni harum laboriosam cumque consequuntur ad! Dolor cum dicta
          ipsa.\
        </section>
      </Layout>
    </>
  );
};

export default ScrollPage;
