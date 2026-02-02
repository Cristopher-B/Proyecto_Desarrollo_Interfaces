import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';

import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

// Imports de imágenes
import tesoImg from '../assets/TESO.png';
import stardewImg from '../assets/Logo_of_Stardew_Valley.png';
import sekiroImg from '../assets/Sekiro_art.png';
import codImg from '../assets/modernW.png';
import starcraftImg from '../assets/StarCraft_II_-_Box_Art.png';

export default function Recommendations() {
  return (
    <div className="container-fluid p-0">
      <input type="checkbox" id="menu-toggle" className="d-none" />

      {/* USAMOS D-FLEX PURO: Esto ignora las reglas de grilla que causan el margen izquierdo */}
      <div className="d-flex w-100">
        
        {/* Sidebar entra directo. Al ser d-flex, se pega a la izquierda 
            y respeta sus 300px del CSS sin que col-auto moleste */}
        <Sidebar />

        {/* El contenido principal fluye a la derecha */}
        <div className="main flex-grow-1 px-4 py-3">
          <Header title="Recomendaciones" />

          {/* SECCIÓN: BASADO EN TU ACTIVIDAD */}
          <section className="personalizadas mb-5">
            <h2 className="h4 mb-4 text-white">Basado en tu actividad</h2>
            {/* Solo usamos row aquí adentro para las tarjetitas */}
            <div className="row g-4 m-0">
              
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 bg-secondary-custom border-0 shadow-sm position-relative overflow-hidden">
                  <div className="tag-recomendacion personalizada">Personalizada</div>
                  <img src={tesoImg} className="card-img-top" alt="Elder Scrolls Online" />
                  <div className="card-body text-center">
                    <h3 className="h6 text-white mb-2">Elder Scrolls Online</h3>
                    <p className="text-orange fw-bold mb-0">$9.99</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 bg-secondary-custom border-0 shadow-sm position-relative overflow-hidden">
                  <div className="tag-recomendacion alto-rating">Alto Rating</div>
                  <img src={stardewImg} className="card-img-top" alt="Stardew Valley" />
                  <div className="card-body text-center">
                    <h3 className="h6 text-white mb-2">Stardew Valley</h3>
                    <p className="text-orange fw-bold mb-0">$14.99</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 bg-secondary-custom border-0 shadow-sm position-relative overflow-hidden">
                  <div className="tag-recomendacion personalizada">Personalizada</div>
                  <img src={sekiroImg} className="card-img-top" alt="Sekiro" />
                  <div className="card-body text-center">
                    <h3 className="h6 text-white mb-2">Sekiro: Shadows Die Twice</h3>
                    <p className="text-orange fw-bold mb-0">$39.99</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SECCIÓN: LO MÁS VENDIDO */}
          <section className="populares mb-5">
            <h2 className="h4 mb-4 text-white">Lo más vendido de la semana</h2>
            <div className="row g-4 m-0">
              
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 bg-secondary-custom border-0 shadow-sm position-relative overflow-hidden">
                  <div className="tag-recomendacion popular">Popular</div>
                  <img src={codImg} className="card-img-top" alt="Call of Duty" />
                  <div className="card-body text-center">
                    <h3 className="h6 text-white mb-2">Modern Warfare III</h3>
                    <p className="text-orange fw-bold mb-0">$69.99</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 bg-secondary-custom border-0 shadow-sm position-relative overflow-hidden">
                  <div className="tag-recomendacion alto-rating">Alto Rating</div>
                  <img src={starcraftImg} className="card-img-top" alt="StarCraft 2" />
                  <div className="card-body text-center">
                    <h3 className="h6 text-white mb-2">StarCraft II</h3>
                    <p className="text-orange fw-bold mb-0">$19.99</p>
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