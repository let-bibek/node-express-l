module.exports =reqFilter= (req, res, next) => {
  if (!req.query.data) {
    res.send("provide data");
  } else if (req.query.data < 18) {
    res.send("You are not allowed to access this page");
  } else {
    next();
  }
};
