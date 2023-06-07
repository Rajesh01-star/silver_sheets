const memorizedContent: { [key: string]: any } = {};

export const memorize = (cellId: string, atomFactory: () => any) => {
  if (memorizedContent[cellId]) {
    return memorizedContent[cellId];
  }

  memorizedContent[cellId] = atomFactory();

  return memorizedContent[cellId];
};
