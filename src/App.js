import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from "./redux/actions";

const App = () => {
  const [username, setUsername] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} placeholder="Enter a nickname" />
        <button type="submit">Get User</button>
      </form>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Company: {user.company}</p>
          <p>Email: {user.email}</p>
          <img src={`https://www.gravatar.com/avatar/${user.gravatar_id}`} alt="Gravatar" />
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>
      )}
    </div>
  );
};

export default App;
