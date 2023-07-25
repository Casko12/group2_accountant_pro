import {
  Uil500px,
  UilAt,
  UilBagAlt,
  UilBookReader,
  UilCalendarAlt,
  UilChat,
  UilCheckSquare,
  UilClipboardAlt,
  UilCreateDashboard,
  UilEnvelope,
  UilExchange,
  UilFile,
  UilHeadphones,
  UilShoppingCart,
  UilUsersAlt,
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

  const path = '/admin/';

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
    getItem(t('Overview'), 'dashboard', !topMenu && <UilCreateDashboard />, [
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
    getItem(t('email'), 'email', !topMenu && <UilEnvelope />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/email/inbox`}>
          {t('inbox')}
        </NavLink>,
        'inbox',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/email/single/1585118055048`}>
          {t('read')} {t('email')}
        </NavLink>,
        'single',
        null,
      ),
    ]),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/main/chat/private/rofiq@gmail.com`}>
        {t('chat')}
      </NavLink>,
      'chat',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/main/chat/private/rofiq@gmail.com`}>
          <UilChat />
        </NavLink>
      ),
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
        'orsers',
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
    getItem(t('Income'), 'income', !topMenu && <UilBagAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/income/view/list`}>
          {t('income')} {t('list')}
        </NavLink>,
        'incomeList',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/income/create`}>
          {t('create')} {t('income')}
        </NavLink>,
        'IncomeCreate',
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
    getItem(t('users'), 'users', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/team`}>
          {t('team')}
        </NavLink>,
        'team',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/grid`}>
          {t('users')} {t('grid')}
        </NavLink>,
        'user-grid',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/list`}>
          {t('users')} {t('list')}
        </NavLink>,
        'user-list',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/grid-style`}>
          {t('users')} {t('grid')} {t('style')}
        </NavLink>,
        'grid-style',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/add-user/info`}>
          {t('add')} {t('user')}
        </NavLink>,
        'addUser',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/users/dataTable`}>
          {t('users')} {t('table')}
        </NavLink>,
        'user-dataTable',
        null,
      ),
    ]),
    getItem(t('contact'), 'contact', !topMenu && <UilAt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/contact/grid`}>
          {t('contact')} {t('grid')}
        </NavLink>,
        'contact-grid',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/contact/list`}>
          {t('contact')} {t('list')}
        </NavLink>,
        'contact-list',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/contact/addNew`}>
          {t('contact')} {t('create')}
        </NavLink>,
        'addNew',
        null,
      ),
    ]),
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
    // getItem(
    //   <NavLink onClick={toggleCollapsed} to={`${path}/app/kanban`}>
    //     {t('kanban Board')}
    //   </NavLink>,
    //   'kanban',
    //   !topMenu && <UilExpandArrowsAlt />,
    // ),
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
      <NavLink onClick={toggleCollapsed} to={`${path}/app/task/all`}>
        {t('task')}
      </NavLink>,
      'task',
      !topMenu && <UilFile />,
    ),
    getItem(t('support'), 'supports', !topMenu && <UilHeadphones />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/support/tickets`}>
          {t('support')}
        </NavLink>,
        'support',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/support/tickets/add`}>
          {t('add')} {t('support')}
        </NavLink>,
        'add-support',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/support/ticketDetails/01`}>
          {t('view')} {t('support')}
        </NavLink>,
        'view-support',
        null,
      ),
    ]),
    getItem(`${t('learning')} ${t('app')}`, 'course', !topMenu && <UilBookReader />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/course`}>
          {t('courses')}
        </NavLink>,
        'course-list',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/course/courseDetails/1`}>
          {t('course')} {t('single')}
        </NavLink>,
        'single-course',
        null,
      ),
    ]),
    getItem(`${t('jobs')} ${t('search')}`, 'job-search', !topMenu && <UilHeadphones />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/jobs/grid`}>
          {t('jobs')}
        </NavLink>,
        'jobs',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/jobDetails/1`}>
          {t('jobs')} {t('details')}
        </NavLink>,
        'job-details',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/app/job/apply`}>
          {t('job')} {t('apply')}
        </NavLink>,
        'job-apply',
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
