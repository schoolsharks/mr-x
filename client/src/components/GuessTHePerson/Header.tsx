import React, { useEffect, useState } from "react";
import FirstWingLogo from "../../assets/FirstWingLogo.webp";
import IDFCLogo from "../../assets/IDFCLogo.webp";
import { Box, Typography } from "@mui/material";
import crossed from "../../assets/Crossed.png";
import unfilledCross from "../../assets/UnfilledCross.png";

interface HeaderProps {
  showTimer?: boolean;
  showStrikes?: boolean;
  strikes?: number; // Current number of strikes (0-3)
}

const Header: React.FC<HeaderProps> = ({
  showTimer = true,
  showStrikes = true,
  strikes = 0,
}) => {
  const [timerTransform, setTimerTransform] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerTransform(-100);
    }, 100); // Start animation after 100ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "30px 24px",

          width: "100%",
          maxWidth: "480px",
          backgroundColor: "transparent",
        }}
      >
        {/* Left Logo */}
        <Box sx={{ flex: "0 0 auto" }}>
          <img
            src={FirstWingLogo}
            alt="FirstWing Logo"
            style={{ height: "36px", width: "auto" }}
          />
        </Box>

        {/* Center Content - Conditionally rendered */}
        {showStrikes && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: "1 1 auto",
              marginTop: "-8px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                color: "#000000",
                // marginBottom: "8px",
                lineHeight: "40px",
              }}
            >
              Strikes
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
              }}
            >
              <img
                src={strikes >= 1 ? crossed : unfilledCross}
                alt="Strike 1"
                style={{ height: "25px", width: "32px" }}
              />
              <img
                src={strikes >= 2 ? crossed : unfilledCross}
                alt="Strike 2"
                style={{ height: "25px", width: "32px" }}
              />
              <img
                src={strikes >= 3 ? crossed : unfilledCross}
                alt="Strike 3"
                style={{ height: "25px", width: "32px" }}
              />
            </Box>
          </Box>
        )}

        {/* Right Logo */}
        <Box sx={{ flex: "0 0 auto" }}>
          <img
            src={IDFCLogo}
            alt="IDFC Logo"
            style={{ height: "27px", width: "auto" }}
          />
        </Box>
      </Box>

      {/* Timer Box - Conditionally rendered */}
      {showTimer && (
        <Box
          sx={{
            width: "100%",
            maxWidth: "480px",
            height: "15px",
            backgroundColor: "#981922",
            transform: `translateX(${timerTransform}%)`,
            transition: "transform 10s linear", // 10 second smooth animation
          }}
        />
      )}
    </>
  );
};

export default Header;
