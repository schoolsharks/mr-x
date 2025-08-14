import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import SpeakerCardBG from "../../assets/SpeakerCardBG.webp";
import { Candidate } from "../../Data/SpeakerData";

interface SpeakerCardProps {
  speaker: Candidate;
  topText?: string;
  flipped?: boolean;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  speaker,
  topText = "Speaker `${index}`",
  flipped = false,
}) => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${SpeakerCardBG})`,
        backgroundSize: "100% 100%",
        bgcolor: "white",
        // minHeight: "152px",
        // transform: flipped ? "scaleX(-1)" : "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: flipped ? "row-reverse" : "row",
          //   paddingBottom: 3,
          paddingLeft: 3,
          paddingRight: 3,
          // transform: flipped ? "scaleX(-1)" : "none",
        }}
      >
        {/* Left side - Speaker Image */}
        <Box
          sx={{
            flexShrink: 0,
            mr: flipped ? 0 : 3,
            ml: flipped ? 3 : 0,
            mb: -1,
          }}
        >
          <Box
            component="img"
            src={speaker.Img}
            alt={speaker.name}
            sx={{
              width: "129px",
              height: "129px",
              marginTop: 3,
              //   border: "2px solid white",
              //   boxShadow: 2,
            }}
          />
        </Box>

        <Stack height={"152px"} width={"2px"} mx={1} sx={{background:
          "linear-gradient(to right, transparent, #dddddd)"
        }} />

        {/* Right side - Text content */}
        <Box sx={{ flex: 1, color: "white" }}>
          {/* Top text */}
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: 500,
              opacity: 0.6,
              // mt: -4,
              color: "#000000",
            }}
          >
            {topText}
          </Typography>

          {/* Speaker name */}
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
              mt: 2,
              lineHeight: "21px",
              mb: 0.5,
              //   lineHeight: 1.2,
              color: "#000000",
            }}
          >
            {speaker.name}
          </Typography>

          {/* Position */}
          {speaker.Position && (
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: 500,
                fontFamily: "Inter, sans-serif",
                mt: 2,
                color: "#000000",
              }}
            >
              {speaker.Position}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SpeakerCard;
