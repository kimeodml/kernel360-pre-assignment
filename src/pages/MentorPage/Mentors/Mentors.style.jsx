import styled from 'styled-components';

export const Template = styled.div`
  background-color: #FAFAFA;
  padding: 0 30px;
  width: calc(100vw - 174px);
  padding-top: 150px;
`

export const Title = styled.h2`
  display:flex;
`

export const Mentors = styled.ul`
  display: grid;
  margin: 0;
  padding:0;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;


  li {
    height: 228px;
  }

`