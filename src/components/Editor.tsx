import * as React from "react";

import { FormEvent } from "react";
import styled from "styled-components";

interface IEditorProps {
  onChange: (event: FormEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const TextArea = styled.textarea`
  box-sizing: border-box;
  padding: 1em;
  width: 49%;
`;

const Editor: React.FunctionComponent<IEditorProps> = props => {
  return (
    <TextArea id="editor" onChange={props.onChange}>
      {props.value}
    </TextArea>
  );
};

export default Editor;
