import React from "react";
import { Icon } from "./Icon";
import { useContext } from "react";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/admin/login");
  };

  return (
    <>
      <nav className="w-full flex items-center justify-between mb-[5%]">
        <p className="text-[48px] font-[900] leading-[20px] text-white">APP</p>

        <button
          onClick={logout}
          className="flex items-center gap-1 text-[16px] w-[128px] h-[48px] py-[12px] px-[24px] leading-[20px] font-[100] bg-[#9BFF00]  rounded-[40px]"
        >
          <Icon width={24} height={24} fill="white" />
          Logout
        </button>
      </nav>
    </>
  );
};

export default Navbar;
