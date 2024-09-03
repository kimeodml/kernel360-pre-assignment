export default function Search() {
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

