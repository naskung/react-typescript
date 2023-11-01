import React, { useState } from 'react';
import { generatePermutations } from './utils/permutations';
import { findOddInt } from './utils/findOddInt';
import { countSmileys } from './utils/countSmileys';


const App: React.FC = () => {
  const [permInput, setPermInput] = useState<string>("");
  const [oddIntInput, setOddIntInput] = useState<string>("");
  const [smileysInput, setSmileysInput] = useState<string>("");

  const [permutationsOutput, setPermutationsOutput] = useState<string[]>([]);
  const [oddIntOutput, setOddIntOutput] = useState<number | null>(null);
  const [smileysOutput, setSmileysOutput] = useState<number | null>(null);

  return (
    <div>
      {/* Permutations */}
      <div>
        <input value={permInput} onChange={(e) => setPermInput(e.target.value)} />
        <button onClick={() => setPermutationsOutput(generatePermutations(permInput))}>
          Generate Permutations
        </button>
      </div>

      {/* Odd Integer */}
      <div>
        <input value={oddIntInput} onChange={(e) => setOddIntInput(e.target.value)} />
        <button onClick={() => {
          const arr = oddIntInput.split(',').map(item => parseInt(item, 10));
          setOddIntOutput(findOddInt(arr));
        }}>
          Find Odd Integer
        </button>
      </div>

      {/* Count Smileys */}
      <div>
        <input value={smileysInput} onChange={(e) => setSmileysInput(e.target.value)} />
        <button onClick={() => setSmileysOutput(countSmileys(smileysInput.split(',')))}>
          Count Smileys
        </button>
      </div>

      {/* Output */}
      <ul>
        {permutationsOutput.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>

      {oddIntOutput !== null && <p>Odd Integer: {oddIntOutput}</p>}
      {smileysOutput !== null && <p>Smileys Count: {smileysOutput}</p>}
    </div>
  );
};

export default App;
