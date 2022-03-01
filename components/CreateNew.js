import React, {useState} from 'react';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import Model from "@material-tailwind/react/Modal"
import ModelBody from "@material-tailwind/react/ModalBody"
import ModelFooter from "@material-tailwind/react/ModalFooter"

function CreateNew(props) {
    const [showModel, setShowModel] = useState(false);
    const [input, setInput] = useState('');
    const createDocument = () => {

    };

    const model = (
        <Model size="sm"
               active={showModel}
               toggler={() => setShowModel(false)}
        >
            <ModelBody>
                <input value={input} onChange={(e) => setInput(e.target.value)}
                       type="text"
                       className="outline-none w-full"
                       placeholder="Enter name of document..."
                       onKeyDown={(e) => e.key === 'Enter' && createDocument()}/>
            </ModelBody>
            <ModelFooter>
                <Button color='blue'
                        buttonType='link'
                        onClick={(e) => setShowModel(false)}
                        ripple='dark'>Cancel</Button>
                <Button color='blue' onClick={createDocument} ripple='light'>Create</Button>
            </ModelFooter>
        </Model>
    );

    return (
        <>
            {model}
            <section className="bg-[#F8F9FA] pb-10 px-10">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between py-1">
                        <h2 className="text-gray-700 text-lg">Start a new Document</h2>
                        <Button color="gray"
                                buttonType="outline"
                                rounded={true}
                                iconOnly={true}
                                className="h-20 w-20 border-0"
                                ripple="dark">
                            <Icon name="more_vert" size="3xl"/>
                        </Button>
                    </div>
                    <div>
                        <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                            <Image src="/newDoc.png" layout="fill" onClick={() => setShowModel(true)}/>
                        </div>
                        <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
                    </div>
                </div>
            </section>
        </>

    );
}

export default CreateNew;