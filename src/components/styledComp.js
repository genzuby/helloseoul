import styled from "styled-components";
import media from "./media";

// description modify by widow size
export const Desc = styled.p.attrs({
  className: "--detailinfo--desc--small"
})`
  display: ${props => {
    if (props.big) return `block`;
    else return `none`;
  }};
  ${media.desktop`
    display :${props => {
      if (props.big) return `none`;
      else return `block`;
    }};
  `}
`;

// Image Span set or not in detail Infomation
export const ImgSpan = styled.div`
  grid-auto-rows: 10px;
  grid-row-end: ${props => `span ${props.span}`};
  ${media.mobile`
    grid-auto-rows: auto;
    grid-row-end : auto;
  `};
`;

// mobile view
export const ViewRes = styled.div`
  display: ${props => {
    if (props.big) return `block`;
    else return `none`;
  }};
  ${media.desktop`
    display :${props => {
      if (props.big) return `none`;
      else return `block`;
    }};
  `}
`;
