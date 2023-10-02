import{useState} from "react"
import useAppContext from "hooks/useAppstate";
import { ActionType } from "utilities/constant/types";
import {
  minSideBarWidth,
  maxSideBarWidth,
  transition,
  sideBarIcons,
  Color,
  boxShadow,
} from "utilities/constant";

import {SettingOutlined} from "@ant-design/icons"

const SideBar = () => {
  const { state, dispatch } = useAppContext();
  const [activeIndex,setActiveIndex]=useState(0)

  const handlsideBarState = () => {
    dispatch({ type: ActionType.setToggleSideBar });
  };

  return (
    <div
      onMouseEnter={handlsideBarState}
      onMouseLeave={handlsideBarState}
      style={{
        width: state.isToggleSideBar ? maxSideBarWidth : minSideBarWidth,
        height: "100%",
        position: "fixed",
        top: 0,
        left: "0",
        backgroundColor: "white",
        transition: transition,
        boxShadow: boxShadow.sideBar,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"space-between",
            gap: "0.1rem",
          }}
        >
          <p
            style={{
              backgroundColor: "#D9D9D9",
              padding: "0.8rem 0.9rem",
              borderRadius: "50%",
            }}
          ></p>
          {sideBarIcons.map((IconComponent, index) => (
            <div
              key={index}
              style={{
                backgroundColor: activeIndex === index ? Color.lightBlue : "",
                borderRadius: "0.3rem",
              }}
              onClick={() => setActiveIndex(index)}
            >
              <IconComponent
                style={{
                  fontSize: "2.2rem",
                  marginTop: 0,
                  marginBottom: 0,
                  color: activeIndex === index ? Color.blue : "",
                  display: "flex:",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </div>
          ))}
        </div>

        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.7rem"}}>
          <SettingOutlined />
          <div style={{ backgroundColor: "#D7E5FD ", color: "#B1CDFD",padding:"0.3rem 0.4rem",fontSize:"0.65rem",borderRadius:"50%" }}>AS</div>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
