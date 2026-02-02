export default function Header({ title }) {
  return (
    <header className="d-flex align-items-center justify-content-between py-3 mb-4 border-bottom border-secondary">
      <label htmlFor="menu-toggle" className="menu-icon d-md-none text-primary fs-2" style={{ cursor: 'pointer' }}>
        &#9776;
      </label>
      <h1 className="h3 mb-0">{title}</h1>
      <input 
        type="text" 
        className="form-control w-50 bg-secondary border-0 text-white" 
        placeholder="Buscar juegos, géneros o contenido..." 
      />
      <div className="icons h4 mb-0 d-flex gap-3">
        <i className="fa fa-shopping-cart"></i>
        <i className="fa fa-user"></i>
      </div>
    </header>
  );
}