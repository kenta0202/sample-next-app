import Link from "next/link";
import React, { Fragment } from "react";
import { useState } from "react";
import { Listbox as Lb } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

type Props = {
  category: string[];
  page: number;
};

export const Category: React.VFC<Props> = ({ category, page }: Props) => {
  if (!category.includes("All")) {
    category.unshift("All");
  }
  const [selectedCategory, setSelectedCategory] = useState<string>(category[0]);

  return (
    <>
      <Lb value={selectedCategory} onChange={setSelectedCategory}>
        <Lb.Button className="outline-none">
          <div className="flex flex-row gap-3 items-center py-1 px-2 mt-8 mb-2 w-32 dark:text-darkgrey bg-white dark:bg-whitegrey rounded-md outline-none">
            <span className="truncate ">{selectedCategory}</span>{" "}
            <span className="flex flex-1 justify-end">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </div>
        </Lb.Button>
        <Lb.Options className="outline-none">
          <div className="p-1 py-1 mt-1 space-y-[6px] w-32 max-h-60 text-base sm:text-sm bg-white rounded-md shadow-lg outline-none ">
            {category.map((v) => (
              <Lb.Option key={v} value={v} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`${
                      active
                        ? "bg-[#fee4a3] text-[#b68400] dark:bg-[#cceefb] dark:text-[#0a2530]"
                        : "bg-white text-black "
                    }  pl-1 `}
                  >
                    <Link href={{ query: { category: v, page: page } }}>
                      <a className="flex flex-row">
                        {selected && (
                          <CheckIcon
                            width="14px"
                            className="mr-1 text-[#fa811e] dark:text-[#2894bf] "
                          />
                        )}
                        <span className={`${!selected && " ml-4"}`}>{v}</span>
                      </a>
                    </Link>
                  </li>
                )}
              </Lb.Option>
            ))}
          </div>
        </Lb.Options>
      </Lb>
    </>
  );
};
