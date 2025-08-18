// Game data storage utility using session storage

export interface GameData {
  strikes: number;
  startTime: number;
  currentCandidateIndex: number;
  candidateResults: Array<{
    candidateIndex: number;
    candidateName: string;
    startTime: number;
    endTime?: number;
    timeTaken?: number; // in seconds
    wrongGuesses: string[];
    correctAnswer?: string;
    isCorrect: boolean;
  }>;
  totalWrongGuesses: string[];
  gameCompleted: boolean;
  finalScore?: {
    totalTimeTaken: number;
    totalWrongGuesses: number;
    candidatesCompleted: number;
    accuracy: number;
  };
}

const GAME_DATA_KEY = 'mr-x-game-data';

// Initialize game data
export const initializeGameData = (): GameData => {
  const defaultData: GameData = {
    strikes: 0,
    startTime: Date.now(),
    currentCandidateIndex: 0,
    candidateResults: [],
    totalWrongGuesses: [],
    gameCompleted: false,
  };
  
  sessionStorage.setItem(GAME_DATA_KEY, JSON.stringify(defaultData));
  return defaultData;
};

// Get game data from session storage
export const getGameData = (): GameData => {
  try {
    const data = sessionStorage.getItem(GAME_DATA_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error parsing game data:', error);
  }
  
  // Return initialized data if none exists
  return initializeGameData();
};

// Save game data to session storage
export const saveGameData = (data: GameData): void => {
  try {
    sessionStorage.setItem(GAME_DATA_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving game data:', error);
  }
};

// Add a strike
export const addStrike = (): GameData => {
  const data = getGameData();
  data.strikes = Math.min(data.strikes + 1, 3); // Cap at 3 strikes
  saveGameData(data);
  return data;
};

// Start a new candidate
export const startCandidate = (candidateIndex: number, candidateName: string): GameData => {
  const data = getGameData();
  
  // Check if this candidate already exists, if not create new entry
  const existingIndex = data.candidateResults.findIndex(c => c.candidateIndex === candidateIndex);
  
  if (existingIndex === -1) {
    data.candidateResults.push({
      candidateIndex,
      candidateName,
      startTime: Date.now(),
      wrongGuesses: [],
      isCorrect: false,
    });
  }
  
  data.currentCandidateIndex = candidateIndex;
  saveGameData(data);
  return data;
};

// Add wrong guess
export const addWrongGuess = (candidateIndex: number, guessedName: string): GameData => {
  const data = getGameData();
  
  // Add to total wrong guesses
  if (!data.totalWrongGuesses.includes(guessedName)) {
    data.totalWrongGuesses.push(guessedName);
  }
  
  // Add to candidate specific wrong guesses
  const candidateResult = data.candidateResults.find(c => c.candidateIndex === candidateIndex);
  if (candidateResult && !candidateResult.wrongGuesses.includes(guessedName)) {
    candidateResult.wrongGuesses.push(guessedName);
  }
  
  // Note: Strike increment is handled by onStrike() callback to avoid double counting
  
  saveGameData(data);
  return data;
};

// Mark candidate as completed with correct answer
export const completeCandidate = (candidateIndex: number, correctAnswer: string): GameData => {
  const data = getGameData();
  
  const candidateResult = data.candidateResults.find(c => c.candidateIndex === candidateIndex);
  if (candidateResult) {
    candidateResult.endTime = Date.now();
    candidateResult.timeTaken = Math.round((candidateResult.endTime - candidateResult.startTime) / 1000);
    candidateResult.correctAnswer = correctAnswer;
    candidateResult.isCorrect = true;
  }
  
  saveGameData(data);
  return data;
};

// Mark candidate as timed out
export const timeoutCandidate = (candidateIndex: number): GameData => {
  const data = getGameData();
  
  const candidateResult = data.candidateResults.find(c => c.candidateIndex === candidateIndex);
  if (candidateResult) {
    candidateResult.endTime = Date.now();
    candidateResult.timeTaken = Math.round((candidateResult.endTime - candidateResult.startTime) / 1000);
    candidateResult.isCorrect = false;
    // Note: Don't set correctAnswer for timeout cases
  }
  
  saveGameData(data);
  return data;
};

// Complete the entire game
export const completeGame = (): GameData => {
  const data = getGameData();
  
  // Calculate total time spent actually guessing (sum of individual candidate times)
  const totalGuessingTime = data.candidateResults.reduce((total, candidate) => {
    return total + (candidate.timeTaken || 0);
  }, 0);
  
  const completedCandidates = data.candidateResults.filter(c => c.isCorrect).length;
  const totalCandidates = data.candidateResults.length;
  const accuracy = totalCandidates > 0 ? (completedCandidates / totalCandidates) * 100 : 0;
  
  data.gameCompleted = true;
  data.finalScore = {
    totalTimeTaken: totalGuessingTime, // Use actual guessing time instead of total elapsed time
    totalWrongGuesses: data.totalWrongGuesses.length,
    candidatesCompleted: completedCandidates,
    accuracy: Math.round(accuracy * 100) / 100, // Round to 2 decimal places
  };
  
  saveGameData(data);
  return data;
};

// Clear game data
export const clearGameData = (): void => {
  sessionStorage.removeItem(GAME_DATA_KEY);
};

// Get current candidate data
export const getCurrentCandidateData = (candidateIndex: number): GameData['candidateResults'][0] | null => {
  const data = getGameData();
  return data.candidateResults.find(c => c.candidateIndex === candidateIndex) || null;
};

// Get game statistics for display
export const getGameStats = () => {
  const data = getGameData();
  return {
    currentStrikes: data.strikes,
    totalWrongGuesses: data.totalWrongGuesses.length,
    candidatesCompleted: data.candidateResults.filter(c => c.isCorrect).length,
    totalCandidates: data.candidateResults.length,
    gameStartTime: data.startTime,
    currentTime: Date.now(),
    elapsedTime: Math.round((Date.now() - data.startTime) / 1000),
  };
};
