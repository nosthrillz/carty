import "./ProductItem.scss";

const ProductItem = ({ details }) => {
  const parsedDescription = details.description
    .split("\n")
    .map((para, idx) => <p key={idx}>{para}</p>);

  return (
    <>
      <h1 className="product-item-title">{details.name}</h1>
      <div className="product-item-content">
        <img
          className="product-item-image"
          src={details.image}
          alt={details.name}
        />
        <div className="product-item-description">{parsedDescription}</div>
      </div>
      <h2 className="product-item-price">{details.price} CHF</h2>
    </>
  );
};

export default ProductItem;
