// CandidatesData.ts
import Candidate1Blur from "../assets/Candidate1Blur.webp";
import Candidate1 from "../assets/Candidate1.webp";
import Candidate2Blur from "../assets/Candidate2Blur.webp";
import Candidate2 from "../assets/Candidate2.webp";

export interface Candidate {
  name: string;
  hints: string[];
  BlurImg?: string;
  Img?: string;
  KnowMore?: {
    title: string;
    data: string[];
  }; 
}

export const CandidateCandidatesData: Candidate[] = [
  {
    name: "Dr. Vibhuti Aggarwal",
    hints: [
      "She funds dreams before they trend.",
      "PhD flex with a VC chequebook.",
      "Startup pitches? She's the final boss."
    ],  
    BlurImg: Candidate1Blur,
    Img: Candidate1,
    KnowMore: {
      title: "Know more about her.",
      data: [
        "General Partner, Real Time Angel Fund (since 2023).",
        "Ex–Senior Investment Evangelist, RTAF.",
        "Partner in multiple venture & consulting firms.",
        "Speaker/judge at Global Startup Summit & BizzOpp."
      ]
    }
  },
  {
    name: "Dr. Vijay Singh Rathore",
    hints: [
      "Building unicorns before they glow up.",
      "Hustler mind, founder grind.",
      "Founder energy, investor precision."
    ],
    BlurImg: Candidate2Blur,
    Img: Candidate2,
    KnowMore: {
      title: "Know more about him.",
      data: [
        "Co-Founder & CEO, Soonicorn Ventures (since 2022).",
        "Backed 40+ startups (Zypp Electric, ZingBus, Skylark Drones).",
        "Runs ₹250 Cr SEBI-approved angel fund.",
        "Network of 1,200+ investors across 24+ countries."
      ]
    }
  },
];
