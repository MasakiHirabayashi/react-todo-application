import React, { useState } from "react";
import { InputArea } from "./components/InputArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

import "./styles.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [incompleteList, setIncompleteList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  return (
    <>
      <InputArea
        inputText={inputText}
        setInputText={setInputText}
        incompleteList={incompleteList}
        setIncompleteList={setIncompleteList}
      />

      <IncompleteArea 
        incompleteList={incompleteList}
        setIncompleteList={setIncompleteList}
        completeList={completeList}
        setCompleteList={setCompleteList}
      />

      <CompleteArea 
        completeList={completeList}
        setCompleteList={setCompleteList}
        incompleteList={incompleteList}
        setIncompleteList={setIncompleteList}
      />

    </>
  );
}

export default App;
