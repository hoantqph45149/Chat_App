function padZero(num) {
  return num.toString().padStart(2, "0");
}
const extractTime = (dateString) => {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
};

export default extractTime;