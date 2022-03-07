const id = (req, res) => {
  res.statusCode = 200;
  res.json({ id: req.query.id });
};

export default id;
