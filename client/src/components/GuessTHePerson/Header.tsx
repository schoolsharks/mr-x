import React, { useEffect, useState } from "react";
import FirstWingLogo from "../../assets/FirstWingLogo.webp";
import IDFCLogo from "../../assets/IDFCLogo.webp";
import { Box, Typography } from "@mui/material";

const Header: React.FC = () => {
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

        {/* Center Content */}
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
            <Box
              sx={{
                height: "35px",
                width: "41px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  width: "4px",
                  height: "20px",
                  backgroundColor: "#981922",
                },
                "&::before": {
                  transform: "rotate(45deg)",
                },
                "&::after": {
                  transform: "rotate(-45deg)",
                },
              }}
            />
            <Box
              sx={{
                height: "35px",
                width: "41px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  width: "4px",
                  height: "20px",
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                },
                "&::before": {
                  transform: "rotate(45deg)",
                },
                "&::after": {
                  transform: "rotate(-45deg)",
                },
              }}
            />
            <Box
              sx={{
                height: "35px",
                width: "41px",
                backgroundColor: "transparent",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                "&::before, &::after": {
                  content: '""',
                  position: "absolute",
                  width: "4px",
                  height: "20px",
                  backgroundColor: "#981922",
                },
                "&::before": {
                  transform: "rotate(45deg)",
                },
                "&::after": {
                  transform: "rotate(-45deg)",
                },
              }}
            />
          </Box>
        </Box>

        {/* Right Logo */}
        <Box sx={{ flex: "0 0 auto" }}>
          <img
            src={IDFCLogo}
            alt="IDFC Logo"
            style={{ height: "27px", width: "auto" }}
          />
        </Box>
      </Box>

      {/* Timer Box */}
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
    </>
  );
};

export default Header;
