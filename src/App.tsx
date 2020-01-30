import React, { FormEvent, FunctionComponent, useState } from 'react';

import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { markdownPlaceholder } from './data/markdownPlaceholder';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;

  @media (min-width: 768px) {
    padding: 1em;
  }

  @media (min-width: 992px) {
    overflow-y: hidden;
    padding: 3em;
  }
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
