import { FC, useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as IconTemplate } from '../../../../assets/icons/Template.svg';
import { ReactComponent as IconGarbage } from '../../../../assets/icons/Garbage.svg';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../store/reducers/rootReducer';
import {
  addTemplateInfo,
  axiosDeleteTemplates
} from '../../../../store/actions/templatesAction';
import {
  StyleElementIcon,
  TemplateElement,
  TemplateElementTitle
} from './styles';

interface TemplateElementsProps {
  setFlagtemplateInfo: () => void;
}

export const TemplateElements: FC<TemplateElementsProps> = ({
  setFlagtemplateInfo
}) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state) => state.rootReducer.listTemplates.templates.templatesArray
  );
  const [activeItem, setActiveItem] = useState(-1);

  const templateElementClass = (index: number) =>
    classNames({
      'p-d-flex p-flex-row p-jc-between p-ai-center p-shadow-2': true,
      active: activeItem == index
    });

  const handleClickTemplate = (id: number, index: number) => {
    setFlagtemplateInfo();
    dispatch(addTemplateInfo(id));
    setActiveItem(index);
  };

  const deleteTemplate = (id: number) => {
    dispatch(axiosDeleteTemplates(id));
  };

  const TemplateElements = data.map(
    (template: Record<string, any>, index: number) => {
      return (
        <TemplateElement
          key={`${template.id}~${index}`}
          className={templateElementClass(index)}
          onClick={() => handleClickTemplate(template.id, index)}
        >
          <TemplateElementTitle className="p-d-flex p-ai-center">
            <StyleElementIcon as={IconTemplate} />
            <p>{template.name}</p>
          </TemplateElementTitle>
          <StyleElementIcon
            as={IconGarbage}
            onClick={() => deleteTemplate(template.id)}
          />
        </TemplateElement>
      );
    }
  );

  return <>{TemplateElements}</>;
};
