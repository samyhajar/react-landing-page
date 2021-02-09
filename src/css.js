import { css } from '@emotion/react';

const pageHorizontalMargin = '100px';

const headerStyles = css`
  display: flex;
  align-items: center;
  background-color: white;
  color: grey;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  padding-bottom: 20px;

  h1 {
    margin: 0 auto 0 ${pageHorizontalMargin};
    line-height: 60px;
  }
  a {
    color: grey;
    text-decoration: none;
    padding: 0 10px;
    font-weight: 100 bold;
    font-size: 15px;
    //padding-left: 1em;
    margin: 0 80 0 auto;
    border-bottom: 1px solid transparent;
  }
  .move-it {
    padding-right: 100px;
  }
`;

export default headerStyles;
