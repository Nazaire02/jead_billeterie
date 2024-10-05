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
                <h5 className='card-title fw-bold fst-italic'>De retour</h5>
                <p className='card-text'>Un single qui évoque notre retour après plusieurs absences sur la scène musicale. Appréciez donc !</p>
                <a href='https://youtu.be/4G92bj7_Mck?si=a_bgUJT0U34Y1NuP' className='btn btn-primary' target='_blanck'>Écouter</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title fw-bold fst-italic'>Dôhi</h5>
                <p className='card-text'>Dans le jargon ivoirien, le terme <span className='fw-bold'>Dôhi</span> désigne le mensonge. Le fameux duo Jaed, en cherchant à apporter de la joie aux auditeurs à travers cette magnifique chanson, dénonce le mensonge dans la société.</p>
                <a href='https://youtu.be/0x8A41mJc6I?si=ljQtU72OebRwkfcY' className='btn btn-primary' target='_blanck'>Écouter</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-4 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>Pinhou </h5>
                <p className='card-text'>Dans la noushi ivoirienne, le terme <span className='fw-bold'>Pinhou</span> désigne la prostituée. Grâce à cette belle Vibe🎼 qui transcende l'âme des fans, le duo Jaed sensibilise la jeunesse ivoirienne, en particulier les femmes ivoiriennes, à ne pas se laisser influencer par qui que ce soit.</p>
                <a href='https://youtu.be/Tt-cNZfEYu4?si=ZgYUKmgdb9OEGSMZ' className='btn btn-primary' target='_blanck'>Écouter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
