export const calculateAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};
