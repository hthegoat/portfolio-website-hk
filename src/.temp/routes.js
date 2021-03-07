const c1 = () => import(/* webpackChunkName: "page--src-templates-project-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\templates\\Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-projects-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\pages\\Projects.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-blog-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\pages\\Blog.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-temp-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\pages\\Temp.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-project1-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\pages\\Project1.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-project2-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\pages\\Project2.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\pages\\Contact.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\pages\\About.vue")
const c10 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\node_modules\\gridsome\\app\\pages\\404.vue")
const c11 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\harri\\Desktop\\coding\\gridsome2\\my-project\\src\\pages\\Index.vue")

export default [
  {
    path: "/blog/ios14/",
    component: c2
  },
  {
    path: "/projects/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: c4
  },
  {
    path: "/temp/",
    component: c5
  },
  {
    path: "/project1/",
    component: c6
  },
  {
    path: "/project2/",
    component: c7
  },
  {
    path: "/contact/",
    component: c8
  },
  {
    path: "/about/",
    component: c9
  },
  {
    name: "404",
    path: "/404/",
    component: c10
  },
  {
    name: "home",
    path: "/",
    component: c11
  },
  {
    name: "*",
    path: "*",
    component: c10
  }
]
