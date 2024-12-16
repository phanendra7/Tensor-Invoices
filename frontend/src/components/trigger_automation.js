import React from 'react';
import axios from 'axios';

const TriggerAutomation = () => {
    const handleAutomation = async () => {
        try {
            const response = await axios.post('http://localhost:8080/trigger-automation');
            alert(`Automation triggered: ${response.data.message}`);
        } catch (err) {
            alert('Failed to trigger automation: ' + err.message);
        }
    };

    return (
        <div>
            <h2>Trigger Automation</h2>
            <button onClick={handleAutomation}>Run Automation</button>
        </div>
    );
};

export default TriggerAutomation;

