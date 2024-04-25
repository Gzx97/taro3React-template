import { Component, PropsWithChildren } from 'react';
import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import './app.less';

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
