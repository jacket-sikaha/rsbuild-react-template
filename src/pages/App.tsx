import { App as AntdApp, Button } from "antd";
import { useState } from "react";

function App() {
  const { message } = AntdApp.useApp();
  const [app, setApp] = useState({
    title: "",
    properties: [],
    deviceProps: {},
  });

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen relative">
      <div className="text-4xl p-3">hello</div>
      <Button
        onClick={() => {
          message.success("hello");
        }}
      >
        message
      </Button>
    </div>
  );
}

export default App;
