import React from "react";
import { Menu } from "@headlessui/react";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { AiOutlineCaretDown } from "@react-icons/all-files/ai/AiOutlineCaretDown";
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";

const Auth = () => {
  const user = {
    name: "eyodohan",
    avatar: <CgProfile className="w-6 h-6" />,
  };
  return (
    <Menu as="nav" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl ${
              open ? "bg-active" : "bg-black"
            } hover:bg-active p-3`}
          >
            <a href="#" className=" rounded-full p-0.5 flex items-center mr-2">
              {user.avatar}
            </a>
            <span className="text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && "rotate-180"}>
              <AiOutlineCaretDown />
            </span>
          </Menu.Button>
          <Menu.Items className="absolute top-full p-1 right-0 w-48 bg-active rounded translate-y-2">
            <Menu.Item>
              {({ active }) => (
                <div className="flex items-center justify-between">
                  <a
                    className={`h-10 flex items-center px-2 text-sm rounded ${
                      active && "bg-white bg-opacity-10"
                    }`}
                    href="#"
                  >
                    Account
                  </a>
                  <BiLinkExternal as="div" className="mr-2" />
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="#"
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && "bg-white bg-opacity-20"
                  }`}
                  href="#"
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Auth;
