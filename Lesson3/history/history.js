export default function getHistory() {
  const string = localStorage.getItem('history')
    ? localStorage.getItem('history')
    : '';
  let order = [];
  console.log(string);
  if (string.length === 0) {
    return order;
  }
  order = string.split(',');
  return order;
}
