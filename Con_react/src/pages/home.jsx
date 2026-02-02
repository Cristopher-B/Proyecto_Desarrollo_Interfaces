import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';

import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

// Imports de imágenes
import doom from '../assets/DoomEternal.png';
import witcher from '../assets/The Witcher.png';
import civ from '../assets/civilication.png';
import flight from '../assets/flight simulator.png';
import assassins from '../assets/assesins creed.png';
import cyberpunk from '../assets/cyberpunk.png';
import nier from '../assets/nierAutomata.png';
import mk11 from '../assets/Mortal-Komba11.png';
import gow from '../assets/gow.png';
import blas from '../assets/blas.png';

export default function Home() {
  return (
    <div className="container-fluid p-0">
    
      <input type="checkbox" id="menu-toggle" className="d-none" />
      
      <div className="row g-0">
        <Sidebar />

        <div className="main col px-4">
          <Header title="Inicio" />

          {/* HERO */}
          <section className="hero p-5 rounded-4 mb-5 text-center shadow">
            <div className="hero-content">
              <h2 className="display-6 fw-bold">
                Nuevos Lanzamientos: <span className="text-orange">Furia Cósmica</span>
              </h2>
              <p className="lead">Pre-ordena ahora y recibe un descuento del 20%</p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <button className="btn btn-primary px-4 fw-bold">Compra Pre-venta - 49.99$</button>
                <button className="btn btn-outline-light px-4">Ver más →</button>
              </div>
            </div>
          </section>

          <section className="ofertas mb-5">
            <h3 className="border-start border-primary border-4 ps-3 mb-4">Ofertas del 50% de descuento</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={doom} className="img-fluid rounded mb-2 shadow" alt="Doom" />
                  <p className="mb-1">Doom Eternal</p>
                  <span className="fw-bold text-orange">29.99$</span>
                </div>
              </div>
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={witcher} className="img-fluid rounded mb-2 shadow" alt="Witcher" />
                  <p className="mb-1">The Witcher 3</p>
                  <span className="fw-bold text-orange">19.99$</span>
                </div>
              </div>
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={civ} className="img-fluid rounded mb-2 shadow" alt="Civ" />
                  <p className="mb-1">Civilization VI</p>
                  <span className="fw-bold text-orange">29.99$</span>
                </div>
              </div>
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={flight} className="img-fluid rounded mb-2 shadow" alt="Flight" />
                  <p className="mb-1">Flight Simulator</p>
                  <span className="fw-bold text-orange">34.99$</span>
                </div>
              </div>
            </div>
          </section>

          {/* NUBE */}
          <section className="nube mb-5">
            <h3 className="border-start border-primary border-4 ps-3 mb-4">Jugar Desde la Nube</h3>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={assassins} className="img-fluid rounded mb-2 shadow" alt="AC" />
                  <p className="mb-2 fw-bold">Assassin's Creed Valhalla</p>
                  <button className="btn btn-primary w-100">Reanudar</button>
                </div>
              </div>
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={cyberpunk} className="img-fluid rounded mb-2 shadow" alt="Cyberpunk" />
                  <p className="mb-2 fw-bold">Cyberpunk 2077</p>
                  <button className="btn btn-primary w-100">Reanudar</button>
                </div>
              </div>
            </div>
          </section>

          {/* COMPRAR */}
          <section className="comprar mb-5">
            <h3 className="border-start border-primary border-4 ps-3 mb-4">Comprar</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={nier} className="img-fluid rounded mb-2 shadow" alt="Nier" />
                  <p className="mb-1">Nier: Automata</p>
                  <span className="fw-bold text-orange">29.99$</span>
                </div>
              </div>
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={mk11} className="img-fluid rounded mb-2 shadow" alt="MK11" />
                  <p className="mb-1">Mortal Kombat 11</p>
                  <span className="fw-bold text-orange">28.59$</span>
                </div>
              </div>
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={gow} className="img-fluid rounded mb-2 shadow" alt="GOW" />
                  <p className="mb-1">God of War</p>
                  <span className="fw-bold text-orange">49.99$</span>
                </div>
              </div>
              <div className="col">
                <div className="juego p-3 rounded-3 text-center h-100 shadow-sm">
                  <img src={blas} className="img-fluid rounded mb-2 shadow" alt="Blasphemous" />
                  <p className="mb-1">Blasphemous</p>
                  <span className="fw-bold text-orange">19.99$</span>
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