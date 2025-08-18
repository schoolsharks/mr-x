import { Box, Button, Typography } from "@mui/material";
import Timeout from "../assets/TimeOut1.webp";
import Arrow from "../assets/Arrow.webp"; // Assuming you have an arrow image for the button
import TimeOutButton from "../assets/TimeOutButton.webp"; // Assuming you have a button image
interface TimeOutProps {
  handleNextPage: () => void;
}

function TimeOut({ handleNextPage }: TimeOutProps) {
  return (
    <>
      <Box
        sx={{
          // backgroundImage: `url(${Timeout})`,
          // backgroundSize: "100% 100%",
          // backgroundSize: "contain",
          // backgroundRepeat: "no-repeat",
          // minHeight: "844px",
        }}
      >
        <img src={Timeout} alt="Timeout" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${TimeOutButton})`,
          backgroundSize: "100% 100%",
          minHeight: "130px"
      }}>
        {/* <img src={TimeOutButton} alt="Timeout" style={{ width: "100%", height: "auto" }} /> */}
        <Box
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
              color: "#000000",
              fontFamily: "Inter, sans-serif",
              lineHeight: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              mt: "45px",
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
                marginTop: "25px",
              }}
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default TimeOut;
