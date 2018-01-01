/** Return random elements from an array making sure that the returned elements are different between each other */
export const getRandomItems = (entryArray: any[], itemsQuantity = 0 ): any[] => {
  if (entryArray.length < itemsQuantity) return [];
  const itemsToReturn: any[] = [];
  for (let i = 0; i < entryArray.length; i++) {
    let validRandomElement = false;
    while(!validRandomElement) {
      const randomIndex = Math.floor(Math.random() * entryArray.length);
      const itemToReturn = entryArray[randomIndex];
      // When the randomly selected item is not already in the result
      // there is not need to keep searhing for random numbers
      if (itemsToReturn.indexOf(itemToReturn) === -1) {
        itemsToReturn.push(itemToReturn);
        validRandomElement = true;
      }
    }
  }
  return itemsToReturn;
};
