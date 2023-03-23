import { useContext } from "react";
import styled from "styled-components";
import AdmninTabs from "./AdminTabs";
import AdminPanel from "./adminPanel/AdminPanel";
import GlobalContext from "../../../../../context/GlobalContext";

export default function Admin() {
  const { isCollapsed } = useContext(GlobalContext);

  return (
    <AdminStyled>
      <AdmninTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 3;
`;
