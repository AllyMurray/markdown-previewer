import React, { FormEvent, FunctionComponent } from 'react';

import Tab from './Tab';
import styled from 'styled-components';

interface IEditorProps {
  onChange: (event: FormEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const TextArea = styled.textarea`
  box-sizing: border-box;
  border: none;
  height: 75vh;
  margin: 0;
  padding: 0.75em 2em 0;
  resize: none;
`;

const Editor: FunctionComponent<IEditorProps> = props => {
  return (
    <Tab name="Editor">
      <TextArea id="editor" onChange={props.onChange}>
        {props.value}
      </TextArea>
    </Tab>
  );
};

export default Editor;
