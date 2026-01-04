function ProductCard(props) {
  return (
    <div>
      <img
        className=""
        src={props.imageUrl}
        alt=""
      />
      <p>{props.title}</p>
    </div>
  );
}

export default ProductCard;
