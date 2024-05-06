'use client'
import React from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const SemesterModal = ({ department, isOpen, onClose }) => {
    const router = useRouter();
    const semestersList = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">Select Semester</ModalHeader>
                    <ModalBody className='grid grid-cols-3'>
                        {
                            semestersList.map(semester => (
                                <Button key={semester}
                                    onClick={() => {
                                        router.push(`/departments/${department}/semester/${semester}`)
                                    }}
                                    radius="md" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                                    {semester > 3 ? semester + "th" : (semester == 1 ? semester + "st" : (semester == 2 ? semester + "nd" : semester + "rd"))} Semester
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
