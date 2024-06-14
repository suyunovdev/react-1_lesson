const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="product">
          <div className="logo">
            <div className="logo-img">
              <img src="./src/assets/logo.svg" alt="" />
            </div>
            <div className="logo-word">
              <h2>Product</h2>
            </div>
          </div>

          <div className="word">
            <a href="#">Product</a>
            <a href="#">Customers</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
            <button>Sign In</button>
            <button>Sign Up</button>
            <img src="./src/assets/darcmode.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
