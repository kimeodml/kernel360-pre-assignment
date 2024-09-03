import { Bell } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import * as S from './TopNavigation.style';

export default function TopNavigation() {
  return (
    <S.TopNavigation>
      <S.Logo>
        KernelMentor
      </S.Logo>
      <S.Container>
        <S.Container><Bell /></S.Container>
        <S.Container><UserRoundPen /></S.Container>
      </S.Container>
    </S.TopNavigation>
  )
}

