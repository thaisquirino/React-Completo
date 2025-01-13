import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('');
  return (
    <form>
      <input
        type="text"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
    </form>
  );
};

export default App;
