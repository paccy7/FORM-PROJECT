import React, { useState, type CSSProperties, type Dispatch, type SetStateAction } from 'react';

interface CreateUserFormProps {
  setUserWasCreated: Dispatch<SetStateAction<boolean>>;
}

const CreateUserForm: React.FC<CreateUserFormProps> = ({ setUserWasCreated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');
    alert('User created successfully!');
    setUserWasCreated(true);
    // Additional user creation logic can go here
  };

  return (
    <div style={formWrapper}>
      <form style={form} onSubmit={validateForm}>
        <label htmlFor="username" style={formLabel}>Username:</label>
        <input
          type="text"
          id="username"
          style={formInput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" style={formLabel}>Password:</label>
        <input
          type="password"
          id="password"
          style={formInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="error" style={{ color: 'red' }}>{error}</div>}

        <button type="submit" style={formButton}>Create User</button>
      </form>
    </div>
  );
};

export { CreateUserForm };

// --- Styles ---

const formWrapper: CSSProperties = {
  maxWidth: '500px',
  width: '80%',
  backgroundColor: '#efeef5',
  padding: '24px',
  borderRadius: '8px',
  margin: 'auto',
};

const form: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const formLabel: CSSProperties = {
  fontWeight: 700,
};

const formInput: CSSProperties = {
  outline: 'none',
  padding: '8px 16px',
  height: '40px',
  fontSize: '14px',
  backgroundColor: '#f8f7fa',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '4px',
};

const formButton: CSSProperties = {
  outline: 'none',
  borderRadius: '4px',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  backgroundColor: '#7135d2',
  color: 'white',
  fontSize: '16px',
  fontWeight: 500,
  height: '40px',
  padding: '0 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '8px',
  alignSelf: 'flex-end',
  cursor: 'pointer',
};