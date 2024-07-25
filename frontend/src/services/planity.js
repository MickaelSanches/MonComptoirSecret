import axios from 'axios';

const PLANITY_API_KEY = import.meta.env.PLANITY_API_KEY

const planityApi = axios.create({
    headers: {
        'Authorization': `Bearer ${PLANITY_API_KEY}`,
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
