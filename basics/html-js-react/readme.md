# 总结
## 组件数据流 
1. 可变和不可变数据流

    state 属性,通过setState函数来修改状态值 ..
2. 普通函数(非类函数),在jsx中通过babel 编译

    默认会转为undefined ..
3. 类组件中的this 绑定问题

    由于一般通过jsx编写react代码,那么一般会将一个实例方法传递给表达式,那么babel编译之后,导致函数this为undefined ..
    
    因为它的执行环境为普通调用(没有this对象) ..

    所以,我们需要提前绑定this ...
4. 
    
