const priceArr = ["0 - 50", "51 - 60", "61 - 70", "71 - 80", "81 - 100"];

const checkPriceRange = (range: string) => {
  const [min, max] = range.split("-").map((range) => parseFloat(range.trim()));
  return {
    min,
    max,
  };
};

const productUtils = {
  priceArr,
  checkPriceRange,
};
export default productUtils;
