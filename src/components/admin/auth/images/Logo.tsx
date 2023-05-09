import Icon from "./Triacom_Logo.jpg";

type Props = {
  height: number
};

const Logo = (props: Props) => {
  return (
    <img
      className="logo"
      height={props.height}
      src={Icon}
    >
      {/* <LockOutlinedIcon /> */}
    </img>
  );
};

export default Logo;
