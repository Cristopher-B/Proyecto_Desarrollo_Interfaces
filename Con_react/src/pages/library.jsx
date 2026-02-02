import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';

import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';

// Imports de imágenes
import cyberpunk from '../assets/cyberpunk.png';
import doom from '../assets/DoomEternal.png';
import mk11 from '../assets/Mortal-Komba11.png';
import nier from '../assets/nierAutomata.png';
import witcher from '../assets/The Witcher.png';
import civ from '../assets/civilication.png';

export default function Library() {
  return (
    <div className="container-fluid p-0">
      <input type="checkbox" id="menu-toggle" className="d-none" />

      <div className="row g-0">
        <Sidebar />

        {/* El uso de 'col' sin número permite que ocupe todo el espacio restante */}
        <div className="main col px-4 py-3">
          <Header title="Biblioteca" />

          {/* SECCIÓN: JUEGOS INSTALADOS */}
          <section className="installed-games mb-5 w-100">
            <h2 className="h4 mb-4 text-orange border-start border-4 ps-2">
              Juegos Instalados
            </h2>

            {/* Eliminamos flex-column si queremos que respire mejor o aseguramos w-100 */}
            <div className="row g-3">
              {[
                { img: cyberpunk, name: "Cyberpunk 2077", hours: "100h", status: "Instalado" },
                { img: doom, name: "Doom Eternal", hours: "50h", status: "Instalado" },
                { img: mk11, name: "Mortal Kombat X", hours: "0.5h", status: "Instalado" }
              ].map((game, index) => (
                <div className="col-12" key={index}>
                  <div className="game-item d-flex align-items-center p-3 rounded-3 shadow-sm bg-secondary-custom w-100">
                    <img
                      className="game-cover rounded shadow"
                      src={game.img}
                      alt={game.name}
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="game-info ms-3 flex-grow-1">
                      <h3 className="h5 mb-1 text-white">{game.name}</h3>
                      <p className="small mb-0 text-gray">
                        Horas jugadas: {game.hours} | <span className="text-success">{game.status}</span>
                      </p>
                    </div>
                    <button className="btn btn-primary px-4 fw-bold">Jugar</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN: JUEGOS POR INSTALAR */}
          <section className="to-install-games mb-5 w-100">
            <h2 className="h4 mb-4 text-orange border-start border-4 ps-2">
              Juegos por Instalar
            </h2>

            <div className="row g-3">
              {[
                { img: nier, name: "Nier: Automata", status: "Desinstalado" },
                { img: witcher, name: "The Witcher 3", status: "Desinstalado" },
                { img: civ, name: "Civilization VI", status: "Desinstalado" }
              ].map((game, index) => (
                <div className="col-12" key={index}>
                  <div className="game-item d-flex align-items-center p-3 rounded-3 shadow-sm bg-secondary-custom w-100">
                    <img
                      className="game-cover rounded shadow"
                      src={game.img}
                      alt={game.name}
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div className="game-info ms-3 flex-grow-1">
                      <h3 className="h5 mb-1 text-white">{game.name}</h3>
                      <p className="small mb-0 text-gray">Horas jugadas: 0h | {game.status}</p>
                    </div>
                    <button className="btn btn-info px-4 fw-bold text-white">Instalar</button>
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