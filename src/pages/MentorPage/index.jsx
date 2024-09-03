import ToolBar from "components/ToolBar";
import RecentMentors from "./RecentMentors";
import Mentors from "./Mentors";
import * as S from './MentorPage.style';

export default function MentorPage() {
  return (
    <S.Container>
      <ToolBar />
      <RecentMentors />
      <Mentors />
    </S.Container>
  )
}

