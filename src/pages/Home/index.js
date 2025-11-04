import backgroundImage from '../../assets/background.png';
import { Header } from '../../components/Header';
import './styles.css';

function App() {
  return (
    <div className="App">  
      <Header />
        <div className="content">
          <img src={backgroundImage} alt="Background" className='background-image' />
          <div className="text-content">
            <input type="text" placeholder="Search GitHub repositories..." name='usuario' />
            <button>Search</button> 
              <div className="profile-section"> 
                  <img src="https://avatars.githubusercontent.com/u/134004996?s=400&u=3d680ee2b8cb947fc737ff506c491d117f182cf3&v=4" alt="User Avatar"   />
                  <div className="user-details">
                    <h2>Eduarowentz.dev</h2>
                    <span>@santoswentz</span>
                    <p>Dev Full-Stack com 1 ano de experiência</p>
                  </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default App;

          {/* </div>
          <div className="repositories-section">
            <div className="repository-list">
              <div className="repository-item">
                <h2>Repository Name</h2>
              </div>
            </div>
        </div> */}