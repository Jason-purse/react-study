## react router

### v5

所有的路由,做成了 标签,但是可以通过react-router-config 进行类似于vue的文件形式的配置 ...

### v6 

完全支持类似 vue的文件形式配置..

通过useRoutes hoc钩子,来渲染路由配置结构 ..

### 懒加载 Suspense ..

```js
import("...")
```
这是一个webpack的特性, 会单独打包chunk文件,那么如果你在路由中通过React.lazy 加载一个路由,那么
由于这个js需要被加载(它可能位于服务器或者浏览器上),那么我们需要使用
```js
<Suspense fallback={<component />}/>
```
组件来懒加载这个组件(那么fallback 表示在加载期间所 显示的内容,一般都是loading 标识) ..

这个标签应该包裹路由配置的组件 ...

### 当然还有许多标签形式可以使用 ...

详情查看官网,现在也不会使用react 裸开发,所以路由的相关知识可以了解hook怎么用就可以了 ...