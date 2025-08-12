// CandidatesData.ts

export interface Candidate {
  name: string;
  hints: string[];
}

export const CandidateCandidatesData: Candidate[] = [
  {
    name: "Alex Carter",
    hints: [
      "I once backpacked across 7 countries in 30 days.",
      "I can solve a Rubik's cube in under 2 minutes.",
      "I worked as a barista before starting my current career."
    ]
  },
  {
    name: "Sophie Williams",
    hints: [
      "I have a black belt in Taekwondo.",
      "I’ve read over 200 books in the past two years.",
      "I can speak 4 different languages."
    ]
  },
  {
    name: "Daniel Thompson",
    hints: [
      "I built my first computer at age 12.",
      "I have a pet iguana named Spike.",
      "I once played guitar on stage with a famous band."
    ]
  }
];
