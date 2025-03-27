import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/material/styles";
import Link from "next/link";

type NavButtonProps = {
  isPrev: boolean;
  href: string;
};

const NavButtonContainer = styled("div")({
  padding: "0 4%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const NavButton = ({ isPrev, href }: NavButtonProps) => {
  return (
    <NavButtonContainer>
      <Link href={href} prefetch={false} scroll={false} shallow={false}>
        <IconButton
          aria-label={isPrev ? "prev" : "next"}
          sx={{
            color: "#fff",
            backgroundColor: "#1976d2",
            borderRadius: "50%",
            padding: "12px",
            fontSize: 24,
            "&:hover": {
              padding: "16px",
              backgroundColor: "#064686",
            },
          }}
        >
          {isPrev ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
        </IconButton>
      </Link>
    </NavButtonContainer>
  );
};

export default NavButton;
