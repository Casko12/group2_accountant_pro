import {
  Uil500px,
  UilBagAlt,
  UilCalendarAlt,
  UilCheckSquare,
  UilClipboardAlt,
  UilChartBar,
  UilExchange,
  UilBookOpen,
  UilShoppingCart,
  UilUsersAlt,
  UilCompactDisc,
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const path = '/main/';

  const pathName = window.location.pathname;
  const pathArray = pathName ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const items = [
    getItem(t('Overview'), 'dashboard', !topMenu && <UilChartBar />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          {t('Overview')}
        </NavLink>,
        'demo-1',
        null,
      ),
    ]),

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('application')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(t('eCommerce'), 'ecommerce', !topMenu && <UilShoppingCart />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/products/grid`}>
          {t('products')}
        </NavLink>,
        'products',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/productDetails/1`}>
          {t('product')} {t('details')}
        </NavLink>,
        'productDetails',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/add-product`}>
          {t('product')} {t('add')}
        </NavLink>,
        'add-product',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/edit-product`}>
          {t('product')} {t('edit')}
        </NavLink>,
        'edit-product',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/cart`}>
          {t('cart')}
        </NavLink>,
        'cart',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/orders`}>
          {t('orders')}
        </NavLink>,
        'orders',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/sellers`}>
          {t('sellers')}
        </NavLink>,
        'sellers',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ecommerce/Invoice`}>
          {t('invoices')}
        </NavLink>,
        'Invoice',
        null,
      ),
    ]),
    getItem(t('Payroll'), 'ecommerce', !topMenu && <UilCompactDisc />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/payroll/create-payroll`}>
          {t('create')} {t('payroll')}
        </NavLink>,
        'create-payroll',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/payroll/create-advance`}>
          {t('create')} {t('advance')}
        </NavLink>,
        'create-advance',
        null,
      ),
    ]),
    getItem(`${t('social')} ${t('app')}`, 'profile', !topMenu && <Uil500px />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/overview`}>
          {t('my')} {t('profile')}
        </NavLink>,
        'myProfile',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/timeline`}>
          {t('timeline')}
        </NavLink>,
        'profileTimeline',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/profile/myProfile/activity`}>
          {t('activity')}
        </NavLink>,
        'profileActivity',
        null,
      ),
    ]),
    getItem(t('project'), 'project', !topMenu && <UilBagAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/view/grid`}>
          {t('project')} {t('grid')}
        </NavLink>,
        'projectGrid',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/view/list`}>
          {t('project')} {t('list')}
        </NavLink>,
        'projectList',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/create`}>
          {t('create')} {t('project')}
        </NavLink>,
        'ProjectCreate',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/project/projectDetails/1/tasklist`}>
          {t('project')} {t('details')}
        </NavLink>,
        'projectDetails',
        null,
      ),
    ]),
    getItem(t('Income'), 'income', !topMenu && <UilBookOpen />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/income/view/list`}>
          {t('income')} {t('list')}
        </NavLink>,
        'Income',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/income/create`}>
          {t('create')} {t('income')}
        </NavLink>,
        'IncomeCreate',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/income/incomeDetails`}>
          {t('income')} {t('details')}
        </NavLink>,
        'incomeDetails',
        null,
      ),
    ]),
    getItem(t('Expense'), 'expense', !topMenu && <UilBagAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/expense/view/list`}>
          {t('expense')} {t('list')}
        </NavLink>,
        'Expense',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/expense/create`}>
          {t('create')} {t('expense')}
        </NavLink>,
        'ExpenseCreate',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/app/calendar/month`}>
        {t('calendar')}
      </NavLink>,
      't-menu-calendar',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/app/calendar/month`}>
          <UilCalendarAlt />
        </NavLink>
      ),
    ),

    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/app/note/all`}>
        {t('note')}
      </NavLink>,
      'note',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/app/note/all`}>
          <UilClipboardAlt />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/app/to-do`}>
        {t('to')} {t('do')}
      </NavLink>,
      'to-do',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/app/to-do`}>
          <UilCheckSquare />
        </NavLink>
      ),
    ),
    getItem(`${t('import')} ${t('export')}`, 'importExport', !topMenu && <UilExchange />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/importExport/import`}>
          {t('import')}
        </NavLink>,
        'import',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/importExport/export`}>
          {t('export')}
        </NavLink>,
        'export',
        null,
      ),
    ]),

    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('admin')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(t('users'), 'users', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/list`}>
          {t('User List')}
        </NavLink>,
        'team',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
          {t('Add')} {t('User')}
        </NavLink>,
        'addUser',
        null,
      ),
    ]),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
