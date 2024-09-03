import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
`

export const Template = styled.div`
  background-color: #FAFAFA;
  padding-left: 30px;
  position: relative;
  width: calc(100vw - 174px);
  height: calc(100vh - 80px);
`

export const Title = styled.h2`
  display:flex;
`

export const Mentors = styled.ul`
  display:flex;
  position: absolute;
  overflow: hidden;
  margin:0;
  padding:0;
  gap: 30px;
  overflow: hidden;
`

export const MentorList = styled.li`
  display:flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  background-color: #FFFFFF;
  width: 328px;
  height: 140px;
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