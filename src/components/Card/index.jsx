import { SquareLibrary, Star } from 'lucide-react';
import * as S from './Card.style';

export default function Card(mentor) {
  const { image, name, job, introduction, numOfTask, reveiwScore, reviewCount } = mentor.mentor;

  return (
    <S.MentorList>
      <S.MentorInfo>
        <img src={image} alt={`${name}-image`} />
        <S.MentorData>
          <span>{name}</span>
          <span>{job}</span>
        </S.MentorData>
        <S.MentorFollow>+ Follow</S.MentorFollow>
      </S.MentorInfo>
      {introduction && <S.MentorIntro>{introduction}</S.MentorIntro>}
      <S.MentorTask>
        <S.TaskData><SquareLibrary />{numOfTask}Task</S.TaskData>
        <S.TaskData><Star />{reveiwScore}({reviewCount}Reviews)</S.TaskData>
      </S.MentorTask>
    </S.MentorList>
  );
}