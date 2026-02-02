import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';

import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

// Imports de imágenes (Asegúrate de que los nombres coincidan con tus archivos en assets)
import gtaImg from '../assets/GTA.png';
import updateImg from '../assets/update.png';
import esportsImg from '../assets/esports.png';
import devImg from '../assets/desarrollador.png';

export default function News() {
  return (
    <div className="container-fluid p-0">
      <input type="checkbox" id="menu-toggle" className="d-none" />

      <div className="row g-0">
        <Sidebar />

        {/* Usamos 'col' para que ocupe todo el ancho disponible */}
        <div className="main col px-4 py-3">
          <Header title="Novedades" />

          {/* SECCIÓN: NOTICIAS DESTACADAS */}
          <section className="noticias-destacadas mb-5 w-100">
            <h2 className="h4 mb-4 text-white">Noticias Destacadas</h2>
            <div className="card bg-secondary-custom border-0 overflow-hidden shadow-lg w-100">
              <div className="row g-0 align-items-center">
                <div className="col-lg-7">
                  <img 
                    src={gtaImg} 
                    className="img-fluid w-100 h-100" 
                    alt="GTA VI" 
                    style={{ objectFit: 'cover', minHeight: '350px' }} 
                  />
                </div>
                <div className="col-lg-5">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="h2 text-white mb-3">¡Grand Theft Auto VI se Retrasa!</h3>
                    <p className="text-gray mb-4">
                      La comunidad tendrá que esperar más para explorar las icónicas calles de Vice City. 
                      Rockstar Games ha confirmado que el lanzamiento se retrasa nuevamente hasta noviembre de 2026.
                    </p>
                    <button className="btn btn-primary btn-lg px-4">Leer Artículo Completo →</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN: ANUNCIOS RECIENTES */}
          <section className="anuncios-recientes mb-5 w-100">
            <h2 className="h4 mb-4 text-white">Anuncios Recientes</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              
              {/* Noticia 1 */}
              <div className="col">
                <div className="card h-100 bg-secondary-custom border-0 shadow-sm noticia-hover">
                  <img 
                    src={updateImg} 
                    className="card-img-top" 
                    alt="Parche" 
                    style={{ height: '180px', objectFit: 'cover' }} 
                  />
                  <div className="card-body">
                    <h4 className="h5 text-white mb-2">Notas del Parche 1.5.0</h4>
                    <p className="small text-orange mb-0 fw-bold">Ayer</p>
                  </div>
                </div>
              </div>

              {/* Noticia 2 */}
              <div className="col">
                <div className="card h-100 bg-secondary-custom border-0 shadow-sm noticia-hover">
                  <img 
                    src={esportsImg} 
                    className="card-img-top" 
                    alt="eSports" 
                    style={{ height: '180px', objectFit: 'cover' }} 
                  />
                  <div className="card-body">
                    <h4 className="h5 text-white mb-2">Torneo de Nexus eSports</h4>
                    <p className="small text-orange mb-0 fw-bold">Hace 3 días</p>
                  </div>
                </div>
              </div>

              {/* Noticia 3 */}
              <div className="col">
                <div className="card h-100 bg-secondary-custom border-0 shadow-sm noticia-hover">
                  <img 
                    src={devImg} 
                    className="card-img-top" 
                    alt="Dev" 
                    style={{ height: '180px', objectFit: 'cover' }} 
                  />
                  <div className="card-body">
                    <h4 className="h5 text-white mb-2">Diario del Desarrollador: Arte Conceptual</h4>
                    <p className="small text-orange mb-0 fw-bold">Hace 1 semana</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}