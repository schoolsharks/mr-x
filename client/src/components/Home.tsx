// import FirstWingLogo from "../assets/FirstWingLogo.webp";
// import IDFCLogo from "../assets/IDFCLogo.webp";
import Arrow from "../assets/Arrow.webp";
import ArrowWhite from "../assets/ArrowWhite.png";
import FirstWingConnect from "../assets/FirstWingConnect.webp";
import { Box, Button, Typography } from "@mui/material";
// import {  MetricData } from "./utility/MetricCard";
import { scrollDown } from "./utility/ScrollDown";
// import TopSectionBG from "../assets/TopSectionBG.webp";
import NailItBg from "../assets/NailItBg.webp";
import LowerSectionBg from "../assets/LowerSectionBg.webp";
import GuessNowBG from "../assets/GuessNowBG.webp";
import HomeCards from "../assets/HomeCards.png";
import HomeHeader from "../assets/HomeHeader.webp";

// const dashboardMetrics: MetricData[] = [
//   { id: "1", value: "70K+", label: "YouTube Views" },
//   { id: "2", value: "50K+", label: "Shortlistd Startups" },
//   { id: "3", value: "30K+", label: "Startup Pitches" },
//   { id: "4", value: "20K+", label: "Investors" },
//   { id: "5", value: "10K+", label: "Inclusive Webinars" },
// ];

type HomeProps = {
  handleNextPage: () => void; // This should navigate to GuessThePerson1
};

function Home({ handleNextPage }: HomeProps) {
  return (
    <>
      <Box
        sx={{
          // backgroundImage: `url(${HomeHeader})`,
          // backgroundSize: "100% 100%",
          // minHeight: "620px",  
        }}
      >
        <img
          src={HomeHeader}
          alt="Home Cards"
          style={{ width: "100%", height: "auto" }}
        />
        {/* <Box> */}
          {/* top logos */}
          {/* <div
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
          </div> */}

          {/* GuessThe text*/}
          {/* <Box
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
          </Box> */}
          {/* nextwinglogo  */}

          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "24px",
              mt: "180px",
              ml: "84px",
            }}
          >
            <img
              src={FirstWingConnect}
              alt="First Wing Connect Logo"
              style={{ height: "94px" }}
            />
          </Box> */}
        {/* </Box> */}
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
          backgroundImage: `url(${NailItBg})`,
          backgroundSize: "100% 100%",
          minHeight: "180px",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 600,
            color: "#ffffff",
            fontFamily: "inter, sans-serif",
            lineHeight: "25px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            mt: "10px",
          }}
        >
          Nail It in 90 seconds
          <br />
          Your Investor Awaits!
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#ffffff",
            fontFamily: "inter, sans-serif",
            lineHeight: "16px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            marginTop: "18px",
            maxWidth: "60%",
          }}
        >
          The quickest 10 will make the cut for a 1-on-1 with the investor.
        </Typography>
      </Box>

      {/* lower section */}
      <Box
        sx={{
          backgroundImage: `url(${LowerSectionBg})`,
          backgroundSize: "100% 100%",
          minHeight: "2576px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "24px",
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
          <Button onClick={() => scrollDown(700)}>
            <img
              src={Arrow}
              alt="Arrow"
              style={{ width: "70px", height: "70px" }}
              // onClick={handleNextPage}
            />
          </Button>
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
            mt: "100px",
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
            You have 3 Strikes. Guess right to win, Guess wrong & you’re out.
          </Typography>

          <Button
            onClick={() => scrollDown(1600)}
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

        {/* First Wing Connect  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "24px",
            mt: "80px",
            ml: "184px",
          }}
        >
          <img
            src={FirstWingConnect}
            alt="First Wing Connect Logo"
            style={{ height: "51px" }}
          />
        </Box>

        {/* last section */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              // alignItems: "center",
              // textAlign: "center",
              padding: "24px",
            }}
          >
            {/* <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "semi-bold",
                color: "#000000",
                fontFamily: "inter, sans-serif",
                lineHeight: "40px",
                textAlign: "left",
                letterSpacing: "0%",
                verticalAlign: "middle",
                mt: "120px",
                mb: "50px",
              }}
            >
              Glimpse of power packed Season 1
            </Typography> */}

            {/* <MetricCardsGrid metrics={dashboardMetrics} /> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "24px",
                mt: "80px",
                // ml: "84px",
              }}
            >
              <img
                src={HomeCards}
                alt="First Wing Connect Logo"
                style={{ height: "594px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                mt: "20px",
              }}
            >
              <Button onClick={() => scrollDown(-1900)}>
                <img
                  src={Arrow}
                  alt="Arrow"
                  style={{ width: "70px", height: "70px", rotate: "180deg" }}
                  // onClick={handleNextPage}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${GuessNowBG})`,
            backgroundSize: "100% 100%",
            minHeight: "131px",
            cursor:"pointer"
          }}
          onClick = { handleNextPage }
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "left",
              textAlign: "left",
              padding: "40px 0px 0px 24px",
              //   gap: "50px",
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
                mt: "5px",
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
                  marginTop: "5px",
                }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
