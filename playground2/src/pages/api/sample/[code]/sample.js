




export default function handler(req, res) {
  
  // recuperando parametros da request
  // recuperandoconsole.log(req);
  console.log(req.method); // metodo http
  console.log(req.query); //query -> vale para parametros no meio da url usando colchetes como nas paginas ou para parametros na querystring
  console.log(req.body); // body da request
  console.log(req.headers); //headers da request




  res.status(200).json({
    name: 'Enzo Poeta',
    code: req.query.code,
    roles: [
      'admin','the guy','gorilao da bola azul'

    ],
  })
}
