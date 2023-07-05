import { Link, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = { description: string; children: string };

const PhoneNumber = (props: Props) => {
  const StyledText = styled(Typography)(({ theme }) => ({
    color: "#424242",
    fontSize: 20,
    [theme.breakpoints.down("xl")]: {
      fontSize: 14
    },
  }));

  return (
    <>
        <StyledText sx={{ fontWeight: 500 }}>
          {props.description}: &nbsp;
        </StyledText>
        <StyledText sx={{ fontWeight: 700, color: "#08212b" }}>
          <Link underline="none" href={`tel:${props.children}`}>
            {props.children}&nbsp;
          </Link>{" "}
          &nbsp;
        </StyledText>
    </>
  );
};

export default PhoneNumber;
