import { FC, useState } from 'react';
import { StyledInpaceCard, PopupMenu, DropDownBtn } from './styles';
import { ReactComponent as ClosePoll } from '../../../assets/icons/ClosePoll.svg';
import { ReactComponent as CreateTemplate } from '../../../assets/icons/CreateTemplate.svg';
import { ReactComponent as DeletePoll } from '../../../assets/icons/DeletePoll.svg';
import { PopupElement } from '../PopupElement';
import OutsideClickHandler from 'react-outside-click-handler';
import { useAppDispatch } from '../../../store/reducers/rootReducer';
import {
  axiosArchivePoll,
  axiosDeletePoll,
  deletePoll
} from '../../../store/actions/pollAction';

interface DropDownCardProps {
  id: number;
  activeStatus?: boolean;
}

export const DropDownCard: FC<DropDownCardProps> = ({ id, activeStatus }) => {
  const dispatch = useAppDispatch();
  const [visiblePopup, setVisiblePopup] = useState(false);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleClickClosePoll = (id: number) => {
    dispatch(axiosArchivePoll(id)).then(() => setVisiblePopup(false));
  };

  const handleClickDeletePoll = (id: number) => {
    dispatch(axiosDeletePoll(id)).then(() => {
      dispatch(deletePoll(id));
      setVisiblePopup(false);
    });
  };

  return (
    <StyledInpaceCard>
      <DropDownBtn className="p-d-flex p-jc-end" onClick={toggleVisiblePopup}>
        <i className="pi pi-ellipsis-h" />
      </DropDownBtn>

      {visiblePopup && (
        <OutsideClickHandler onOutsideClick={() => setVisiblePopup(false)}>
          <PopupMenu>
            <ul>
              {activeStatus ? (
                <li onClick={() => handleClickClosePoll(id)}>
                  <PopupElement text="Завершить опрос" iconName={ClosePoll} />
                </li>
              ) : (
                <li onClick={() => handleClickDeletePoll(id)}>
                  <PopupElement text="Удалить опрос" iconName={DeletePoll} />
                </li>
              )}
              <li>
                <PopupElement text="Создать шаблон" iconName={CreateTemplate} />
              </li>
            </ul>
          </PopupMenu>
        </OutsideClickHandler>
      )}
    </StyledInpaceCard>
  );
};
