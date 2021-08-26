import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Prompt = styled(Title).attrs((props) => ({ level: 2 }))`
  color: #123148 !important;
  font-weight: 700 !important;
`;

const PromptDetail = styled(Paragraph)`
  color: #697077;
  font-weight: 500 !important;
  display: block;
`;

export { Prompt, PromptDetail };
