# 这个示例实现简单的redux-saga 使用

## redux-saga 的本质就是利用es6生成器特性来 通过Yield关键字迭代每一个指令 ..


## effect 特效

saga携带了许多特效,例如调用其他方法,延时,包括其他方式..

使用特效的一方面是为了更好的测试(因为这些方法调用并不会真的执行函数,而是返回一个简单的js对象,能够用于深度对比)

其次通过特效,能够分组出一组好用的效果,同样这能够让开发自定义自己想要的特效 ..

在 redux-saga 的世界里，Sagas 都用 Generator 函数实现。我们从 Generator 里 yield 纯 JavaScript 对象以表达 Saga 逻辑。 我们称呼那些对象为 Effect。Effect 是一个简单的对象，这个对象包含了一些给 middleware 解释执行的信息。 你可以把 Effect 看作是发送给 middleware 的指令以执行某些操作（调用某些异步函数，发起一个 action 到 store，等等）。

## 多个saga

其实一个saga 能够接受所有需要观察的事件(action),但是其实 一个saga 往往会无法全面的利用特效的优势 ..
通过多个saga 观察多个action,那么这会变得更加方便,例如在防抖方面所做的贡献 ..(但是这里的这种防抖不推荐,而且这里的防抖仅仅是takeLatest的指令的一种表现形式)
而且,不推荐用它作为防抖方案..

例如这就是一个例子:
```js
// FETCH_USERS
function* fetchUsers(action) { ... }

// CREATE_USER
function* createUser(action) { ... }

// 同时使用它们
export default function* rootSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers)
  yield takeEvery('CREATE_USER', createUser)
}
```

总而言之,effects 其实仅仅是命令的表现形式 ..

而后saga执行器才是真正的 执行者,那么在测试过程中,真正的执行过程完全可以被忽略或者存根/mock ..(或者模拟、模仿)

## 测试说明
https://redux-saga-in-chinese.js.org/docs/basics/DeclarativeEffects.html
### put 特效的用处
https://redux-saga-in-chinese.js.org/docs/basics/DispatchingActions.html

## API 参考
https://redux-saga.js.org/docs/api/#effect-creators

## 生成器,异常回抛
```js
const {call,put} = require("redux-saga/effects")

function throwEx() {
    return new Promise((resolve, reject) => {
        reject("自定义错误")
    })
}

// 生成器给于了我们一种能力,可以随时暂停函数的执行和运行 ...
//以下是一个示例,能够先拿到yield出来的一个值
// 然后执行其中的函数,如果发生错误,就尝试将异常重新回抛到生成器 ..
function* effects() {
    try {
        yield call(throwEx);
        // eslint-disable-next-line no-console
        console.log("正常执行")
    }catch (error) {
        // eslint-disable-next-line no-console
        console.log("发生错误")
    }
}

// will throw error
let generator = effects();
let next = generator.next();

next.value.payload.fn().catch(e => {
    generator.throw(e);
})
```
虽然上面代码能够正确执行,但是很难以调试 ...
## effect的效用
https://redux-saga-in-chinese.js.org/docs/basics/Effect.html

所以 不要难以调试的yield代码 ...

### 通配符匹配
- * 可以匹配任何一切字符

    使用 takeEvery('*')（使用通配符 * 模式），我们就能捕获发起的所有类型的 action。
### take 操作符
表示更低层的api, 首先生成器本身一定程度上就属于拉取模式(因为虽然它主动产生数据,但是如果没人拉取,则它不会自己继续执行)

所以,我认为官方的说法有一定的问题,也就是说不管是takeEvery 还是 take 都是拉取模式,在拉取模式下,Push 特效(effect)-会尝试主动推送一个action ..
但这其实和 传统的push无关 ..(因为在拉取模式下,push仅仅产生了一个简单Js对象(effect) 都是简单Js对象),而saga 处理器才是真正拿到effect去做事情的东西 ..

take 本身会阻塞等待一个action 可用..

### 有关同时执行多个任务
https://redux-saga-in-chinese.js.org/docs/advanced/RunningTasksInParallel.html

这一眼就能理解,因为effect 仅仅产生一个简单Js对象,如果你弹射一个则将被 saga处理器处理一次.. 所以你应该传递一个数组(弹射)
```js
// 正确写法, effects 将会同步执行
const [users, repos] = yield [
  call(fetch, '/users'),
  call(fetch, '/repos')
]
```

这将类似于Promise.all ...等待所有任务执行完毕 ...

#### race 竞争式的处理多个任务

race effect 能够尝试对多个任务取最先完成的任务,并自动取消其他任务,有些情况下我们需要这样的特性.例如要求某些请求在一秒内做出应答 ..
或者其他需要这样的场景时使用...

https://redux-saga-in-chinese.js.org/docs/advanced/RacingEffects.html
```js
import { race, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

function* fetchPostsWithTimeout() {
  const {posts, timeout} = yield race({
    posts: call(fetchApi, '/posts'),
    timeout: call(delay, 1000)
  })

  if (posts)
    put({type: 'POSTS_RECEIVED', posts})
  else
    put({type: 'TIMEOUT_ERROR'})
}
```

## yield * 的能力
能够用来组合多个 生成器有序的执行... 也就是当使用yield *的时候,后面的内嵌序列将被优先弹射直到完成 ..

https://redux-saga-in-chinese.js.org/docs/advanced/SequencingSagas.html
```js
function* values() {
    yield 1;
    yield 2;
    yield 3;

    return "values function";
}

function* game() {
    let result = yield* values();
    // eslint-disable-next-line no-console
    console.log(result)
}

let result = game();
// eslint-disable-next-line no-console
console.log(result)
let next = result.next();
// eslint-disable-next-line no-console
console.log(next)

console.log(result.next())
console.log(result.next())
console.log(result.next())
```

于是能够用来组合saga ... 官网的一个说法而已 ..
> 你可以使用内置的 yield* 操作符来组合多个 Sagas，使得它们保持顺序。 这让你可以一种简单的程序风格来排列你的 宏观任务（macro-tasks）。
```js
function* playLevelOne() { ... }

function* playLevelTwo() { ... }

function* playLevelThree() { ... }

function* game() {
  const score1 = yield* playLevelOne()
  yield put(showScore(score1))

  const score2 = yield* playLevelTwo()
  yield put(showScore(score2))

  const score3 = yield* playLevelThree()
  yield put(showScore(score3))
}
```
但是如果通过这种方式组合saga,那么必须将effect动作作为范围值返回,这意味着功能边界发生了向外迁移...

例如上述的put,如果通过更强大的中间件组合机制,则所有的effect 受控于自己的范围 ..

所以saga 提供了更加方便的特性来组合saga ..

## 组合saga
https://redux-saga-in-chinese.js.org/docs/advanced/ComposingSagas.html

yield Sagas 并不比 yield 其他 effects (future actions，timeouts，等等）不同。 
这意味着你可以使用 effect 合并器将那些 Sagas 和所有其他类型的 Effect 合并。
> 注意,是通过saga effect 进行合并 ..
> 其实生成器函数,在saga effect看来就是一个函数,需要通过effect 进行处理(如果需要和其他effect 合并)

首先,我们 需要注意官网的一些说辞,在这个上述链接中,它说当一个call yield到 effect,那么saga 会等待生成器执行结束 ..

本质上是需要理解的,也就是说,拉取式代码决定权在于saga,也就是saga 会在得到了此yield 的结果进行处理之后, 继续处理generator ...

所以,当拉取式代码触动生成器执行结束之后,saga重新获得代码执行权力 ..

请注意,yield 一个call 到生成器的说法是,表示call 调用了一个内嵌生成器,然后会等待内嵌生成器执行结束 ...


## 取消任务
例如任务可以被fork,那么同样fork的任务可以被取消:

一个可通过某些 UI 命令启动或停止的后台同步任务。 在接收到 START_BACKGROUND_SYNC action 后，我们 fork 一个后台任务，周期性地从远程服务器同步一些数据。

这个任务将会一直执行直到一个 STOP_BACKGROUND_SYNC action 被触发。 然后我们取消后台任务，等待下一个 START_BACKGROUND_SYNC action。
```js
import { take, put, call, fork, cancel, cancelled, delay } from 'redux-saga/effects'
import { someApi, actions } from 'somewhere'

function* bgSync() {
    try {
        while (true) {
            yield put(actions.requestStart())
            const result = yield call(someApi)
            yield put(actions.requestSuccess(result))
            yield delay(5000)
        }
    } finally {
        if (yield cancelled())
            yield put(actions.requestFailure('Sync cancelled!'))
    }
}
function* main() {
  while ( yield take(START_BACKGROUND_SYNC) ) {
    // 启动后台任务
    const bgSyncTask = yield fork(bgSync)

    // 等待用户的停止操作
    yield take(STOP_BACKGROUND_SYNC)
    // 用户点击了停止，取消后台任务
    // 这会导致被 fork 的 bgSync 任务跳进它的 finally 区块
    yield cancel(bgSyncTask)
  }
}
```
例如,每次都执行一个统一的流程,得到了一个开启后台同步的任务之后,后续必须等待用户的停止操作,否则不允许执行第二个同步任务的开启 ..

所以,拉取式模式,也保证了即使你使用cpu 密集型动作,都能够保证不会导致cpu空转(减少) ..

>   取消 bgSyncTask 将会导致 Generator 跳进 finally 区块。可使用 yield cancelled() 来检查 Generator 是否已经被取消

取消正在执行的任务，也将同时取消被阻塞在当前 Effect 中的任务。

什么意思,任务中可能存在effect 调用,那么在这个effect调用中执行的函数有可能存在任务阻塞 ..
```js
function* main() {
  const task = yield fork(subtask)
  ...
  // later
  yield cancel(task)
}

function* subtask() {
  ...
  yield call(subtask2) // currently blocked on this call
  ...
}

function* subtask2() {
  ...
  yield call(someApi) // currently blocked on this call
  ...
}
```
也就是说,这将导致 yield cancel(task) 触发了 subtask 任务的取消，反过来它将触发 subtask2 的取消。

> 现在我们看到取消不断的往下传播（相反的，被回传的值和没有捕捉的错误不断往上）。 你可以把它看作是 caller（调用异步的操作）和 callee（被调用的操作）之间的对照。callee 是负责执行操作。如果它完成了（不管是成功或失败）结果将会往上到它的 caller，最终到 caller 的调用方。就是这样，callee 是负责完成流程。
> 现在如果 callee 一直处于等待，而且 caller 决定取消操作，它将触发一种信号往下传播到 callee（以及通过 callee 本身被调用的任何深层操作）。所有深层等待的操作都将被取消。

官方的这一句话的意思是,在一个函数中调用另一个动作(那么此调用动作 是caller,也就是说这个函数是caller,动作本身叫做callee)

> 取消传播还将引发：如果加入的 task 被取消的话，task 的 joiner（那些被阻塞的 yield join(task)）也将会被取消。同样的，任何那些 joiner 潜在的 caller 都将会被取消（因为他们阻塞的操作已经从外面被取消）。

它的意思是,join 表示等待一个任务执行完毕(那么如果这个任务被取消,那么 也就是说此任务的joiner 也会被取消),同样一直向外传递,joiner的caller 也会取消 ..

那么当这样的一个joiner,被caller(调用取消也是可以,因为可以看作是caller中的effect阻塞的任务,那么依旧可以取消)

```js
const {take, put, call, fork, cancel, join} = require('redux-saga/effects')
const createSagaMiddleware = require('redux-saga').default
const {createStore, applyMiddleware} = require("redux")
const {delay} = require("@redux-saga/core/effects");

// 一个异步请求的示例函数
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log("获取了一个任务")
            resolve('Data from API');
        }, 2000);
    });
}

// 第一个 Saga，处理异步请求
function* fetchDataSaga() {
    try {
        const task = yield fork(fetchData); // 启动异步请求任务
        const result = yield join(task); // 阻塞 Saga，等待异步请求任务完成
        yield put({type: 'FETCH_SUCCESS', payload: result}); // 请求完成后发送成功 action
        // eslint-disable-next-line no-console
        console.log("请求成功")
    } catch (error) {
        yield put({type: 'FETCH_ERROR', payload: error}); // 请求失败后发送错误 action
    }
}

// 第二个 Saga，取消异步请求任务
function* cancelFetchSaga() {
    while (true) {
        const action = yield take('CANCEL_FETCH'); // 监听取消请求 action
        const task = yield fork(fetchData); // 启动异步请求任务
        yield delay(1000); // 延迟 1 秒
        yield cancel(task); // 取消异步请求任务
        // eslint-disable-next-line no-console
        console.log('Request canceled:', action.payload);
    }
}

// 根 Saga
function* rootSaga() {
    yield fork(fetchDataSaga);
    yield fork(cancelFetchSaga);
}

// 启动 Saga
const sagaMiddleware = createSagaMiddleware();
const store = createStore((state, action) => ({}), applyMiddleware(sagaMiddleware));
let task = sagaMiddleware.run(rootSaga);

store.dispatch({type: "CANCEL_FETCH"})
```

上述示例表示了一个joiner的取消 ...

### 自动取消
除了手动取消任务，还有一些情况的取消是自动触发的。

- 在 race Effect 中。所有参与 race 的任务，除了优胜者（译注：最先完成的任务），其他任务都会被取消。

- 并行的 Effect (yield [...])。一旦其中任何一个任务被拒绝，并行的 Effect 将会被拒绝（受 Promise.all 启发）。在这种情况中，所有其他的 Effect 将被自动取消。

## fork 模型
通过两个effects 可以在后台动态的fork 任务
- `fork` 用来创建依附的fork
- `spawn` 用来创建游离的fork

### 特征
一个Saga 在以下情况完成之后结束:
- 它的所有指令体结束
- 所有依附的attach 任务结束

### 取消
saga的取消,导致:
- 主要任务是仅仅意味着取消当前被阻塞的Saga..
- 所有attached 的任务依旧继续进行 ..

```js
const {delay,fork,cancel} = require("redux-saga/effects");
const createSagaMiddle = require("redux-saga").default
const {createStore, applyMiddleware} = require("redux")

function* createSaga() {
    const delayTask = yield fork(delaySaga)

    yield delay(5000)

    cancel(delayTask)
}

function* delaySaga() {
    yield delay(10000)

    // eslint-disable-next-line no-console
    console.log("继续处理")
}

let saga = createSagaMiddle()

let store = createStore(state => (state || {}),{},applyMiddleware(saga))

saga.run(createSaga)
```

### Detached forks (using spawn) - 游离的forks

这种fork 任务是存活在自己的执行上下文中,它的父亲将不会等待游离的fork 终止,未捕捉的错误将不会冒泡到父亲上.
对父亲的取消也不会自动的取消游离的任务(你需要显式的取消它们) ..

换句话说,它就像根saga 一样直接运行(类似于middleware.run) API

### 错误或者取消传播

由于fork 任务的特殊性,也就是说它的错误会尝试抛给它的父亲,也就是说我们没有办法直接在fork任务上进行错误捕获,那么我们仅仅能够从父亲上进行阻塞代码异常捕获 ..

## 测试Sagas

1. 测试saga 生成器函数
2. 执行整个saga 并断言side effects

其余内容待定

## 连接saga到外部输入和输出
```js
import { runSaga } from 'redux-saga'

function* saga() { ... }

const myIO = {
  subscribe: ..., // this will be used to resolve take Effects
  dispatch: ...,  // this will be used to resolve put Effects
  getState: ...,  // this will be used to resolve select Effects
}

runSaga(
  myIO,
  saga,
)
```
在这个示例中,描述了如何去解析take 特效(转换为具体的对应函数)
以及dispatch 如何解析为put 特效 ..

因为在Saga启动的时候,中间件会自动将它的take / put 连接至 store ..
这两个看做Saga的输入或者输出 ...

## 使用Channels
通过它能够让effect 与外部事件 或者让两个 saga进行通信 ..
### 使用 actionChannel effect
本质上就是action 缓存,当动作在一定程度上看似过多的情况下,我们可以使用buffer 进行缓存 ..

然后在后续尝试重新获取 ..

buffers 可以提供各种缓存类型的队列 ..(none,dropping,sliding)

### 使用 eventChannel 工厂连接到外部的事件
https://redux-saga-in-chinese.js.org/docs/advanced/UsingRunSaga.html

尝试看官网了解更详细的东西 ..

## 技巧
前端节流(Throttling) ,防抖动(可以在被fork的任务的内置一个delay)

然后在一段时间内如果再次触发,则取消掉之前的fork任务

### undo 撤销
google 认为总是质疑用户的操作不是一个好的事情,但是其实在关键操作上进行质疑,这是一个好的事情 ..

并且在redux-saga中,通过延时和take来实现undo 撤销的效果,本质上就是上用户思考(是否需要取消) ..

我觉得这并不是一个好的技巧

### 批量action

react-batched-actions 能够将多个action 合并到单次redux store 更新 ..

https://redux-saga.js.org/docs/recipes#batching-actions