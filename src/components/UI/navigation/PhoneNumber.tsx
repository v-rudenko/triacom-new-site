import { Link, styled, Typography } from "@mui/material";

type Props = { description: string; children: string };

const PhoneNumber = (props: Props) => {
  const StyledText = styled(Typography)({
    color: "#424242",
    fontSize: 14,
  });

  return (
    <>
      <StyledText sx={{ fontWeight: 500 }}>
        {props.description}: &nbsp;
      </StyledText>
      <StyledText sx={{ fontWeight: 700, color: "#08212b" }}>
        <Link underline="none" href={`tel:${props.children}`}>
          {props.children}
        </Link>{" "}
        &nbsp;
      </StyledText>
    </>
  );
};

export default PhoneNumber;
