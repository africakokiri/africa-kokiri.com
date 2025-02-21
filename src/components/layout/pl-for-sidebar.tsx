import { type ReactNode } from "react";

export const PlForSidebar = ({
  children
}: {
  readonly children: ReactNode;
}) => {
  return (
    <div
      className="relative -z-10 flex h-full w-full items-center
justify-center p-8"
    >
      <div className="min-w-[650px] bg-blue-200">{children}</div>
    </div>
  );
};
