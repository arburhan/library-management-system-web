import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import React from 'react';

const SemesterModal = ({ isOpen, onClose }) => {
    const semestersList = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
    return (
        <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">Select Semester</ModalHeader>
                    <ModalBody className='grid grid-cols-3'>
                        {
                            semestersList.map(semester => (
                                <Button key={semester} radius="md" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                                    {semester} Semester
                                </Button>
                            ))
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    );
};

export default SemesterModal;
