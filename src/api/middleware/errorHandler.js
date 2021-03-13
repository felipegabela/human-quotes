// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => res.status(err.code).json({
  status: 'error',
  message: err.message,
});

export default errorHandler;
