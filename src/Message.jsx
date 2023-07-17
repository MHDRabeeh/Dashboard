

function Message() {
    return (
        <div className="w-full md:w-96 box-border rounded-r-3xl">
            <div className="w-full rounded-r-3xl h-[20%]">
                <div className="rounded-3xl p-3 bg-[#fca5a5] m-3">
                    <div className="flex items-center">
                        <img src="../public/avatar.jpg" className="rounded-3xl w-16 h-16" />
                        <div className="ml-2 text-white">
                            <strong>Andrew Alfred</strong>
                            <br />
                            <span>Technical advisor</span>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="-mt-4 ml-4 font-bold">Messages</h1>
            <div className="w-full grid gap-2 mt-1 rounded-r-3xl h-[74%]">
                <div className="w-full sm:w-auto bg-white shadow-lg rounded-2xl  hover:p-1 duration-200 hover:bg-[#fbfcf8]">
                    <div className="flex items-center p-2">
                        <img src="../public/avatar2.jpg "  className="rounded-3xl w-12 h-12 " />
                            <div className="ml-3">
                                <strong className="block">Jarmees Furfils</strong>
                                <span>UI Designer</span>
                            </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto bg-white shadow-lg rounded-2xl  hover:p-1 duration-200 hover:bg-[#fbfcf8]">
                    <div className="flex items-center p-2">
                        <img src="../public/avatar3.png "  className="rounded-3xl w-12 h-12 " />
                            <div className="ml-3">
                                <strong className="block">Angel Danin</strong>
                                <span>Technical advisor</span>
                            </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto bg-white shadow-lg rounded-2xl  hover:p-1 duration-200 hover:bg-[#fbfcf8]">
                    <div className="flex items-center p-2">
                        <img src="../public/avatar4.jpg "  className="rounded-3xl w-12 h-12 " />
                            <div className="ml-3">
                                <strong className="block">Lincoln Curtis</strong>
                                <span>UI Designer</span>
                            </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto bg-white shadow-lg rounded-2xl  hover:p-1 duration-200 hover:bg-[#fbfcf8]">
                    <div className="flex items-center p-2">
                        <img src="../public/avatar.jpg"  className="rounded-3xl w-12 h-12 " />
                            <div className="ml-3">
                                <strong className="block">Bornard liscki</strong>
                                <span>Graphic Designer</span>
                            </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto bg-white shadow-lg rounded-2xl  hover:p-1 duration-200 hover:bg-[#fbfcf8]">
                    <div className="flex items-center p-2">
                        <img src="../public/avatar2.jpg "  className="rounded-3xl w-12 h-12 " />
                            <div className="ml-3">
                                <strong className="block">Andrew Zaltan</strong>
                                <span>UI Designer</span>
                            </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto bg-white shadow-lg rounded-2xl  hover:p-1 duration-200 hover:bg-[#fbfcf8]">
                    <div className="flex items-center p-2">
                        <img src="../public/avatar4.jpg "  className="rounded-3xl w-12 h-12 " />
                            <div className="ml-3">
                                <strong className="block">Dasif jonny</strong>
                                <span>Graphic Designer</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Message
