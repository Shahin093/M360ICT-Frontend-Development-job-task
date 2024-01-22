/* 
তোমাকে একটি ইন্টিজার ভ্যেলু ইনপুট নিতে হবে এবং বলতে হবে এটি ধনাত্মক(positive) নাকি ঋণাত্মক(negative) নাকি শূণ্য(zero)
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = () => new Promise((resolve) => rl.question("", resolve));

// Provide values for the following variables as input in terminal
(async () => {
  try {
    const a = parseInt(await prompt());

    if (a > 0) {
      console.log("positive");
    } else if (a < 0) {
      console.log("negative");
    } else {
      console.log("zero");
    }
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
