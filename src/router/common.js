const homeCommon= (view) => {return () => import (`@/page/Home/${view}.vue`)}
const homeCommonSon=(view) => {return () =>import(`@/page/Home/components/${view}.vue`)}
const searchCommon=(view) => {return () =>import(`@/page/search/${view}.vue`)}
// const searchCommonSon=(view) => {return () =>import(`@/page/search/components/${view}.vue`)}
const aboutCommon=(view) => {return () =>import(`@/page/about/${view}.vue`)}
// const aboutCommonSon=(view) => {return () =>import(`@/page/about/components/${view}.vue`)}
const setCommon=(view) => {return () =>import(`@/page/set/${view}.vue`)}
// const setCommonSon=(view) => {return () =>import(`@/page/set/components/${view}.vue`)}

export default[
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "首页",
        component:homeCommon("index") ,
        meta: {
            TabbarShow: true // 需要显示 底部导航
        }
    },
    {
        path: "/search",
        name: "查询",
        component: searchCommon("index"),
        meta: {
            TabbarShow: true // 需要显示 底部导航
        }
    },
    {
        path: "/about",
        name: "关于",
        component: aboutCommon("index"),
        meta: {
            TabbarShow: true // 需要显示 底部导航
        }
    },
    {
        path: "/set",
        name: "设置",
        component: setCommon("index"),
        meta: {
            TabbarShow: true // 需要显示 底部导航
        }
    },
    {
        path: "/homeSearch",
        name: "搜索",
        component:homeCommonSon("homeSearch/index"),
        meta: {
            TabbarShow: false // 需要显示 底部导航
        }
    }
]