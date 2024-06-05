export const validationMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res
      .status(400)
      .send({ status: "error", error: "Campos incompletos" });
  }
  next();
};
