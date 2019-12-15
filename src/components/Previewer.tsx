import * as React from "react";

import marked from "marked";
import styled from "styled-components";

interface IPreviewerProps {
  markdown: string;
}

const Preview = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 1em;
  width: 49%;
`;

const Previewer: React.FunctionComponent<IPreviewerProps> = props => {
  return (
    <Preview
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}
    />
  );
};

export default Previewer;
