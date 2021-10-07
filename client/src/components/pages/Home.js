import React from 'react';
import { Row, Col } from 'antd';
import Contacts from '../contacts/Contacts';

const Home = () => {
    return (
        <Row>
            <Col xs={10} sm={4} md={8} lg={12} xl={12}>
                
            </Col>
            <Col xs={14} sm={20} md={16} lg={12} xl={12}>
               <Contacts />
            </Col>
        </Row>
    );
}

export default Home
