import { useState, useEffect, useRef } from 'react';
import Button from './components/Button';

import coinListStyle from './css/coinListStyle.module.css';

function App() {
  const COINAPI = 'https://api.coinpaprika.com/v1/tickers';

  const [loading, setLoading] = useState(true);

  const [coinsList, setCoinsList] = useState([]);

  useEffect(() => {
    fetch(COINAPI)
      .then((response) => response.json())
      .then((json) => {
        //api로 얻어온 json 정보를 state에 추가
        console.log(json);
        setCoinsList(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>코인정보 ({!loading ? coinsList.length : 0})</h1>
      <div>{loading ? <strong>코인 정보 불러오는 중 .... </strong> : null}</div>

      <ul className={coinListStyle.bl_coinListStyle}>
        {!loading
          ? coinsList.map((current) => {
              return (
                <li key={current.id}>
                  <label>
                    <input type="radio" name="coin" />
                    <span>
                      {current.name} ({current.symbol})
                    </span>
                    <dfn>가격</dfn>
                    <span>${current.quotes.USD.price}</span>
                    <dfn>마지막 업데이트</dfn>
                    <span>
                      {current.last_updated.split('T')[0]} {current.last_updated.split('T')[1]}
                    </span>
                  </label>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default App;
