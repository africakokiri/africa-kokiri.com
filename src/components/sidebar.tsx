import { robotoMono } from "@/styles/fonts";

const HorizontalLine = () => {
  return (
    <hr
      className="my-4 flex w-full justify-center border-[0.5px]
border-black/15"
    />
  );
};

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 min-h-full bg-neutral-200 p-4">
      <p className={`${robotoMono.className} text-lg`}>Africa Kokiri</p>
      <HorizontalLine />
    </div>
  );
};
