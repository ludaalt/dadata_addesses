export const textConversion = (str: any) => {
  const result = str.replace(/\n\n/g, "<br><br>");
  return result;
};
