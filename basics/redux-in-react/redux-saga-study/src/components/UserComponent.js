export default function Index({dispatch,allResults,oneResults}) {


    return (
        <div>
            <h1>redux saga</h1>
            <div>
                <section>
                    <button onClick={() => dispatch({type: "MANY"})}>点击按钮发起网络请求,收集发起的每一个请求</button>
                    {
                        allResults &&
                        <ul>
                            {allResults.map(el => (<li key={el}>{el}</li>))}
                        </ul>
                    }
                </section>
                <section>
                    <button onClick={() => dispatch({type: 'ONE'})}>点击按钮发起网络请求,仅仅收集最后一个请求</button>
                    <p>
                        请求结果: {oneResults}
                    </p>
                </section>
            </div>
        </div>
    )
}