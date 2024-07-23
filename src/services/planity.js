import axios from 'axios';

const API_KEY = '-Ndenpt2NBzQXjUpPT0x';

const planityApi = axios.create({
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
});

export const getGiftCards = async () => {
    try {
        const response = await planityApi.get('/gift-cards');
        return response.data;
    } catch (error) {
        console.error('Error fetching gift cards:', error);
        throw error;
    }
};

export const bookAppointment = async (appointmentDetails) => {
    try {
        const response = await planityApi.post('/appointments', appointmentDetails);
        return response.data;
    } catch (error) {
        console.error('Error booking appointment:', error);
        throw error;
    }
};
