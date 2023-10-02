
import { Color, transition } from 'utilities/constant';
import IconWrapper from 'components/IconWrapper';

import  Image from "components/Image"
import Tag from "src/assets/tag.svg"
import userCheck from "src/assets/User_Check.svg"
import userClose from "src/assets/User_Close.svg"
import userVoice from "src/assets/User_Voice.svg"
import { MenuProps, message, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';
import DropdownSelect from './DropdownSelect';
import useAppContext from 'src/hooks/useAppstate';
const handleMenuClick: MenuProps["onClick"] = (e) => {
 
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  
  
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Navbar = () => {
  const {state}= useAppContext()
  return (
    <div
      style={{
        display: "flex",
        fontWeight: "300",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3
          style={{
            color: Color.blue,
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0",
          }}
        >
          London Internship Program
        </h3>
        <p style={{ marginTop: "0rem", fontSize: "0.75rem" }}>London</p>
      </div>
      <div>
        <DropdownSelect />
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <IconWrapper>
          <Image src={Tag} alt="Tag" width="2rem" height="2rem" />
        </IconWrapper>
        <IconWrapper>
          <Image src={userClose} alt="Tag" width="2rem" height="2rem" />
        </IconWrapper>
        <IconWrapper>
          <Image src={userCheck} alt="Tag" width="2rem" height="2rem" />
        </IconWrapper>
        <IconWrapper>
          <Image src={userVoice} alt="Tag" width="2rem" height="2rem" />
        </IconWrapper>
        <Dropdown.Button
          menu={menuProps}
          icon={<DownOutlined />}
          type="primary"
        >
          Move To Video Interview
        </Dropdown.Button>
      </div>
    </div>
  );
}

export default Navbar