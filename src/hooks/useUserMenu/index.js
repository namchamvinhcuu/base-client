import { useState } from 'react'
import { Route } from 'react-router';
import axios from 'axios'
import IconBreadcrumbs from '@shared-components/BreadCrumb'
import AxiosInstance from '@axioz-config';


export default function useUserMenu() {
    const [rawMenus, setRawMenus] = useState([]);
    const [userMenus, setUserMenus] = useState([]);
    const [selectedMenuId, setSelectedMenuId] = useState(0);
    const [selectedMenuChild, setSelectedMenuChild] = useState([]);
    const [routes, setRoutes] = useState([]);

    const routeList = [];

    const useUserMenu = () => {

        const [rawMenus, setRawMenus] = useState([]);
        const [userMenus, setUserMenus] = useState([]);
        const [selectedMenuId, setSelectedMenuId] = useState(0);
        const [selectedMenuChild, setSelectedMenuChild] = useState([]);
        const [routes, setRoutes] = useState([]);


        // console.log('hook-useMenu', reRender)

        const routeList = [];
        // const menuTree = [];

        const setTreeMenuUserId = async (menuList) => {

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

        const buildTreeMenu = async (list, links) => {
            // debugger

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

                    links.push(
                        <Route key={item.MenuId} path={'/' + item.NavigateUrl} element={componentWrapper(menuLevel3)} />
                    );
                }

            });
            setRoutes(links);
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

        useEffect(() => {

            let source = axios.CancelToken.source();

            const getUserMenuLevel = async () => {
                try {
                    const response = await axiosInstance.get('menu/get-by-accesstoken', {
                        cancelToken: source.token
                    });
                    if (response.data.Data) {

                        setRawMenus(response.data.Data);

                        let menuTree = await setTreeMenuUserId(response.data.Data);

                        setUserMenus(menuTree);
                        setSelectedMenuId(menuTree[0].MenuId);
                        setSelectedMenuChild(menuTree[0].Child);
                        await buildTreeMenu(response.data.Data, routeList);
                    }
                }
                catch (error) {
                    if (axios.isCancel(error)) {
                        console.log('axios canceled')
                    } else {
                        throw error;
                    }
                }
            }

            getUserMenuLevel();
        }, []);


        return [rawMenus, userMenus, selectedMenuId, selectedMenuChild, routes];
    }
}