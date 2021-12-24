const ProductsPage = (props) => {
  const product = props.product;
  console.log(props);

  return (
    <>
      <h1>Product Data</h1>
      <h2>ID : {product.id}</h2>
      <h2>Name : {product.name}</h2>
      <h2>Price : {product.price}</h2>
    </>
  );
};

export async function getStaticProps(context) {
  // eh importante lembrar que o get static props vai ser chamado para cada um dos elementos na lista do static paths
  const productId = context.params.id;
  const resp = await fetch(
    "http://localhost:3000/api/products/?id=" + productId
  );
  const product = await resp.json();

  return { props: { product } };
}

export function getStaticPaths() {
  // quando vc tem uma pagina estatica que aceita parametros vc precisa dizer quais vc vai aceitar

  return {
    fallback: false, // com o fallback setado para falso para os ids nao relacionados na lista abaixo um false é retornado um 404
    paths: [
      { params: { id: "30" } },
      { params: { id: "1" } },
      { params: { id: "44" } },
    ],
  };
}

export default ProductsPage;
