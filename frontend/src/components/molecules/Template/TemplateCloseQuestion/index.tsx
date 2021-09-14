import { CheckOption, OptionsBlock, TableStyles } from './styles';
import { FC, useCallback, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

interface TemplateCloseQuestionProps {
  optionsArray?: Array<Record<string, any>>;
}

export const TemplateCloseQuestion: FC<TemplateCloseQuestionProps> = ({
  optionsArray
}) => {
  const [flag, setFlag] = useState(false);
  const toggleFlag = useCallback(() => setFlag((prev) => !prev), []);
  const disableFlag = useCallback(() => setFlag(false), []);
  return (
    <>
      <CheckOption className="pi pi-file-o" onClick={toggleFlag} />
      {flag && (
        <OptionsBlock className="p-shadow-13">
          <OutsideClickHandler onOutsideClick={disableFlag}>
            <TableStyles>
              <tbody>
                {optionsArray!.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className="title">Ответ {index + 1}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </TableStyles>
          </OutsideClickHandler>
        </OptionsBlock>
      )}
    </>
  );
};
