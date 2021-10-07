import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import AppRoute from '../../routes/AppRoute';

const { Header, Sider, Content } = Layout;

const LandingPage = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider breakpoint="lg" trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: '2px' }}>
                    {collapsed
                        ? <MenuUnfoldOutlined className='trigger' onClick={toggle} twoToneColor="#eb2f96"/>
                        : <MenuFoldOutlined className='trigger' onClick={toggle} twoToneColor="#52c41a"/>
                    }
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                    }}
                >
                    <AppRoute />
                </Content>
            </Layout>
        </Layout>
    );
}

export default LandingPage;