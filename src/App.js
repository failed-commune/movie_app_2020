import React from 'react';
import propTypes from 'prop-types';

class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({ count: current.count + 1}))
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1}))
  };
// 최초 컴포넌트가 생성/랜더 된 후 실행되는 함수
  componentDidMount(){
    console.log("component rendered");
  }
// 셋 스테이트를 했으니, 업데이트 렌더 후 실행되는 함수
  componentDidUpdate(){
    console.log("I just Updated")
  }
// 리프레시 또는 페이지 이동 등으로 컴포넌트 언마운트를 할 때 실행되는 것이어야 하나 실행 안됨.
  componentWillUnmount(){
    console.log("Goobye, creul world");
  }

  render(){
    console.log("Im rendering");
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }

}

export default App;
