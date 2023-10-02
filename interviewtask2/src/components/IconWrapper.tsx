import  { ReactNode } from "react";
import { Color, boxShadow } from "src/utilities/constant";
interface props {
  children: ReactNode;
}
const IconWrapper = ({ children }: props) => {
  return (
    <div
      style={{
        backgroundColor: Color.white,
        borderRadius: "0.2rem",
        width: "1.5rem",
        height: "1.5rem",
        boxShadow: boxShadow.iconWrapper,
        padding:"0.5rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}
    >
     {children}
    </div>
  );
};

export default IconWrapper;
