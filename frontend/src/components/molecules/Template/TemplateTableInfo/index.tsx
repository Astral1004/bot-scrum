import { TableStyles, QuestionDescription } from './styles';
import { useAppSelector } from '../../../../store/reducers/rootReducer';
import { TemplateCloseQuestion } from '../TemplateCloseQuestion';
import Moment from 'react-moment';

export const TemplateInfo = () => {
  const data = useAppSelector(
    (state) => state.rootReducer.listTemplates.templateInfo
  );

  const TemplateInfo = data.questionTemplate.map(
    (element: Record<string, any>, index: number) => {
      return (
        <tr key={element.question.id}>
          <td className="title">Вопрос {index + 1}</td>
          <td>
            <div className="p-d-flex p-flex-row p-jc-between">
              <QuestionDescription>
                {element.question.description}
              </QuestionDescription>
              {element.question.type !== 0 && (
                <TemplateCloseQuestion
                  optionsArray={element.question.options}
                />
              )}
            </div>
          </td>
        </tr>
      );
    }
  );

  return (
    <TableStyles>
      {data.id && (
        <tbody>
          <tr>
            <td className="title">Название опроса</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td className="title">Приватность</td>
            <td></td>
          </tr>
          <tr>
            <td className="title">Периодичность</td>
            <td>{data.type}</td>
          </tr>
          <tr>
            <td className="title">Дата и время</td>
            <td>
              <Moment format=" c YYYY/MM/DD в HH:mm">
                {String(data.date)}
              </Moment>
            </td>
          </tr>
          {TemplateInfo}
        </tbody>
      )}
    </TableStyles>
  );
};
