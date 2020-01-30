import React, { FunctionComponent } from 'react';

import Tab from './Tab';
import marked from 'marked';
import styled from 'styled-components';

interface IPreviewerProps {
  markdown: string;
}

const Preview = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  height: 75vh;
  overflow-y: scroll;
  padding: 0 2em;
`;

const Previewer: FunctionComponent<IPreviewerProps> = props => {
  return (
    <Tab name="Previewer">
      <Preview
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(props.markdown) }}
      />
    </Tab>
  );
};

export default Previewer;
