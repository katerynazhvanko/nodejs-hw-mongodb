const errorHandler = (error, req, res, next) => {
  console.log('error', error);

  res.status(500).json({
    message: 'Something went wrong',
  });
};

export default errorHandler;
