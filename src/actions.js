export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const random = () => ({
  type: "Random",
  payload: Math.floor(Math.random() * 10),
});
