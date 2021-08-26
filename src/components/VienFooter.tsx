import { FC } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const VienFooterStyle = styled(Paragraph)`
  color: #697077;

  & > a {
    color: #123148;
  }
`;

const VienFooter: FC = () => {
  return (
    <VienFooterStyle>
      &copy; {new Date().getFullYear()} Vien Health &#9679;{' '}
      <a href='/'>Terms &amp; Conditions</a> &#9679;{' '}
      <a href='/'>Privacy Policy</a>
    </VienFooterStyle>
  );
};

export default VienFooter;
