import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";


function App() {
  
  const { unityProvider } = useUnityContext({
    loaderUrl: "./CerealisWebGLv2/build/CerealisWebGLv2.loader.js",
    dataUrl: "./CerealisWebGLv2/build/CerealisWebGLv2.data",
    frameworkUrl: "./CerealisWebGLv2/build/CerealisWebGLv2.framework.js",
    codeUrl: "./CerealisWebGLv2/build/CerealisWebGLv2.wasm",
  });
  return (
    <div className="App">
      <h1>TEST WEB REACT</h1>
      <Unity 
      unityProvider={unityProvider}
      style={{
        width: "1000px",
        height: "800px",
      }}
      />
    </div>
  );
}

export default App;
