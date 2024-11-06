const ResultBox = ({ title, url }) => {
  return (
    <div className="result__box">
      <div className="box__heading">{title}</div>
      <input type="text" className="box__text" value={url} placeholder="Create Url" disabled />
    </div>
  );
}

const AppResult = ({ url, result }) => {
  return (
    <div className="app__result">
      <ResultBox title={'Your Url'} url={url} />
      <ResultBox title={'Shorty Url'} url={result} />
    </div>
  );
};

export default AppResult;