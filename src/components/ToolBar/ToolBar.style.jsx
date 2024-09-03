import styled from 'styled-components';

export const ToolBar = styled.div`
  display:flex;
  width: calc(100vw - 174px);
  height: 84px;
  justify-content: space-between;
  align-items: center;

`
export const Input = styled.input`
  display:flex;
  width: 480px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #F5F5F7;

  &::placeholder {
    font-size: 12px;
    padding-left: 20px;
  }

`

export const Lens = styled.div`
  position: relative;
  right: 50px;
  height: 25px;
`

export const Container = styled.div`
  display:flex;
  align-items: center;
  gap: 25px;

  span {
    display:flex;
    align-items: center;
    gap: 10px;
    padding: 14px 30px;
    border-radius: 10px;
    border: 1px solid #F5F5F7;
  }

`