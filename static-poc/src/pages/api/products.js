export default function handler(req, res) {
  const passedId = +req.query.id;

  res.status(200).json({
    id: passedId,
    name: "Product " + passedId,
    price: 10 * passedId,
  });
}
