import React, { createContext, useState } from 'react';

export const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [levelIndex, setLevelIndex] = useState(1);

  return (
    <LevelContext.Provider value={{ levelIndex, setLevelIndex }}>
      {children}
    </LevelContext.Provider>
  );
};