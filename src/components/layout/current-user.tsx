import { Popover } from "antd";
import React from "react";

const CurrentUser = () => {
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        overlayStyle={{ zIndex: 999 }}
        overlayInnerStyle={{ padding: 0 }}
      ></Popover>
    </>
  );
};

export default CurrentUser;
