import * as React from 'react';

import styled from 'styled-components';

interface ITabProps {
  name: string;
}

const TabContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 16px 8px;
  min-width: 300px;

  @media (min-width: 576px) {
    min-width: 500px;
  }
`;

const TabName = styled.div`
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #bdbdbd;
  padding: 4px 16px;
  width: max-content;
`;

const Tab: React.FunctionComponent<ITabProps> = props => {
  return (
    <TabContainer>
      <TabName>{props.name}</TabName>
      {props.children}
    </TabContainer>
  );
};

export default Tab;
