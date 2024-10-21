const error_middleware = (err, req, res, next) => {
  console.error(err); // Log the error for debugging

  let defaultErrors = {
    statusCode: 500,
    message: 'Something went wrong',
  };

  // Handling validation errors (like Mongoose validation errors)
  if (err.name === 'ValidationError') {
    defaultErrors.statusCode = 400;
    defaultErrors.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ');
  }

  // Handling duplicate key errors (Mongoose unique constraint violation)
  if (err.code && err.code === 11000) {
    defaultErrors.statusCode = 400;
    defaultErrors.message = `${Object.keys(err.keyValue)} field has to be unique`;
  }

  // Send the response (only once)
  res.status(defaultErrors.statusCode).json({
    success: false,
    message: defaultErrors.message,
  });
};

export default error_middleware;
