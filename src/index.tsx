import { useState } from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './components/code-editor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './components/preview';
import bundler from './bundler';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await bundler(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue='const greeting = "Hello World!";'
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
