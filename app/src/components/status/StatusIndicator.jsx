import React from 'react';
import 'status-indicator/styles.css'

export const StatusIndicator = ({isBusy}) => {
    return isBusy ? <status-indicator active pulse></status-indicator> : <status-indicator></status-indicator>;
}
