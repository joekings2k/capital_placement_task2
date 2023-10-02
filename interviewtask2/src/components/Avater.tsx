import React from 'react'
import { Color } from 'src/utilities/constant';
interface props{
firstname? :string;
lastname?:string;
}
const Avater = ({firstname,lastname}:props) => {
  
 const first = firstname ?firstname[0]:""
 const second= lastname ?lastname[0]:""
  return <div style={{fontSize:"1.6rem",fontWeight:600,color:Color.AvaterTextColort,backgroundColor:Color.backgroundColor,padding:"0.5rem 0.6rem",borderRadius:"50%"}}>{`${first}${second}`}</div>;
}

export default Avater