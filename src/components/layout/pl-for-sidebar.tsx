import { type ReactNode } from "react";

export const PlForSidebar = ({
  children
}: {
  readonly children: ReactNode;
}) => {
  return (
    <div
      className="relative flex h-full w-full justify-center
justify-items-center p-8"
    >
      {children}
    </div>
  );
};
