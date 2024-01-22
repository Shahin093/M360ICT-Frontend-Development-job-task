/* 
তোমাকে একটি অঋণাত্মক (০ বা এর থেকে বড়) সংখ্যা নিতে হবে এবং বলতে হবে সংখ্যাটি জোড়(even) নাকি বিজোড়(odd)।
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

    if (a % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
