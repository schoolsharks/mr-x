import { Box, Button, Typography } from "@mui/material";
import Timeout from "../assets/TimeOut.png";
import Arrow from "../assets/Arrow.webp"; // Assuming you have an arrow image for the button

interface TimeOutProps {
  handleNextPage: () => void;
}

function TimeOut({ handleNextPage }: TimeOutProps) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Timeout})`,
          backgroundSize: "100% 100%",
          minHeight: "844px",
        }}
      ></Box>

      

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "left",
            textAlign: "left",
            // padding: "40px 0px 0px 24px",
            //   gap: "50px",
            mt: "-85px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 600, // semi-bold
              color: "#000000",
              fontFamily: "Inter, sans-serif",
              lineHeight: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              mt: "5px",
              ml: "24px",
            }}
          >
            Next Speaker
          </Typography>

          <Button onClick={handleNextPage} sx={{ mr: "24px" }}>
            <img
              src={Arrow}
              alt="Arrow"
              style={{
                width: "70px",
                height: "70px",
                rotate: "270deg",
                marginTop: "-15px",
              }}
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default TimeOut;
