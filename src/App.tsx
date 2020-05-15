import React from 'react';

import Button from './components/button/button'

function App() {


  return (
    <>
      <Button size="large" block></Button>
      <Button className="aa" btnType="link">没有href的button</Button>
      <Button btnType="link" href="www.baidu.com">有href的button</Button>
      <Button btnType="primary" block></Button>
    </>
  );
}

export default App;
