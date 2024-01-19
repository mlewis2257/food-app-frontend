const refreshToken = async () => {
    try {
        const response = await axios.post('http://localhost:8000/api/token/refresh/', {
            refresh: localStorage.getItem('refresh'),
        });
        localStorage.setItem('access', response.data.access);
    } catch (error) {
        console.error('Error refreshing token', error);
    }
};