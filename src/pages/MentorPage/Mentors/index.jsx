import MENTORS from "static/mentors";
import Card from 'components/Card';
import * as S from './Mentors.style'

export default function Mentors() {
  return (
    <S.Template>
      <S.Title>Mentors</S.Title>
      <S.Mentors>
        {MENTORS.map((mentor) => (
          <Card key={`${mentor.image}-${mentor.name}`} mentor={mentor} />
        ))}
      </S.Mentors>
    </S.Template>
  )
}

