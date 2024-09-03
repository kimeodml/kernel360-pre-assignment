import styled from 'styled-components';

export const Template = styled.div`
  background-color: #FAFAFA;
  padding-left: 30px;
  position: relative;
`

export const Title = styled.h2`
  display:flex;
  width: calc(100vw - 204px);
`

export const Mentors = styled.ul`
  position: absolute;
  z-index: 10;
  display:flex;
  margin:0;
  padding:0;
  width: calc(100vw - 204px);
  overflow:hidden;
  gap: 30px;

  li {
    width: 328px;
    height: 140px;
  }
`