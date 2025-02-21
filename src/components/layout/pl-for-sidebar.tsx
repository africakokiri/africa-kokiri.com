import { type ReactNode } from "react";

export const PlForSidebar = ({
  children
}: {
  readonly children: ReactNode;
}) => {
  return <div className="relative pl-32">{children}</div>;
};
