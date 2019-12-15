import React, { FormEvent, FunctionComponent, useState } from "react";

import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { markdownPlaceholder } from "./data/markdownPlaceholder";
import styled from "styled-components";

const Wrapper = styled.div`
  background: lightgray;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 4em;
  width: 100%;
`;

const App: FunctionComponent = () => {
  const [markdown, setMarkdown] = useState(markdownPlaceholder);

  const handleEditorChange = (event: FormEvent<HTMLTextAreaElement>) => {
    setMarkdown((event.target as HTMLTextAreaElement).value);
  };

  return (
    <Wrapper>
      <Editor onChange={handleEditorChange} value={markdown} />
      <Previewer markdown={markdown} />
    </Wrapper>
  );
};

export default App;
