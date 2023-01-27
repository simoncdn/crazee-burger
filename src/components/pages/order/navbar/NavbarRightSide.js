import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import AdminToast from "./AdminToast";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

export default function NavbarRightSide() {
  const { isAdminMode, setIsAdminMode, setTabIndex, setWindowPanel } =
    useContext(GlobalContext);

  const displayToastNotification = () => {
    if (!isAdminMode) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsAdminMode(!isAdminMode);
    setTabIndex(0);
    setWindowPanel(true);
  };

  return (
    <NavbarRightSideStyled className="nav-side-right">
      <ToggleButton
        onToggle={displayToastNotification}
        isChecked={isAdminMode}
        labelIfChecked="Désactiver le mode admin"
        labelIfUnchecked="Activer le mode admin"
      />
      <Profile />
      <AdminToast />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
