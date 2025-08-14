import React from "react";
import { Box, Button, Typography } from "@mui/material";
import MeetTheSpeakers from "../../assets/MeetTheSpeakerBG.webp";
import Header from "../GuessTHePerson/Header";
import SpeakerCard from "./SpeakerCard";
import { SpeakerData } from "../../Data/SpeakerData";
import Strikes from "../../assets/Strikes.png"; // Assuming you have an image for strikes
import { scrollDown } from "../utility/ScrollDown";
import Arrow from "../../assets/Arrow.webp"; // Assuming you have an arrow image for the button
import FirstWingConnect from "../../assets/FirstWingConnect.webp";
import MeetTheSpeakerLowerSection from "../../assets/MeetTheSpeakerLowerSection.png"; // Assuming you have a lower section image

const Registration2: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${MeetTheSpeakers})`,
          backgroundSize: "100% 100%",
          minHeight: "2386px",
        }}
      >
        <Box
          sx={{
            mb: "-10px",
          }}
        >
          <Header showTimer={false} showStrikes={false} />
        </Box>

        {/* meet the speakers */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "35px",
            letterSpacing: "0%",
            color: "#981922",
            textAlign: "left",
            margin: "0px 20px",
            mb: 4,
          }}
        >
          Meet your <br />
          Speakers
        </Typography>

        {/* Speaker Cards */}
        <Box
          sx={{
            // px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {SpeakerData.map((speaker, index) => (
            <SpeakerCard
              key={index}
              speaker={speaker}
              topText={`Speaker ${index + 1}`}
              flipped={index % 2 === 1}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "left",
            p: 4,
            mt: "60px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "35px",
              lineHeight: "100%",
              letterSpacing: "0%",
              verticalAlign: "middle",
              color: "#000000",
            }}
          >
            Double Win! <br />
            You cracked both speakers
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "100%",
              textAlign: "left",
              letterSpacing: 0,
              verticalAlign: "middle",
              color: "#000000",
              mt: 4,
            }}
          >
            No of Strikes
          </Typography>
          <Box sx={{ mt: 2 }}>
            <img
              src={Strikes}
              alt="Strikes"
              style={{ width: "111px", height: "25px" }}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "100%",
              textAlign: "left",
              letterSpacing: 0,
              verticalAlign: "middle",
              color: "#000000",
              mt: 4,
            }}
          >
            Time Taken
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "25px",
              lineHeight: "100%",
              textAlign: "left",
              letterSpacing: 0,
              verticalAlign: "middle",
              color: "#000000",
              mt: 1.5,
            }}
          >
            3 Minutes
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "100%",
              textAlign: "left",
              letterSpacing: 0,
              maxWidth: "70%",
              verticalAlign: "middle",
              color: "#000000",
              mt: 4,
            }}
          >
            Reward unlocked You’re now in the waiting line!
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "100%",
              textAlign: "left",
              letterSpacing: 0,
              maxWidth: "70%",
              verticalAlign: "middle",
              color: "#000000",
              mt: 4,
            }}
          >
            Announcement on
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "25px",
              lineHeight: "100%",
              textAlign: "left",
              letterSpacing: 0,
              verticalAlign: "middle",
              color: "#000000",
              mt: 0.5,
            }}
          >
            28th August, 2025
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "left", mt: 2 }}>
            <Button onClick={() => scrollDown(700)}>
              <img
                src={Arrow}
                alt="Arrow"
                style={{ width: "70px", height: "70px" }}
                // onClick={handleNextPage}
              />
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "24px",
              mt: "-30px",
              ml: "134px",
            }}
          >
            <img
              src={FirstWingConnect}
              alt="First Wing Connect Logo"
              style={{ height: "77px" }}
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 40,
              backgroundSize: "100% 100%",
              height: "664px",
              width: "100%",
              backgroundImage: `url(${MeetTheSpeakerLowerSection})`,
            }}
          >
            {/* <img
              src={MeetTheSpeakerLowerSection}
              alt="Meet The Speaker Lower Section"
              // style={{  }}
            /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Registration2;
