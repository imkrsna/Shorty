import { useEffect, useState } from 'react';
import createUrl from './services/database';
import AppHeader from './components/AppHeader';
import AppResult from './components/AppResult';

const App = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (url) {
      createUrl(url).then(data => setResult(data.url));
    }
  }, [url]);

  return (
    <div className="app">
      <AppHeader setUrl={setUrl}/>
      <AppResult url={url} result={result} />
    </div>
  );
};

export default App;