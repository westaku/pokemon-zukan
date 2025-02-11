import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styled from "styled-components";

type NavButtonProps = {
  isPrev: boolean;
  hundleClick: () => void;
};

const NavButtonContainer = styled.div`
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavButton = ({ isPrev, hundleClick }: NavButtonProps) => {
  return (
    <NavButtonContainer>
      <IconButton
        onClick={hundleClick}
        aria-label="prev"
        sx={{
          color: "#fff", // アイコン（線）の色
          backgroundColor: "#1976d2", // 背景色 (適宜お好みで)
          borderRadius: "50%", // 円形にする
          padding: "12px", // アイコン周りに余白
          fontSize: 24, // アイコンの大きさ (px で指定)
          "&:hover": {
            padding: "16px",
            backgroundColor: "#064686", // ホバー時の背景色
          },
        }}
      >
        {isPrev ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
      </IconButton>
    </NavButtonContainer>
  );
};

export default NavButton;
