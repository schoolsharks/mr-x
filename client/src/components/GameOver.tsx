import { Box, Button, Typography } from "@mui/material";
import GameOverImage from "../assets/GameOver.webp"; // Using X.webp as game over image
import Arrow from "../assets/Arrow.webp";
import TimeOutButton from "../assets/TimeOutButton.webp"; // Reusing the button background

interface GameOverProps {
  handleNextPage: () => void;
}

function GameOver({ handleNextPage }: GameOverProps) {
  return (
    <>
      <Box
        sx={
          {
            // backgroundImage: `url(${GameOverImage})`,
            // backgroundSize: "100% 100%",
            // backgroundSize: "contain",
            // backgroundRepeat: "no-repeat",
            // minHeight: "844px",
          }
        }
      >
        <img
          src={GameOverImage}
          alt="Game Over"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${TimeOutButton})`,
          backgroundSize: "100% 100%",
          minHeight: "130px",
        }}
      >
        {/* <img src={TimeOutButton} alt="Game Over Button" style={{ width: "100%", height: "auto" }} /> */}
        <Box onClick={handleNextPage}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "left",
            textAlign: "left",
            // padding: "40px 0px 0px 24px",
            //   gap: "50px",
            // mt: "-105px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 600, // semi-bold
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
              lineHeight: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              mt: "45px",
              ml: "24px",
            }}
          >
            Register Now 
          </Typography>

          <Button  sx={{ mr: "24px" }}>
            <img
              src={Arrow}
              alt="Arrow"
              style={{
                width: "70px",
                height: "70px",
                rotate: "270deg",
                marginTop: "25px",
              }}
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default GameOver;
