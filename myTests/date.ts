function getCurrentDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1);
  const day = padZero(now.getDate());
  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

const currentDate = getCurrentDate();
console.log(currentDate);
