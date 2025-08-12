import React from "react";
import HomeBG from "../assets/HomeBG.webp";
import FirstWingLogo from "../assets/FirstWingLogo.webp";
import IDFCLogo from "../assets/IDFCLogo.webp";
import Arrow from "../assets/Arrow.webp";
import ArrowWhite from "../assets/ArrowWhite.png";
import FirstWingConnect from "../assets/FirstWingConnect.webp";
import { Box, Button, Typography } from "@mui/material";
import { MetricCardsGrid, MetricData } from "./utility/MetricCard";
import { scrollDown } from "./utility/ScrollDown";

const dashboardMetrics: MetricData[] = [
  { id: "1", value: "70K+", label: "YouTube Views" },
  { id: "2", value: "50K+", label: "Shortlistd Startups" },
  { id: "3", value: "30K+", label: "Startup Pitches" },
  { id: "4", value: "20K+", label: "Investors" },
  { id: "5", value: "10K+", label: "Inclusive Webinars" },
];

type HomeProps = {
    handleNextPage: () => void; // This should navigate to GuessThePerson1
};

function Home({ handleNextPage }: HomeProps) {
  return (
    <>
      <Box
        // Background Image
        sx={{
          backgroundImage: `url(${HomeBG})`,
          //   width: "390px",
          backgroundSize: "cover",
        }}
      >
        {/* top logos */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "24px",
          }}
        >
          <img
            src={FirstWingLogo}
            alt="First Wing Logo"
            style={{ height: "48px" }}
          />
          <img src={IDFCLogo} alt="Right Logo" style={{ height: "48px" }} />
        </div>

        {/* GuessThe text*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
            padding: "24px",
            mt: "-19px",
          }}
        >
          <Typography
            sx={{
              fontSize: "90px",
              fontWeight: 700,
              color: "#981922",
              fontFamily: "DM Sans, sans-serif",
              lineHeight: "55px",
              letterSpacing: "-4%",
              verticalAlign: "middle",
            }}
          >
            Guess
            <span
              style={{
                fontSize: "85px",
                fontWeight: 700,
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              {" "}
            </span>
            <span
              style={{
                fontSize: "140px",
                fontWeight: 900,
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: "-6%",
                verticalAlign: "middle",
                marginLeft: "5px",
              }}
            >
              the
            </span>
          </Typography>
        </Box>

        {/* nail it text  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "left",
            textAlign: "left",
            padding: "24px",
            marginTop: "290px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#000000",
              fontFamily: "inter, sans-serif",
              lineHeight: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            Nail It in 90 seconds
            <br />
            Your Investor Awaits!
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 600,
                color: "#000000",
                fontFamily: "inter, sans-serif",
                lineHeight: "40px",
                letterSpacing: "0%",
                verticalAlign: "middle",
                textAlign: "left",
                mt: "40px",
              }}
            >
              Game on!
            </Typography>
            <Button onClick={() => scrollDown(1000)}>
              <img
                src={Arrow}
                alt="Arrow"
                style={{ width: "70px", height: "70px" }}
                // onClick={handleNextPage}
              />
            </Button>
          </Box>
        </Box>

        {/* First Wing Connect  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "24px",
            mt: "60px",
          }}
        >
          <img
            src={FirstWingConnect}
            alt="First Wing Connect Logo"
            style={{ height: "112px" }}
          />
        </Box>

        {/* 1st point */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "left",
            textAlign: "left",
            padding: "40px",
            mt: "60px",
          }}
        >
          <Typography
            sx={{
              fontSize: "85px",
              fontWeight: 500,
              color: "#000000",
              fontFamily: "inter, sans-serif",
              lineHeight: "32px",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            1.
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "semi-bold",
              color: "#000000",
              fontFamily: "inter, sans-serif",
              lineHeight: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              mt: "60px",
              pl: "10px",
            }}
          >
            Spot the speaker using clues in 90 seconds
          </Typography>

          <Button
            onClick={() => scrollDown(800)}
            sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}
          >
            <img
              src={Arrow}
              alt="Arrow"
              style={{ width: "70px", height: "70px" }}
              // onClick={handleNextPage}
            />
          </Button>
        </Box>

        {/* 2nd point */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "left",
            textAlign: "left",
            padding: "40px",
            mt: "450px",
          }}
        >
          <Typography
            sx={{
              fontSize: "85px",
              fontWeight: 500,
              color: "#ffffff",
              fontFamily: "inter, sans-serif",
              lineHeight: "32px",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            2.
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "semi-bold",
              color: "#ffffff",
              fontFamily: "inter, sans-serif",
              lineHeight: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              mt: "60px",
              //   pl: "10px",
            }}
          >
            You have 3 strikes Choose wisely!
          </Typography>

          <Button
            onClick={() => scrollDown(600)}
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              mt: "10px",
            }}
          >
            <img
              src={ArrowWhite}
              alt="Arrow"
              style={{ width: "64px", height: "32px" }}
              // onClick={handleNextPage}
            />
          </Button>
        </Box>

        {/* 3rd point */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "left",
            textAlign: "left",
            padding: "40px",
            mt: "360px",
          }}
        >
          <Typography
            sx={{
              fontSize: "85px",
              fontWeight: 500,
              color: "#000000",
              fontFamily: "inter, sans-serif",
              lineHeight: "32px",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
          >
            3.
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "semi-bold",
              color: "#000000",
              fontFamily: "inter, sans-serif",
              lineHeight: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              mt: "60px",
              //   pl: "10px",
            }}
          >
            Guess right,
            <br /> you’re lit. <br /> Guess wrong,
            <br /> you’re out.
          </Typography>

          <Button
            onClick={() => scrollDown(800)}
            sx={{ display: "flex", alignItems: "left", justifyContent: "left" }}
          >
            <img
              src={Arrow}
              alt="Arrow"
              style={{ width: "70px", height: "70px" }}
              // onClick={handleNextPage}
            />
          </Button>
        </Box>

        {/* Guess now  */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "left",
            textAlign: "left",
            padding: "40px",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "semi-bold",
              color: "#ffffff",
              fontFamily: "inter, sans-serif",
              lineHeight: "40px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              mt: "75px",
              //   pl: "10px",
            }}
          >
            Guess now!
          </Typography>

          <Button>
            <img
              src={ArrowWhite}
              alt="Arrow"
              style={{
                width: "64px",
                height: "32px",
                rotate: "270deg",
                marginTop: "75px",
              }}
              onClick={handleNextPage}
            />
          </Button>
        </Box>

        {/* last section  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            // textAlign: "center",
            padding: "24px",
            mt: "10px",
          }}
        >
          <img
            src={FirstWingConnect}
            alt="First Wing Connect"
            style={{
              width: "180px",
              height: "auto",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "left",
            }}
          />

          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "semi-bold",
              color: "#000000",
              fontFamily: "inter, sans-serif",
              lineHeight: "24px",
              textAlign: "center",
              letterSpacing: "0%",
              verticalAlign: "middle",
              mt: "300px",
              mb: "20px",
            }}
          >
            Glimpse of power packed Season 1
          </Typography>

          <MetricCardsGrid metrics={dashboardMetrics} />
        </Box>
      </Box>
    </>
  );
}

export default Home;
