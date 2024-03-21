import { Button } from '@/components/ui/button';
import { useState } from 'react';

const SeedButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSeedData = async () => {
        setIsLoading(true);
        try {
            // Call the API to seed the database
            await fetch('/api/seed', {
                method: 'POST',
            });
            alert('Database seeded successfully');

        } catch (error) {
            console.error('Error seeding data:', error);
            alert('An error occurred while seeding data.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            variant="secondary"
            disabled={isLoading}
            onClick={handleSeedData}
        >
            {isLoading ? 'Seeding...' : 'Seed Data'}
        </Button>
    );
};

export default SeedButton;
