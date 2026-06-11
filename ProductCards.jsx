function ProductCards() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-container">

        <div className="card">
          <h3>iPhone 15</h3>
          <p>₹79,999</p>
          <button>View</button>
        </div>

        <div className="card">
          <h3>Gaming Laptop</h3>
          <p>₹89,999</p>
          <button>View</button>
        </div>

        <div className="card">
          <h3>Wireless Headphones</h3>
          <p>₹4,999</p>
          <button>View</button>
        </div>

      </div>
    </section>
  );
}

export default ProductCards;