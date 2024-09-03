import CATEGORIES from "static/Categories";
import * as S from './SideNavigation.style';

export default function SideNavigation() {
  return (
    <S.SideNavigation>
      {CATEGORIES.map((item) => (
        <S.CategoryList>
          <S.CategoryItem>{item.icon}</S.CategoryItem>
          <S.CategoryItem>{item.name}</S.CategoryItem>
        </S.CategoryList>
      ))}
    </S.SideNavigation>
  )
}

