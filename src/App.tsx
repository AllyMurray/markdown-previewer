import React, { FormEvent, FunctionComponent, useState } from 'react';

import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { markdownPlaceholder } from './data/markdownPlaceholder';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #e0e0e0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    padding: 4em;
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
