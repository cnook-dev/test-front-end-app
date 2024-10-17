import axios from 'axios';

export const sendLineNotification = async (message: string) => {
  const LINE_NOTIFY_TOKEN = 'mHOfaAyUfk7hmOpWhWCKGVAq4vNBxBj2gAJbOeuLLh4';

  try {
    //const url = 'https://notify-api.line.me/api/notify';
    const url = 'https://cors-anywhere.herokuapp.com/https://notify-api.line.me/api/notify';

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${LINE_NOTIFY_TOKEN}`
    };

    const data = new URLSearchParams({
      message: message,
    });

    const response = await axios.post(url, data.toString(), { headers });
    console.log('Notification sent:', response.data);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
