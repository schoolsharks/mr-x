import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

// Data interface for the metrics
export interface MetricData {
  value: string;
  label: string;
  id: string;
}

// Props interface for individual MetricCard
interface MetricCardProps {
  /** The main metric value (e.g., "70K+") */
  value: string;
  /** The label text (e.g., "YouTube Views") */
  label: string;
  /** Color of the value text */
  valueColor?: string;
  /** Color of the label text */
  labelColor?: string;
  /** Background color of the card */
  backgroundColor?: string;
  /** Border color of the card */
  borderColor?: string;
  /** Border width in pixels */
  borderWidth?: number;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Custom styles for the container */
  sx?: SxProps<Theme>;
  /** Width of the component */
  width?: number | string;
  /** Height of the component */
  height?: number | string;
  /** Font size for the value */
  valueFontSize?: string;
  /** Font size for the label */
  labelFontSize?: string;
  /** Font weight for the value */
  valueFontWeight?: number | string;
  /** Font weight for the label */
  labelFontWeight?: number | string;
  /** Whether to show elevation shadow */
  elevation?: number;
  /** Click handler */
  onClick?: () => void;
}

// Individual MetricCard component
export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  valueColor = "#B71C1C",
  labelColor = "#000000",
  backgroundColor = "#ffffff",
  borderColor = "#808080",
  borderWidth = 2,
  borderRadius = 16,
  sx,
  width = 180,
  height = 150,
  valueFontSize = "35px",
  labelFontSize = "24px",
  valueFontWeight = "bold",
  labelFontWeight = "bold",
  elevation = 0,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width,
        height: `calc(${height}px )`, // Extra height for protruding text
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: onClick ? "pointer" : "default",
        position: "relative",
        ...sx,
      }}
    >
      {/* Value text positioned above the card */}
      <Typography
        variant="h3"
        component="div"
        sx={{
          color: valueColor,
          fontSize: valueFontSize,
          fontWeight: valueFontWeight,
          lineHeight: 1,
          marginBottom: "-25px", // Overlap with card more
          zIndex: 2,
          position: "relative",
          backgroundColor: backgroundColor,
          paddingX: 1,
          paddingY: 0.5,
          borderRadius: "8px",
        }}
      >
        {value}
      </Typography>

      {/* Main card body */}
      <Paper
        elevation={elevation}
        sx={{
          width: "170px",
          height,
          backgroundColor,
          borderRadius: `${borderRadius}px`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          paddingTop: 3,
          border: `${borderWidth}px solid ${borderColor}`,
          // Create gap in top border for the value
          "&::before": {
            content: '""',
            position: "absolute",
            top: `-${borderWidth}px`,
            left: "50%",
            transform: "translateX(-50%)",
            width: "30%",
            height: `${borderWidth}px`,
            backgroundColor: backgroundColor,
            zIndex: 1,
          },
        }}
      >
        {/* Divider line */}
        <Box
          sx={{
            width: "80%",
            height: "2px",
            backgroundColor: valueColor,
            marginBottom: 2,
          }}
        />

        {/* Label text */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: labelColor,
            fontSize: labelFontSize,
            fontWeight: labelFontWeight,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {label}
        </Typography>
      </Paper>
    </Box>
  );
};

// Props interface for MetricCardsGrid
interface MetricCardsGridProps {
  /** Array of metric data to display */
  metrics: MetricData[];
  /** Custom styling for all cards */
  cardProps?: Partial<MetricCardProps>;
  /** Custom styling for the grid container */
  containerSx?: SxProps<Theme>;
  /** Grid gap between cards */
  gap?: number;
  /** Number of columns (responsive) */
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
}

// Grid component to render multiple metric cards
export const MetricCardsGrid: React.FC<MetricCardsGridProps> = ({
  metrics,
  cardProps = {},
  containerSx = {},
  gap = 0,
  columns = { xs: 2 },
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: `repeat(${columns.xs || 2}, 2fr)`,
        //   sm: `repeat(${columns.sm || 2}, 1fr)`,
        //   md: `repeat(${columns.md || 3}, 1fr)`,
        //   lg: `repeat(${columns.lg || 5}, 1fr)`,
        },
        gap,
        padding: 0,
        ...containerSx,
      }}
    >
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          value={metric.value}
          label={metric.label}
          {...cardProps}
        />
      ))}
    </Box>
  );
};

// Default export
export default MetricCard;

/*
USAGE EXAMPLES:

1. Import in different components:
   import { MetricCard, MetricCardsGrid, MetricData } from './MetricCard';

2. Single card usage:
   <MetricCard value="70K+" label="YouTube Views" />

3. Grid usage with your data:
   const myMetrics: MetricData[] = [
     { id: '1', value: '70K+', label: 'YouTube Views' },
     { id: '2', value: '1.2M+', label: 'Instagram Followers' },
     { id: '3', value: '850K+', label: 'TikTok Likes' },
     { id: '4', value: '450K+', label: 'Twitter Followers' },
     { id: '5', value: '2.5M+', label: 'Total Reach' },
   ];
   
   <MetricCardsGrid metrics={myMetrics} />

4. Customized grid:
   <MetricCardsGrid 
     metrics={myMetrics}
     cardProps={{ 
       valueColor: '#4CAF50',
       width: 180,
       height: 140 
     }}
     gap={3}
     columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
   />

5. In different components:
   // Dashboard.tsx
   import { MetricCardsGrid } from './components/MetricCard';
   const dashboardMetrics = [...];
   <MetricCardsGrid metrics={dashboardMetrics} />
   
   // Analytics.tsx  
   import { MetricCard } from './components/MetricCard';
   <MetricCard value="95%" label="Success Rate" />
*/

// Example component showing two cards
export const TwoCardsExample: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MetricCard
        value="70K+"
        label="YouTube Views"
        valueColor="#B71C1C"
        borderColor="#B71C1C"
      />
      <MetricCard
        value="1.2M+"
        label="Instagram Followers"
        valueColor="#4CAF50"
        borderColor="#4CAF50"
      />
    </Box>
  );
};
