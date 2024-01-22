/* 
ধরো তোমার এক বন্ধু তোমাকে বলেছে সে একটি Gucci Bag কিনবে যদি তার কাছে ১০ হাজার টাকা বা এর বেশি থাকে। নাহলে যদি তার কাছে ৫ হাজার বা এর বেশি টাকা থাকে তাহলে সে Levis Bag কিনবে। আর নাহলে সে নিউ মার্কেট থেকে কিছু (Something) কিনে নিবে। সে তোমাকে আরও বললো যে, যদি সে Gucci Bag কিনতে পারে এবং তার কাছে যদি ২০ হাজার টাকা এর বেশি থাকে তাহলে সে আরও একটি Gucci Belt কিনবে।
এখন ধরো তুমি জানো তোমার বন্ধুর কাছে কত টাকা আছে, তুমি কি বলতে পারবে সে কোন কোন জিনিস গুলো কিনবে?
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

    if (a > 20000) {
      console.log("Gucci Bag\nGucci Belt");
    } else if (a >= 10000) {
      console.log("Gucci Bag");
    } else if (a >= 5000) {
      console.log("Levis Bag");
    } else {
      console.log("Something");
    }
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();
