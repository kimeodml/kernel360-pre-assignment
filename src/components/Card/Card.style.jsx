import styled from 'styled-components';

export const MentorList = styled.li`
  display:flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  background-color: #FFFFFF;
`
export const MentorInfo = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 200px;
  }
`

export const MentorData = styled.div`
  display:flex;
  flex-direction: column;

  span:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
  }

  span:nth-child(2) {
    font-size: 12px;
    color: #54577A;
  }
`

export const MentorFollow = styled.div`
  color: #546FFF;
  font-size: 14px;
  font-weight: 500;
`

export const MentorTask = styled.div`
  display: flex;
  justify-content: space-around;
`

export const TaskData = styled.div`
  display:flex;
  align-items: center;
  font-size: 14px;
  color: #141522;
  gap: 10px;
`

export const MentorIntro = styled.div`
  display:flex;
  padding: 0 24px;
  font-size: 14px;
  color: #8E92BC;
`