import React from "react";
import axios from "axios";
import io from "socket.io-client";
const host = "http://localhost:5000";

const socket = io.connect(host);

const App = () => {
  const hitApi = async () => {
    const response = await axios.post(`${host}/api/socket-test`, {
      name: "Test",
    });

    console.log(response.data);
  };

  const doLogics = React.useCallback((message) => {
    alert(message);
  }, []);

  React.useEffect(() => {
    socket.on("testEvent", (testEvent) => {
      doLogics(testEvent.message);
    });
  }, [doLogics]);

  return (
    <div>
      <button className="bg-red-500 cursor-pointer" onClick={hitApi}>
        Hit API
      </button>
    </div>
  );
};

export default App;
