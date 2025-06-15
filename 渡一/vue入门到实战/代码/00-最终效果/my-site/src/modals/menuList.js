export const menuList = [
    {
        name: '头像组件',
        path: '/avatar',
        fileName: 'TestAvatar'
    },
    {
        name: '图标组件',
        path: '/icon',
        fileName: 'TestIcon'
    },
    {
        name: '页码组件',
        path: '/pager',
        fileName: 'TestPager'
    },
    {
        name: '空组件',
        path: '/empty',
        fileName: 'TestEmpty'
    },
    {
        name: '图片加载组件',
        path: '/imageLoader',
        fileName: 'TestImageLoader'
    },
    {
        name: '联系组件',
        path: '/contact',
        fileName: 'TestContact'
    },
    {
        name: '菜单组件',
        path: '/menu',
        fileName: 'TestMenu'
    },
    {
        name: '侧边栏组件',
        path: '/siteAside',
        fileName: 'TestSiteAside'
    },
]

export const routerList = function (defaultComponent) {
    return menuList.map(item => {
        return {
            path: item.path,
            name: item.name,
            component: () => import(/* webpackChunkName: "about" */ `@/test/${item.fileName}.vue`) ?? defaultComponent,
        }
    })
}

export const sideMenuList = [
    {
        link: "/menu?menu-home",
        title: "首页",
        icon: "home",
    },
    {
        link: "/menu?menu-blog",
        title: "文章",
        icon: "blog",
        startWith: true, // 只要当前路径以link开头，当前菜单就是选中的
    },
    {
        link: "/menu?menu-about",
        title: "关于我",
        icon: "about",
    },
    {
        link: "/menu?menu-project",
        title: "项目&效果",
        icon: "code",
    },
    {
        link: "/menu?menu-message",
        title: "留言板",
        icon: "chat",
    },
]