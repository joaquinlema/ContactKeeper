import { Form, Input, Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { login, error, clearErrors, isAuthenticated } = authContext;
    const { setAlert } = alertContext;

    const [loginData, setLogin] = useState({
        name: '',
        password: '',
    });

    const { email, password } = loginData;

    useEffect(() => {

        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error) {
            let errormsg = '';
            error.map(elem => errormsg.concat(` ${elem.msg}`))
            setAlert('Ops ...', 'warning', `${errormsg}`);
            clearErrors();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, isAuthenticated, props.history]);

    const onChange = e =>
        setLogin({ ...loginData, [e.target.name]: e.target.value });

    const onFinish = (values) => {
        if (email === '' || password === '') {
            setAlert('Ops ...', 'error', 'Please enter all Fields');
        } else {
            login(loginData);
        }
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
                <Input name="email" />
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
                <Input.Password name="password" />
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