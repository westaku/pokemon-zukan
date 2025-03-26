import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const onClickLogo = () => {
    router.push("/pokemon/page/1");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={onClickLogo}
          >
            ポケモン図鑑
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
