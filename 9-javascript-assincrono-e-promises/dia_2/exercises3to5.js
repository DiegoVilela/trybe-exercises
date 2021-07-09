const createArryOfRamdonNumbers = () => Array.from(
  { length: 10 },
  () => ((Math.random() * 51) + 1) ** 2
);

const arraySum = (array) => {
  const sum = array.reduce((acc, curr) => acc + curr);
  if (sum < 8000) return sum;

  throw new Error();
};

const arrayOfResults = (arraySum) => [2, 3, 5, 10].map((i) => arraySum / i);

const getSumOfRandomNumbers = async () => {
  try {
    const arrayOfRandom = await createArryOfRamdonNumbers();
    const sum = await arraySum(arrayOfRandom);
    const arrayResult = await arrayOfResults(sum);
    const finalSum = await arrayResult.reduce((acc, curr) => acc + curr);
    console.log(finalSum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

getSumOfRandomNumbers();
