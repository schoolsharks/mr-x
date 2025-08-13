import Speaker1 from "../assets/Speaker1.webp";
import Speaker2 from "../assets/Speaker2.webp";

export interface Candidate {
  name: string;
  Img?: string;
  Position?: string;
}

export const SpeakerData: Candidate[] = [
  {
    name: "Dr. Vibhuti Aggarwal",
    Img: Speaker1,
    Position: "General Partner, Real Time Angel Fund",
  },
  {
    name: "Dr. Vijay Singh Rathore",
    Img: Speaker2,
    Position: "Co-Founder & CEO, Soonicorn Ventures",
  },
];