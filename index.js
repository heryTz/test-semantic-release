export function hello(name) {
  return `Hello, ${name}!!!`;
}

export function goodbye(name) {
  return `Goodbye, ${name}!!!`;
}

export function generateRandomNumber() {
  return Math.random();
}

export function generateWord() {
  return "word";
}

export function generateOtp() {
  return Math.floor(1000 + Math.random() * 9000);
}

export function generateKey() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
