import React from 'react';
import { Card, Avatar, Badge } from 'antd';
import { DeleteTwoTone, EditTwoTone, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ContactsItems = ({ nombre, email, type }) => {
    return (
        <Badge.Ribbon text={type} color={type !== 'personal' ? "gold" : "blue"}>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditTwoTone key="edit" />,
                    <DeleteTwoTone key="delete" />
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={nombre}
                    description={email}
                />
            </Card>
        </Badge.Ribbon>
    )
}

export default ContactsItems
