import "./Item.css";

export const Item = ({ name, description, price, image, stock, children }) => {
  return (
    <article className="card">
      <img src={image} alt={`foto de ${name}`} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        {children}
      </div>
    </article>
  );
};
