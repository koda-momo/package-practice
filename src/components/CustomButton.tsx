import { FC } from "react";

type PropsType = {
  /**
   * ボタンのラベル.
   */
  children: string | JSX.Element;
  /**
   * 押下時に発火するメソッド.
   */
  onClick?: () => void;
};

const CustomButton: FC<PropsType> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="bg-red-300">
      {children}
    </button>
  );
};

export default CustomButton;
