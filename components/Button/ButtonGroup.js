import { getTextAlign } from "@utils/helper";
import { SectionContainer } from "@components/Section";

export const ButtonGroup = ({ className = "", alignment, children }) => {
    const alignClass = getTextAlign(alignment);
    return (
        <SectionContainer className="btn-group">
            {children}
        </SectionContainer>
    );
};
