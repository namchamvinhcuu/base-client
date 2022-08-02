import axiosInstance from '@axios';
import { BASE_URL } from '@stringConstants'
import { Route } from 'react-router';
import IconBreadcrumbs from '../../../../../shared-components/BreadCrumb';
import * as AllComponents from "../../pages/index";

import { StaticCategory } from '@services'

const getMenuAsync = async () => {
    const response = await axiosInstance.get(BASE_URL + 'menu');
    let menuList = response.data.Data ?? [];

    let trueFalseTitle = StaticCategory.getTrueFalseTitle();

    if (menuList.length > 0) {
        return menuList.map(x => ({
            ...x,
            actived: trueFalseTitle.find(t => t.id === x.Actived).title,
            forRoot: trueFalseTitle.find(t => t.id === x.ForRoot).title,
        }))
    }
    return menuList;
}

const setTreeMenuUser = async (menuList) => {
    let list = [];
    menuList.forEach(async (item) => {
        if (!item.ParentId || item.ParentId === 0) {
            let node = await createTreeMenuNode(menuList, item);
            list.push(node)
        }
    });
    return list;
}

const createTreeMenuNode = async (list, item) => {
    let treeNode =
    {
        MenuId: item.MenuId,
        ParentId: item.ParentId,
        MenuName: item.MenuName,
        Component: item.Component,
        NavigateUrl: item.NavigateUrl,
        Icon: item.Icon,
        IconOpened: item.IconOpened,
        IconClosed: item.IconClosed,
        Child: []
    };
    list.forEach(async (listItem) => {
        // TreeNode.
        if (listItem.ParentId === item.MenuId) {
            let subList = await createTreeMenuNode(list, listItem)
            treeNode.Child.push(subList);
        }
    });
    return treeNode;
}

const buildTreeMenu = async (list) => {
    let routes = []
    list.forEach(item => {

        if (item.Component && item.NavigateUrl) {
            let menuLevel3 = {
                level1: '',
                iconLevel1: '',
                level2: '',
                iconLevel2: '',
                level3: '',
                iconLevel3: '',
            }

            let menuLevel2 = {
                MenuId: 0,
                ParentId: 0,
                MenuName: '',
                Icon: ''
            }


            let menuLevel1 = {
                MenuId: 0,
                MenuName: '',
                Icon: ''
            }

            menuLevel3.level3 = item.MenuName;
            menuLevel3.iconLevel3 = item.Icon;

            menuLevel2.MenuId = item.ParentId;
            for (let i of list) {
                if (i.MenuId === menuLevel2.MenuId) {

                    menuLevel2.ParentId = i.ParentId;
                    menuLevel2.MenuName = i.MenuName;
                    menuLevel2.Icon = i.Icon;
                    break;
                }
            }

            menuLevel3.level2 = menuLevel2.MenuName;
            menuLevel3.iconLevel2 = menuLevel2.Icon;

            for (let i of list) {
                if (i.MenuId === menuLevel2.ParentId) {

                    menuLevel1.MenuId = i.MenuId;
                    menuLevel1.MenuName = i.MenuName;
                    menuLevel1.Icon = i.Icon;
                    break;
                }
            }

            menuLevel3.level1 = menuLevel1.MenuName;
            menuLevel3.iconLevel1 = menuLevel1.Icon;

            routes.push(
                <Route key={item.MenuId} path={'/' + item.NavigateUrl} element={componentWrapper(menuLevel3)} />
            );
        }

    });
    return routes;
}

const componentWrapper = (menuLevel3) => {
    // let InputComponent = AllComponents[name]
    let InputComponent = AllComponents[menuLevel3.level3]
    return (
        <>
            <IconBreadcrumbs obj={menuLevel3} />
            <InputComponent />
        </>
    )
}

const buildRouterForLoggedInUser = async () => {

    let routeList = [];
    const response = await getUserMenus();
    if (response.length > 0) {
        routeList = await buildTreeMenu(response);
    }
    return routeList;
}

const getUserMenus = async () => {
    // const response = await axiosInstance.get('menu/get-user-menu');
    const response = await axiosInstance.get('menu/get-by-accesstoken');
    return response.data.Data ?? [];
}

const getParentMenus = async () => {
    const response = await axiosInstance.get('menu/get-parent-menus');
    return response.data.Data ?? [];
}

export {
    getMenuAsync,
    setTreeMenuUser,
    createTreeMenuNode,
    buildTreeMenu,
    buildRouterForLoggedInUser,
    getUserMenus,
    getParentMenus
}