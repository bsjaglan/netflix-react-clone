export const randomNum = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

export const randomMaturity = (items) =>
  items[Math.floor(Math.random() * items.length)];

export const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
