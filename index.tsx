import * as React from 'react';
import { render } from 'react-dom';
import './style.css';
import TimeSetter from './TimeSetter';

export default function App() {
  return (
    <main className="bg-green-900 p-8">
      <TimeSetter />
    </main>
  );
}

render(<App />, document.getElementById('root'));
