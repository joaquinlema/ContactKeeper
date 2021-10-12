import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import { Alert } from 'antd';

const Alerts = () => {
    const alertContext = useContext(AlertContext);

    return (
        alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
            <Alert
                key={alert.id}
                message={alert.msg}
                description={alert.detail}
                type={alert.type}
                showIcon
            />
        ))
    )
}

export default Alerts
