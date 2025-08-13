import React from "react";
import { Box, Typography } from "@mui/material";
import CandidateBluredBox from "../../assets/CandidateBluredBox.webp";

interface CandidatesNameBoxProps {
  candidateName: string;
  alignment?: "left" | "center" | "right";
  isHint?: boolean; // New prop to identify if this is displaying a hint
}

const CandidatesNameBox: React.FC<CandidatesNameBoxProps> = ({
  candidateName,
  alignment = "center",
  isHint = false,
}) => {
  const getAlignment = () => {
    switch (alignment) {
      case "left":
        return { alignSelf: "flex-start", marginRight: "auto", marginLeft: 0 };
      case "right":
        return { alignSelf: "flex-end", marginLeft: "auto", marginRight: 0 };
      default:
        return { alignSelf: "center", margin: "0 auto" };
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "350px",
        marginBottom: 0,
        ...getAlignment(),
      }}
    >
      {/* Candidate Name Box Container */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${CandidateBluredBox})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "327px",
          height: "51px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Candidate Name Text */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "left",
            justifyContent: "left",
            px: 4,
            py: 0.7,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              fontWeight: isHint ? 600 : 700,
              textAlign: "left",
              //   textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              fontSize: isHint ? "16px" : "22px",
              fontFamily: isHint ? "Inter" : "inherit",
              lineHeight: isHint ? "36px" : "inherit",
              letterSpacing: isHint ? "0%" : "inherit",
            }}
          >
            {candidateName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CandidatesNameBox;
