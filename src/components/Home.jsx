import { Button } from "react-bootstrap";
import { useNavigate }  from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <>
      <h1 className="mt-5">
        Hello, Welcome to my React Fake Store Project App
      </h1>
      <p>
        My React Fake Store app is a small shopping demo that shows products
        from a Fake Store API. Users can browse items, see details, and add
        things to a cart. It’s a simple project that helped me learn how to use
        React, work with components, and fetch data from an API.
      </p>

      <Button variant="primary" size="lg" onClick={() => navigate("/product")} type="submit">
        Navigate to Products page
      </Button>
    </>
  );
}

export default Home;