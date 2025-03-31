import axios from 'axios';
import logger from '../logs/logger.js';

const ALERT_WEBHOOK_URL = 'https://webhook.site/your-alert-endpoint';

const sendAlert = async (message) => {
  try {
    await axios.post(ALERT_WEBHOOK_URL, { text: message });
    logger.info(`Alert sent: ${message}`);
  } catch (error) {
    logger.error(`Failed to send alert: ${error.message}`);
  }
};

export default sendAlert;
