import React, { useContext } from 'react';
import './LeftMenu.scss';
import { GlobalContext } from '../../context/GlobalState';
import Catergory from '../category/Catergory';

export const LeftMenu = () => {
  const { actions, selectAction } = useContext(GlobalContext);

  return (
    <aside className="leftbar">
      <div className="leftbar__actions">
        {actions.map((el, i) => (
          <div
            className={
              'leftbar__actions__item ' +
              (el.isActive && 'leftbar__actions__item--active')
            }
            key={el.id}
            onClick={() => selectAction(el.id)}
          >
            <div className="leftbar__actions__item__icon">
              <i className="material-icons">{el.icon}</i>
            </div>
            <div className="leftbar__actions__item__content">{el.value}</div>
          </div>
        ))}
      </div>
      {false && <Catergory />}
    </aside>
  );
};
