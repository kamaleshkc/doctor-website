import { Typography } from "antd";
import styled from "styled-components";

export const LargestText = styled(Typography.Paragraph)`
  font-size: ${({ theme }) => theme.fontSizes.largest};
  color: ${({ theme }) => theme.colors.primary};
`;

export const LargeText = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

const MediumText = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const SmallText = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const SmallestText = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.smallest};
`;

export default MediumText;
