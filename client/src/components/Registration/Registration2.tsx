import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import MeetTheSpeakers from "../../assets/MeetTheSpeakerBG1.webp";
import Header from "../GuessTHePerson/Header";
import SpeakerCard from "./SpeakerCard";
import { SpeakerData } from "../../Data/SpeakerData";
import { scrollDown } from "../utility/ScrollDown";
import Arrow from "../../assets/Arrow.webp"; // Assuming you have an arrow image for the button
import FirstWingConnect from "../../assets/FirstWingConnect.webp";
import QuestionBluredBox from "../../assets/QuestionBluredBox.png";
import LastImg1 from "../../assets/image 60.webp";
import LastImg2 from "../../assets/image 61.webp";
import {
  getGameData,
  completeGame,
  type GameData,
} from "../../utils/gameStorage";
import crossed from "../../assets/Crossed.png";
import unfilledCross from "../../assets/UnfilledCross.png";

const Registration2: React.FC = () => {
  const [gameData, setGameData] = useState<GameData | null>(null);

  useEffect(() => {
    // Load game data when component mounts
    const data = getGameData();
    setGameData(data);

    // Mark game as completed if not already completed
    if (data && !data.gameCompleted) {
      completeGame();
    }
  }, []);

  // Helper function to format time from seconds to readable format
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes === 0) {
      return `${remainingSeconds} Second${remainingSeconds !== 1 ? "s" : ""}`;
    } else if (remainingSeconds === 0) {
      return `${minutes} Minute${minutes !== 1 ? "s" : ""}`;
    } else {
      return `${minutes}m ${remainingSeconds}s`;
    }
  };

  // Get actual guessing time (sum of time spent on each candidate)
  const getTimeTaken = (): string => {
    if (!gameData) return "0 Seconds";

    // Use finalScore.totalTimeTaken if available (after game completion)
    if (gameData.finalScore?.totalTimeTaken !== undefined) {
      return formatTime(gameData.finalScore.totalTimeTaken);
    }

    // Otherwise, calculate total time spent actually guessing (sum of individual candidate times)
    const totalGuessingTime = gameData.candidateResults.reduce(
      (total, candidate) => {
        return total + (candidate.timeTaken || 0);
      },
      0
    );

    return formatTime(totalGuessingTime);
  };

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
            gap: 2.5,
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
            mt: "100px",
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
          <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={(gameData?.strikes ?? 0) >= 1 ? crossed : unfilledCross}
              alt="Strike 1"
              style={{ height: "25px", width: "32px" }}
            />
            <img
              src={(gameData?.strikes ?? 0) >= 2 ? crossed : unfilledCross}
              alt="Strike 2"
              style={{ height: "25px", width: "32px" }}
            />
            <img
              src={(gameData?.strikes ?? 0) >= 3 ? crossed : unfilledCross}
              alt="Strike 3"
              style={{ height: "25px", width: "32px" }}
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
            {getTimeTaken()}
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
              mt: 37,
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: 500,
                color: "#fffffff",
                fontFamily: "Inter",
                textAlign: "left",
                lineHeight: "30px",
                p: "24px",
              }}
            >
              Note:
              <br />
              The quickest 10 will make the cut for a 1-on-1 with the investor.
            </Typography>
          </Box>
          <Box>
            <Box>
              <img
                src={QuestionBluredBox}
                alt="Question Blured Box"
                style={{
                  width: "100%",
                  height: "83px",
                  transform: "scaleX(-1)",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  textAlign: "left",
                  letterSpacing: 0,
                  maxWidth: "80%",
                  verticalAlign: "middle",
                  color: "#ffffff",
                  mt: -9,
                  ml: 3.5,
                }}
              >
                Hang tight — you’ll hear from us soon!
              </Typography>
            </Box>
            <Box sx={{ mt: 10 }}>
              <img
                src={QuestionBluredBox}
                alt="Question Blured Box"
                style={{
                  width: "100%",
                  height: "83px",
                  transform: "scaleX(-1)",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "100%",
                  textAlign: "left",
                  letterSpacing: 0,
                  maxWidth: "80%",
                  verticalAlign: "middle",
                  color: "#ffffff",
                  mt: -8,
                  ml: 8.5,
                }}
              >
                Major Incoming Moments
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#ffffff",
                mt: 4.3,
                height: "140px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <img
                src={LastImg1}
                alt="Last Image 1"
                style={{
                  width: "106px",
                  height: "109px",
                  objectFit: "cover",
                  margin: "0 12px",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "100%",
                  textAlign: "left",
                  letterSpacing: 0,
                  maxWidth: "80%",
                  verticalAlign: "middle",
                  color: "#000000",
                }}
              >
                An <strong>industry-first</strong> surprise reveal, that could
                change the way you scale.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#ffffff",
                mt: 1.3,
                height: "140px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "100%",
                  textAlign: "left",
                  letterSpacing: 0,
                  maxWidth: "80%",
                  verticalAlign: "middle",
                  color: "#000000",
                  ml: "12px",
                }}
              >
                <strong>‘Raise Capital Without Dilution’</strong> Join Recur
                Club’s spotlight session on exclusive non-dilutive funding for
                startups.
              </Typography>

              <img
                src={LastImg2}
                alt="Last Image 2"
                style={{
                  width: "106px",
                  height: "109px",
                  objectFit: "cover",
                  margin: "0 12px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Registration2;
