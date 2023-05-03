import styled from "styled-components";

type SpaceProps = {
  w?: string;
  h?: string;
};

export const Space = styled.div<SpaceProps>`
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "1px"};
`;

export type JustifyContentProps =
  | "inherit"
  | "initial"
  | "normal"
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "left"
  | "right"
  | "start"
  | "end"
  | "stretch"
  | "unset";

export type AlignItemsProps =
  | "inherit"
  | "initial"
  | "flex-start"
  | "flex-end"
  | "center"
  | "start"
  | "end"
  | "normal"
  | "stretch"
  | "baseline"
  | "unset";

export interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  j?: JustifyContentProps;
  a?: AlignItemsProps;
  d?: "row" | "row-reverse" | "column" | "column-reverse";
  g?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ j }) => j || "normal"};
  align-items: ${({ a }) => a || "normal"};
  flex-direction: ${({ d }) => d || "row"};
  gap: ${({ g }) => g || "0px"};
`;
