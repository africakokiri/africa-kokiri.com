import { robotoMono } from "@/styles/fonts";

import Image from "next/image";
import { type ReactNode } from "react";

export const MobileNotAvailableWrapper = ({
  children
}: {
  readonly children: ReactNode;
}) => {
  return (
    <>
      <div
        className="absolute left-0 top-0 z-50 flex h-full w-full flex-col
items-center justify-center gap-8 bg-white md:hidden"
      >
        <Image
          src="/icons/kokiri.svg"
          alt=""
          width={128}
          height={128}
        />
        <p className="flex flex-col items-center justify-center gap-4">
          <span
            className={`${robotoMono.className} text-3xl font-light
tracking-widest`}
          >
            4 0 3
          </span>
          <span className="text-sm">모바일에서는 접속 불가해요.</span>
        </p>
      </div>
      <div>{children}</div>
    </>
  );
};
