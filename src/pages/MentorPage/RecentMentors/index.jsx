import Card from "components/Card";
import RECENT_MENTORS from "static/recentMentors";
import * as S from './RecentMentors.style';

export default function RecentMentors() {
  console.log(RECENT_MENTORS);
  return (
    <S.Template>
      <S.Title>Recent Mentors</S.Title>
      <S.Mentors>
        {RECENT_MENTORS.map((mentor) => (
          <Card key={`${mentor.image}-${mentor.name}`} mentor={mentor} />
        ))}
      </S.Mentors>
    </S.Template>
  )
}

