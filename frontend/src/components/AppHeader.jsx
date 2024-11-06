import { useState } from "react";

const InputBox = ({ setUrl }) => {
  const [inputUrl, setInputUrl] = useState('');

  const handleChange = (event) => setInputUrl(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(inputUrl);
    setInputUrl('');
  };

  return (
    <form className="header__inputbox" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputbox__input"
        placeholder="Enter your url"
        value={inputUrl}
        onChange={handleChange}
      />
      <button type="submit" className="inputbox__button">Create</button>
    </form>
  );
};

const AppHeader = ({ setUrl }) => {
  return (
    <div className="app__header">
      <div className="header__heading">Shorty</div>
      <InputBox setUrl={setUrl}/>
    </div>
  );
};

export default AppHeader;