import styled from "styled-components";
import { theme } from "../../theme";

const Loader = () => {
    return (
       <LoaderStyled>
              <p className="loader-text">Chargement ...</p>
        </LoaderStyled>
   ) 
}

export default Loader;


const LoaderStyled = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: flex;
    justify-content: center;
    align-items: center;
    .loader-text {
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        font-family: ${theme.fonts.family.stylish};
        color: ${theme.colors.greyBlue};
    }    
`
