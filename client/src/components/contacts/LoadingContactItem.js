import { Skeleton, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const LoadingContactItem = ({ loading }) => {

    return (
        <>
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        </>
    );
}

export default LoadingContactItem;