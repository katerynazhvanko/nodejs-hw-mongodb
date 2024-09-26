export const handleSaveError = (error, data, next) => {
  error.status = 400;
  next();
};

export const setUpdateOptions = function (next) {
  this.options.new = true;
  this.options.runValidator = true;
  next();
};

export default handleSaveError;
