import artistePicture from '../../assets/images/affiche.jpg';
import './Apropos.css';

function Apropos() {
  return (
    <div className='container d-flex flex-column align-items-center'>
      {/* Section de présentation */}
      <div className='container-apropos d-flex flex-column flex-lg-row align-items-center justify-content-center p-4 rounded-4 mb-4 shadow-lg'>
        <div className='container-picture d-flex flex-column align-items-center col-lg-4 mb-lg-0'>
          <img src={artistePicture} alt="Fondateur" className='img-fluid shadow-sm' />
          <h3 className='fst-italic text-center mt-3'>JAED</h3>
        </div>
        <div className='col-lg-6'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
          </p>
        </div>
      </div>

      <div className='container-music w-100'>
        <h2 className='text-center mb-4'>Projets réalisés</h2>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>Titre de la musique 1</h5>
                <p className='card-text'>Description brève de la musique ou de l'album.</p>
                <a href='#' className='btn btn-primary' target='_blanck'>Écouter</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>Titre de la musique 2</h5>
                <p className='card-text'>Description brève de la musique ou de l'album.</p>
                <a href='#' className='btn btn-primary' target='_blanck'>Écouter</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>Titre de la musique 3</h5>
                <p className='card-text'>Description brève de la musique ou de l'album.</p>
                <a href='#' className='btn btn-primary' target='_blanck'>Écouter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
