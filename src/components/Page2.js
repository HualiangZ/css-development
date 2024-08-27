import React, { useRef, useState } from 'react';
import './Page2.css'

function FirstToggleBtn() {
    const [scrollPosition, SetScrollPosition] = useState(0);
    const constainerRef = useRef();
    let newScroll = 0

    function Scroll(value) {
        const maxScroll = constainerRef.current.scrollWidth - constainerRef.current.clientWidth;
        newScroll = scrollPosition + value;

        if (newScroll < 0) {
            newScroll = 0;
        }
        if (newScroll > maxScroll) {
            newScroll = maxScroll;
        }

        SetScrollPosition(newScroll);
        constainerRef.current.scrollLeft = newScroll;
        console.log(newScroll)

    }


    return (
        <div className="ButtonGroup">
            <div className='ArrowBtnLeft' onClick={() => Scroll(-200)}>
                <button className='Arrow'></button>
            </div>

            <div ref={constainerRef} className='ToggleGroup'>
                <div className='CustomInput'>
                    <input type="radio" className="Button1" id='Button1' name='action1' value="Button1" />
                    <label for='Button1'>Button 1</label>
                </div>

                <div className='CustomInput'>
                    <input type="radio" className="Button2" id='Button2' name='action1' value="Button2" />
                    <label for='Button2'>Button 2</label>
                </div>

                <div className='CustomInput'>
                    <input type="radio" className="Button3" id='Button3' name='action1' value="Button3" />
                    <label for='Button3'>Button 3</label>
                </div>

                <div className='CustomInput'>
                    <input type="radio" className="Button4" id='Button4' name='action1' value="Button4" />
                    <label for='Button4'>Button 4</label>
                </div>

                <div className='CustomInput'>
                    <input type="radio" className="Button5" id='Button5' name='action1' value="Button5" />
                    <label for='Button5'>Button 5</label>
                </div>

                <div className='CustomInput'>
                    <input type="radio" className="Button6" id='Button6' name='action1' value="Button6" />
                    <label for='Button6'>Button 6</label>
                </div>
            </div>
            <div className='ArrowBtnRight' onClick={() => Scroll(200)}>
                <button className='Arrow'></button>
            </div>
        </div>

    );
}

function SecondToggleBtn() {
    const [scrollPosition, SetScrollPosition] = useState(0);
    const constainerRef = useRef();
    function Scroll(value) {

        const maxScroll = constainerRef.current.scrollWidth - constainerRef.current.clientWidth;
        let newScroll = scrollPosition + value;

        if (newScroll < 0) {
            newScroll = 0;
        }
        if (newScroll > maxScroll) {
            newScroll = maxScroll;
        }
        SetScrollPosition(newScroll);
        constainerRef.current.scrollLeft = newScroll;
        console.log(newScroll)
    }


    return (
        <div className="ButtonGroup">

            <div className='ArrowBtnLeft' onClick={() => Scroll(-200)}>
                <button className='Arrow'></button>
            </div>
            <div ref={constainerRef} className="ToggleGroup2">
                <div className='CustomInput2'>
                    <input type="radio" className="Button7" id='Button7' name='action' value="Button1" />
                    <label for='Button7'>Button 1</label>
                </div>

                <div className='CustomInput2'>
                    <input type="radio" className="Button8" id='Button8' name='action' value="Button2" />
                    <label for='Button8'>Button 2</label>
                </div>

                <div className='CustomInput2'>
                    <input type="radio" className="BuButton9tton3" id='Button9' name='action' value="Button3" />
                    <label for='Button9'>Button 3</label>
                </div>

                <div className='CustomInput2'>
                    <input type="radio" className="Button10" id='Button10' name='action' value="Button4" />
                    <label for='Button10'>Button 4</label>
                </div>

                <div className='CustomInput2'>
                    <input type="radio" className="Button11" id='Button11' name='action' value="Button5" />
                    <label for='Button11'>Button 5</label>
                </div>

                <div className='CustomInput2'>
                    <input type="radio" className="Button12" id='Button12' name='action' value="Button6" />
                    <label for='Button12'>Button 6</label>
                </div>
            </div>
            <div className='ArrowBtnRight' onClick={() => Scroll(200)}>
                <button className='Arrow'></button>
            </div>
        </div>
    );
}

function Folder() {
    return (
        <div className='FolderHolder'>
            <input type='button' className='Folder' />
            <label className='FolderLable'>Folder</label>
        </div>
    );
}

function MuiltiFolder() {
    return (
        <div className='FolderHolder2'>
            <div className='AllFolders'>
                <div className='Folder1'>
                    <p className='FolderTxt'>None</p>
                </div>

                <div className='Folder1'>
                    <p className='FolderTxt'>None</p>
                </div>

                <div className='Folder1'>
                    <p className='FolderTxt'>None</p>
                </div>

                <div className='Folder1'>
                    <p className='FolderTxt'>None</p>
                </div>
                <div className='Expand'>
                </div>
            </div>

            <label className='FolderLable'>Folder</label>

        </div>
    );
}

export default function Page2() {

    function Folders() {
        let folderArr = [];
        for (let i = 0; i < 10; i++) {
            if (i === 4) {
                folderArr.push(MuiltiFolder());
            } else {
                folderArr.push(Folder());
            }
        }
        return folderArr;
    }

    return (
        <div className='PageContainer-Page2'>
            <div className='Banner'>
                <div className='Banner1'>
                    <p className='Logo'>LOGO</p>
                    <div className='TopCircleContainer'>
                        <div className='CircleTop'>
                            <p></p>
                        </div>
                        <div className='CircleTop'>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className='Banner2'>
                    <div className='HomeBtn'>
                        <div className='HomeTxt'>Home</div>
                    </div>
                    <div className='Title'>
                        <div className='TitleTxt'>TITLE</div>
                    </div>
                    <div className='InfoContainer'>
                        <button className='InfoBtn'>
                            i
                        </button>
                    </div>
                </div>
            </div>
            <div className='MainContainer'>

                <div className='Container'>
                    {FirstToggleBtn()}
                    <p className='SubTitle'>Some Text here</p>
                    {SecondToggleBtn()}
                    <p className='SubTitle'>Some other Text here</p>
                    <div className='Folders'>
                        {Folders()}
                    </div>
                </div>

            </div>
            <div className='BottomBanner'>
                <div className='Circle'>
                    <p></p>
                </div>
                <div className='Circle'>
                    <p></p>
                </div>
                <div className='Circle'>
                    <p></p>
                </div>
                <div className='Circle'>
                    <p></p>
                </div>
                <div className='Circle'>
                    <p></p>
                </div>
            </div>


        </div>
    );
}