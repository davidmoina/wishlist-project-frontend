export const generatorId = () => {
  let lastNum = localStorage.getItem("lastNum") || "0";
  let newId = JSON.parse(lastNum) + 1;
  localStorage.setItem("lastNum", JSON.stringify(newId));
  return newId;
}