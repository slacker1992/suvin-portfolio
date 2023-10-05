import React from "react";

type Props = {
  children: any;
};
const MainSectionLayout: React.FC<any> = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 float-right w-full snap-y  snap-mandatory snap-center">
      <div className="container flex max-w-[1130px]  mx-auto justify-center relative z-[3]">
        <div className="max-w-[770px] w-full ml-auto h-screen flex flex-col items-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainSectionLayout;
