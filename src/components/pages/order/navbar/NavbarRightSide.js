import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import AdminToast from "./AdminToast";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import GlobalContext from "../../../../context/GlobalContext";
import { focusOnRef } from "../../../../utils/focusOnRef";

export default function NavbarRightSide() {
  const { isAdminMode, setIsAdminMode, titleEditRef } =
    useContext(GlobalContext);

  const displayToastNotification = async () => {
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
    await setIsAdminMode(!isAdminMode);
    focusOnRef(titleEditRef);
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
