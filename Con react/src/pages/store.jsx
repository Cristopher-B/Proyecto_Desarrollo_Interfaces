import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';

import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

// Imports de imágenes
import isaac from '../assets/isaac.png';
import hollow from '../assets/hollow.png';
import hades from '../assets/hades.png';
import blasphemous from '../assets/blasphemous2.png';
import cuphead from '../assets/cuphead.png';
import mk11 from '../assets/mk11.png';
import gow from '../assets/gow.png';
import dmc5 from '../assets/dmc5.png';

export default function Store() {
  const titulosDisponibles = [
    { img: isaac, name: "The Binding of Isaac", price: "$4.99" },
    { img: hollow, name: "Hollow Knight Silksong", price: "$6.99" },
    { img: hades, name: "Hades", price: "$4.99" },
    { img: blasphemous, name: "Blasphemous 2", price: "$14.99" },
  ];

  const recienAnadidos = [
    { img: cuphead, name: "Cuphead", price: "$19.99" },
    { img: mk11, name: "Mortal Kombat 11", price: "$11.99" },
    { img: gow, name: "God of War", price: "$49.99" },
    { img: dmc5, name: "Devil May Cry 5", price: "$23.00" },
  ];

  return (
    <div className="container-fluid p-0">
      <input type="checkbox" id="menu-toggle" className="d-none" />

      <div className="row g-0">
        <Sidebar />

        <div className="main col px-4 py-3">
          <Header title="Tienda" />

          {/* SECCIÓN: CATEGORÍAS */}
          <section className="categoria mb-5">
            <h2 className="h4 mb-4 text-white">Explorar por categoría</h2>
            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-rpg px-4 py-2 fw-bold text-white shadow-sm">RPG</button>
              <button className="btn btn-indie px-4 py-2 fw-bold text-white shadow-sm">Indie</button>
              <button className="btn btn-accion px-4 py-2 fw-bold text-white shadow-sm">Acción</button>
              <button className="btn btn-estrategia px-4 py-2 fw-bold text-white shadow-sm">Estrategia</button>
            </div>
          </section>

          {/* SECCIÓN: TÍTULOS DISPONIBLES */}
          <section className="titulos mb-5 w-100">
            <h2 className="h4 mb-4 text-white">Títulos Disponibles</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {titulosDisponibles.map((game, index) => (
                <div className="col" key={index}>
                  <div className="card h-100 bg-secondary-custom border-0 shadow-sm overflow-hidden card-hover">
                    <img src={game.img} className="card-img-top" alt={game.name} style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                      <h3 className="h6 text-white mb-2">{game.name}</h3>
                      <p className="text-orange fw-bold mb-0">{game.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN: RECIÉN AÑADIDOS */}
          <section className="nuevos mb-5 w-100">
            <h2 className="h4 mb-4 text-white">Recién añadidos</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {recienAnadidos.map((game, index) => (
                <div className="col" key={index}>
                  <div className="card h-100 bg-secondary-custom border-0 shadow-sm overflow-hidden card-hover">
                    <img src={game.img} className="card-img-top" alt={game.name} style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="card-body text-center">
                      <h3 className="h6 text-white mb-2">{game.name}</h3>
                      <p className="text-orange fw-bold mb-0">{game.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}