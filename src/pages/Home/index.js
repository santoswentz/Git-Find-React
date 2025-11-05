import backgroundImage from '../../assets/background.png';
import { Header } from '../../components/Header';
import { ItemList } from '../../components/ItemList';
import './styles.css';

import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null); // ← novo estado

  const handleGetData = async () => {
    if (!user.trim()) {
      setError('Digite um nome de usuário.');
      setCurrentUser(null);
      setRepositories([]);
      return;
    }

    setError(null); // limpa erro anterior

    try {
      const userData = await fetch(`https://api.github.com/users/${user}`);
      
      if (!userData.ok) {
        throw new Error('Usuário não encontrado.');
      }

      const newUser = await userData.json();

      if (newUser.name) {
        const { avatar_url, bio, name, login } = newUser;
        setCurrentUser({ avatar_url, bio, name, login });

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepos = await reposData.json();

        setRepositories(newRepos.length ? newRepos : []);
      } else {
        throw new Error('Usuário inválido.');
      }
    } catch (err) {
      setError(err.message);
      setCurrentUser(null);
      setRepositories([]);
    }
  };

  return (
    <div className="App">  
      <Header />
      <div className="content">
        <aside>
          <img src={backgroundImage} alt="Background" className="background-image" />
        </aside>
        <div className="text-content">
          <input 
            type="text" 
            placeholder="Search GitHub repositories..." 
            name="usuario" 
            value={user} 
            onChange={(e) => setUser(e.target.value)} 
          /> 
          <button onClick={handleGetData}>Search</button> 

          {/* Exibe mensagem de erro */}
          {error && <p className="error-message">{error}</p>}

          {currentUser?.name && (
            <div className="profile-section"> 
              <img src={currentUser.avatar_url} alt="User Avatar" />
              <div className="user-details">
                <h2>{currentUser.name}</h2>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>
          )}

          {repositories?.length > 0 && (
            <div className="repositories-section">
              <hr />
              <h4>Repositories</h4>
              {repositories.map((repo, index) => (
                <ItemList 
                  key={index} 
                  title={repo.name} 
                  description={repo.description} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
