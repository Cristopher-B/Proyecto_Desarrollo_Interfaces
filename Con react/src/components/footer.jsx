export default function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-black text-center border-top border-secondary">
      <p>© 2026 NEXUS - Plataforma de Juegos. Todos los derechos reservados.</p>
      <div className="footer-socials d-flex justify-content-center gap-4">
        <a href="#" className="text-primary fs-4"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-primary fs-4"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-primary fs-4"><i className="fab fa-x-twitter"></i></a>
        <a href="#" className="text-primary fs-4"><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
  );
}