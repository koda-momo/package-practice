import { CustomButton } from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <CustomButton onClick={() => alert("ボタンが押されました。")}>
        ボタン
      </CustomButton>
    </>
  );
};

export default Home;
