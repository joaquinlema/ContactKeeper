import { Form, Input, Button } from 'antd';
import { useState } from 'react';

const Login = () => {

    const [login, setLogin] = useState({
        name: '',
        password: '',
    });

    const { name, email, password, password2 } = login;

    const onChange = e =>
        setLogin({ ...login, [e.target.name]: e.target.value });

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input name="email"/>
            </Form.Item>

            <Form.Item
                label="Password"
                
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password name="password"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;