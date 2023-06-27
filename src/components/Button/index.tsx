import { FC, ReactNode } from "react";

interface LayoutI {
  children: ReactNode;
}

const Button: FC<LayoutI> = ({ children }) => {
  return (
    <div className="px-6 py-4 text-lg font-medium rounded-[100px] w-[190px] h-[56px] bg-red-50 cursor-pointer">
      {children}
    </div>
  );
};

export default Button;
