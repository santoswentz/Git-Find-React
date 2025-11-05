import backgroundImage from '../../assets/background.png';
import { Header } from '../../components/Header';
import { ItemList } from '../../components/ItemList';
import './styles.css';

import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleGetData = async () => {
    // Implement search functionality here
    const userData = await fetch('https://api.github.com/users/' + user);
    const newUser = await userData.json();

    console.log(newUser);
  }

  return (
    <div className="App">  
      <Header />
        <div className="content">
          <aside>
          <img src={backgroundImage} alt="Background" className='background-image' />
          </aside>
          <div className="text-content">
            <input type="text" placeholder="Search GitHub repositories..." name='usuario' value={user} onChange={(e) => setUser(e.target.value)} /> 
            <button onClick={handleGetData}>Search</button> 
              <div className="profile-section"> 
                  <img src="https://avatars.githubusercontent.com/u/134004996?s=400&u=3d680ee2b8cb947fc737ff506c491d117f182cf3&v=4" alt="User Avatar"   />
                  <div className="user-details">
                    <h2>Eduarowentz.dev</h2>
                    <span>@santoswentz</span>
                    <p>Dev Full-Stack com 1 ano de experiência</p>
                  </div>
              </div>
            <div className='repositories-section'>
              <hr />
              <h4>Repositories</h4>
              <ItemList title="Item 1" description="Description for Item 1" />
              <ItemList title="Item 2" description="Description for Item 2" />
              <ItemList title="Item 3" description="Description for Item 3" />
            </div>
            </div>
          </div>
    </div>
  );
}

export default App;
 