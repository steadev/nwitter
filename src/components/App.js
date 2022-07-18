import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { fAuth } from '../firebase';
import AppRouter from "./Router";

function App() {
  const [init, setInit] = useState(false);
  const [userObject, setUserObject] = useState(null);
  const sse = () => {
    // // 이벤트를 전달 받기 위해서 서버로 접속을 시작하려면 우선, 이벤트를 생성하는 서버측 스크립트를 URI로 지정하여 새로운 EventSource 객체를 생성한다
    // // EventSource 생성자에 전달 된 URL이 절대 URL 인 경우 해당 출처 (scheme, domain, port)가 호출 페이지의 출처와 일치해야 한다.
    // const eventSource = new EventSource(`http://localhost:7777`); // sse코드가 있는 서버단 파일
    
    // // 서버로부터 데이터가 오면
    // eventSource.addEventListener('message', function(e) {
    //   console.log(e.data);
    // });
    
    // // connection되면
    // eventSource.addEventListener('open', function(e) {
    //   // Connection was opened.
    //   console.log('opened');
    // });
    
    // // error 나면
    // eventSource.addEventListener('error', function(e) {
    //   if (e.readyState === EventSource.CLOSED) {
    //     console.log('closed');
    //   }
    // });
  }
  useEffect(() => {
    sse();
    onAuthStateChanged(fAuth, (user) => {
      console.log('???');
      console.log(user);
      if (user) {
        setUserObject(user);
      } else {
        setUserObject(null);
      }
      setInit(true);
    })
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObject)} userObj={userObject} />
      ) : "Initializing..."}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
