export default {
    router: {
        // routes: 一个数组，路由配置表
        // resolve: 解析路由组件路径
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'hello',
                path: '/hello',
                component: resolve(__dirname, 'pages/about.vue')
            })
        }
    }
}