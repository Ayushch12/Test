const API_URL = 'https://preprod.kitlenid.fr/api/transport?lon=2.0680184&lat=48.8969373';
// fjdhb
export const fetchTransportInfo = async (lon: number, lat: number) => {
  try {
    const response = await fetch(`${API_URL}?lon=${lon}&lat=${lat}`);
    if (!response.ok) throw new Error('Network response was not ok.');
    return response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
