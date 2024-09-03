import { Outlet } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import TopNavigation from "./TopNavigation";
import * as S from './Layout.style';

export default function Layout() {
  return (
    <S.Layout>
      <TopNavigation />
      <S.Container>
        <SideNavigation />
        <Outlet />
      </S.Container>
    </S.Layout>
  )
}

