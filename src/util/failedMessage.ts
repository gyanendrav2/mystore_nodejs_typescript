export const throwMessage = (msg: string) => {
  return {
    details: [
      {
        message: msg,
      },
    ],
  };
};
