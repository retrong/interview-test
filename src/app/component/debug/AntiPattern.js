

function ProductCard({ name, price, onClick }) {
  return (
    <div onClick={onClick}>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          onClick={() => console.log(product.name)}
        />
      ))}
    </div>
  );
}

// if id isn't specifed in the previous component or function for ProductCard then it cant be used, in place we can use 'index' to map out individual data
