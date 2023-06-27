import { FC, ReactNode } from "react";

import Image from "next/image";

interface LayoutI {
  children: ReactNode;
}

const Button: FC<LayoutI> = ({ children }) => {
  return (
    <div className="px-6 py-4 text-lg font-medium rounded-[100px] w-[190px] bg-gradient-width cursor-pointer relative flex flex-row">
      {children}
      <Image
        className="ml-[10px]"
        width={24}
        height={24}
        src="/images/button/ic_vector.svg"
        alt="vector"
      />
    </div>
  );
};

export default Button;
