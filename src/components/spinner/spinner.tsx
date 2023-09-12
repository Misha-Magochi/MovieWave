import React from "react";
import { Spin } from 'antd';


const Spinner: React.FC = () => (
    <div style={{ width: '100%', height: '310px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Spin tip="Loading..." size="large" />
  </div>
);
export default Spinner;