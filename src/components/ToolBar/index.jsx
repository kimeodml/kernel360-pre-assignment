import { Search } from 'lucide-react';
import { LayoutPanelLeft } from 'lucide-react';
import { ArrowDownWideNarrow } from 'lucide-react';
import * as S from './ToolBar.style';



export default function ToolBar() {
  return (
    <S.ToolBar>
      <S.Container>
        <S.Input type="text" placeholder='Search Mentors' />
        <S.Lens><Search /></S.Lens>
      </S.Container>
      <S.Container>
        <span><LayoutPanelLeft />Category</span>
        <span><ArrowDownWideNarrow />Sort by: Popular</span>
      </S.Container>
    </S.ToolBar>
  )
}

