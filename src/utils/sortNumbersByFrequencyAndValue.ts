export const sortNumbersByFrequencyAndValue = (input: number[]): number[] => {
    const frequencyMap: Record<number, number> = {};
  
    // Count the frequency of each number
    input.forEach(num => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });
  
    // Sort by frequency and value
    return input.sort((a, b) => {
      const freqDiff = frequencyMap[a] - frequencyMap[b];
      return freqDiff === 0 ? a - b : freqDiff;
    });
  };
  

  