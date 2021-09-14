import { FC, FunctionComponent, SVGProps } from 'react';
import { StyledElement, StyledIcon, StyledTitle } from './styles';

interface PopupElementProps {
  text: string;
  iconName: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
}

export const PopupElement: FC<PopupElementProps> = ({ text, iconName }) => {
  return (
    <StyledElement className="p-d-flex p-flex-row p-ai-center p-jc-start">
      <StyledIcon as={iconName} />
      <StyledTitle>{text}</StyledTitle>
    </StyledElement>
  );
};
