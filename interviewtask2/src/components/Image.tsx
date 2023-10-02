interface props {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Image = ({src,alt,width,height}:props) => {
  return <img src={src} alt={alt} style={{ width: width, height: height }} />;
};

export default Image;
