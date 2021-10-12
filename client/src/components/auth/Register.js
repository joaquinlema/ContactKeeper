import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';

const Register = () => {

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = register;

    const onChange = e =>
        setRegister({ ...register, [e.target.name]: e.target.value });

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
                label="Username"
                onChange={onChange}
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input name="name"/>
            </Form.Item>

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
                <Input.Password  name="password2"/>
            </Form.Item>

            <Form.Item
                
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox name="remember">Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register;