import React from "react";

type Props = {
  title: string;
  component: JSX.Element;
};

export const Container: React.VFC<Props> = ({ title, component }: Props) => {
  return (
    <section className="mt-5">
      <h1 className="mb-2 font-bold">{title}</h1>
      {component}
    </section>
  );
};
