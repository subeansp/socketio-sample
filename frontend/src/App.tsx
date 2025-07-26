import { useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  useEffect(() => {
    const newSocket = io("http://localhost:8000");

    newSocket.on("connect", () => {
      console.log(`サーバーに接続しました sid: ${newSocket.id}`);
    });

    newSocket.on("disconnect", () => {
      console.log("サーバーから切断されました");
    });

    return () => {
      console.log("Socket接続をクリーンアップ");
      newSocket.close();
    };
  }, []);

  return (
    <form>
      <h1>Socket.IO Reactクライアント</h1>
      <input type="text" placeholder="メッセージ" />
      <button type="submit">送信</button>
    </form>
  );
};

export default App;
