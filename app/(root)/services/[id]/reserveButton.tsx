
import React from 'react'
import { Button } from "@/components/ui/button"
import { Modal } from '@mantine/core';
import Confetti from 'react-confetti';
import { useDisclosure } from '@mantine/hooks';

const ReserveButton = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const confettiProps = typeof window !== 'undefined' ? {
        width: window.innerWidth,
        height: window.innerHeight
    } : {};

    return (
        <div>
            <Button onClick={open} variant="default">
                Reserve
            </Button>

            {/* successful confetti */}
            <Modal
                opened={opened}
                onClose={close}
                title=""
                transitionProps={{ transition: 'fade', duration: 200 }}
            >

                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold mt-5 text-left">Reservation Details</h1>
                </div>

                {/* show confetti */}
                <Confetti
                    {...confettiProps}
                    numberOfPieces={500}
                    recycle={false}
                    initialVelocityY={10}
                    initialVelocityX={10}
                    colors={['#f44336', '#2196f3', '#ffeb3b', '#4caf50']}
                />

            </Modal>
        </div>
    )
}

export default ReserveButton