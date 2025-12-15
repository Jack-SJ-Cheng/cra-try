export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <h1 className="navbar-brand">CreamyDay</h1>
        <button
          className="btn btn-outline-dark position-relative"
          type="button"
        >
          購物車
          <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
            99
          </span>
        </button>
      </div>
    </nav>
  );
}
