import React, { useState, useEffect } from 'react';

function App() {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
        
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setUsers(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error("Có lỗi khi gọi API:", error);
        setLoading(false); 
      });
  }, []); 
  return (
    <div className="App">
      <h1>Danh sách người dùng</h1>
      {loading ? (
        <p>Đang tải...</p> 
      ) : (
        <ul>
          {}
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong><br />
              Email: {user.email}<br />
              Địa chỉ: {user.address.street}, {user.address.city}<br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;