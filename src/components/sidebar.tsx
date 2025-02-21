import { DarkmodeSwitch } from "@/components/darkmode-switch";
import { CATEGORY } from "@/config/category";

import Link from "next/link";

const HorizontalLine = () => {
  return (
    <hr
      className="my-6 flex w-full justify-center border-[0.5px]
border-black/15 dark:border-neutral-600"
    />
  );
};

export const Sidebar = () => {
  return (
    <div
      className="fixed left-0 top-0 z-50 min-h-full bg-neutral-200 p-4
dark:bg-neutral-800"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link
          href="/"
          className="text-xl"
        >
          Africa Kokiri
        </Link>
        <DarkmodeSwitch />
      </div>
      <HorizontalLine />
      <ul className="space-y-4 text-xl">
        {CATEGORY.map(({ id, name }) => {
          return (
            <li
              key={id}
              className="w-full"
            >
              <Link
                className="inline-block w-full"
                href={name.toLowerCase()}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
