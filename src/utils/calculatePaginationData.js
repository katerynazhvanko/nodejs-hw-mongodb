const calculatePaginationData = ({ totalItem, perPage, page }) => {
  const totalPage = Math.ceil(totalItem / perPage);
  const hasNextPage = page < totalPage;
  const hasPreviousPage = page !== 1;

  return {
    totalPage,
    hasNextPage,
    hasPreviousPage,
  };
};

export default calculatePaginationData;
