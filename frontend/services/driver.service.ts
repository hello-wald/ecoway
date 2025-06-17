export const DriverService = {
	async getRides() {
		try {
			const response = await fetch('/api/rides');
			if (!response.ok) {
				throw new Error('Failed to fetch rides');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error fetching rides:', error);
			throw error;
		}
	},

	async createRide(rideData) {
		try {
			const response = await fetch('/api/rides', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(rideData),
			});
			if (!response.ok) {
				throw new Error('Failed to create ride');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error creating ride:', error);
			throw error;
		}
	},
}