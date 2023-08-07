# 函数式组件

##  hook 钩子

1. 只能在函数式顶层函数作用域内使用
2. 不能条件调用(设计到底层数据缓存)
3. 在钩子内部使用钩子(允许)


## 基础hook
1. useState
2. useEffect
3. useContext
4. useReducer

    它是对复杂的state的一个类似于redux的数据管理,它和redux没有任何关系,它仅仅是基于redux的方式进行state的不可变数据的处理(通过action 进行反应state)

    其次,useReducer是一个钩子,那么它的内部是可以使用其他钩子的 ..

    例如很少使用的,useReducer + useContext 进行数据共享 ...
5. useCallback
下面是一个经典的闭包陷阱:
   ![img_1.png](img_1.png)

这其中陷阱就是pagination 被hook钩子缓存了,然后钩子每次就是之前的函数,那么导致之前函数对searchFormData的引用,就永远不会变化. .

那么解决这个问题的办法,就是将pagination中的这些函数做成纯函数 ..

现在我正确理解一下纯函数(有确定的输入和确定的输出,一定的输入总是得出一定的输出) ...

那么这里面,使用了一个隐式输入(非纯函数) ...

那么我们通过改变为纯函数,也能解决这个问题,通过使用这个函数改变为触发其他state的变化,
然后将对应的有些东西放在(render 过程中 拉入的一些hook中,例如 useEffect),将useEffect中触发数据的设置 ..

这样保证,在这些钩子中使用的函数都是使用的正确的闭包变量引用 ...

那么下面的解决方案,核心就是 得到正确的闭包变量引用,将缓存的pagination 刷新为新的对象(具有新的函数 - 具有正确的闭包变量引用)

![img.png](img.png)

所以useCallback,不是说减少每次引用函数的次数,而是 在合适的时候使用新的函数,从而触发 组件刷新(state,props 更新导致render刷新)    