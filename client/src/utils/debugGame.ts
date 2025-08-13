// Debug utility to view game session data
// You can use this in development to see what's being stored

import { getGameData, getGameStats } from './gameStorage';

export const logGameData = () => {
  const gameData = getGameData();
  const gameStats = getGameStats();
  
  console.group('🎮 Game Session Data');
  console.log('📊 Current Stats:', gameStats);
  console.log('🎯 Full Game Data:', gameData);
  console.log('💾 Session Storage Raw:', sessionStorage.getItem('mr-x-game-data'));
  console.groupEnd();
  
  return { gameData, gameStats };
};

// Call this from browser console: window.debugGame()
if (typeof window !== 'undefined') {
  (window as any).debugGame = logGameData;
}

export default logGameData;
