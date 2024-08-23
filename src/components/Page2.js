import './Page2.css'

function FirstToggleBtn() {
    return (
        <div className="ToggleGroup">
            <div className='CustomInput'>
                <input type="radio" className="Button1" id='Button1' name='action' value="Button1" />
                <label for='Button1'>Button 2</label>
            </div>

            <div className='CustomInput'>
                <input type="radio" className="Button2" id='Button2' name='action' value="Button2" />
                <label for='Button2'>Button 2</label>
            </div>

            <div className='CustomInput'>
                <input type="radio" className="Button3" id='Button3' name='action' value="Button3" />
                <label for='Button3'>Button 3</label>
            </div>

            <div className='CustomInput'>
                <input type="radio" className="Button4" id='Button4' name='action' value="Button4" />
                <label for='Button4'>Button 4</label>
            </div>

            <div className='CustomInput'>
                <input type="radio" className="Button5" id='Button5' name='action' value="Button5" />
                <label for='Button5'>Button 5</label>
            </div>

            <div className='CustomInput'>
                <input type="radio" className="Button6" id='Button6' name='action' value="Button6" />
                <label for='Button6'>Button 6</label>
            </div>
        </div>

    );
}

function SecondToggleBtn() {
    return (
        <div className="ToggleGroup2">
            <div className='CustomInput2'>
                <input type="radio" className="Button1" id='Button1' name='action' value="Button1" />
                <label for='Button1'>Button 2</label>
            </div>

            <div className='CustomInput2'>
                <input type="radio" className="Button2" id='Button2' name='action' value="Button2" />
                <label for='Button2'>Button 2</label>
            </div>

            <div className='CustomInput2'>
                <input type="radio" className="Button3" id='Button3' name='action' value="Button3" />
                <label for='Button3'>Button 3</label>
            </div>

            <div className='CustomInput2'>
                <input type="radio" className="Button4" id='Button4' name='action' value="Button4" />
                <label for='Button4'>Button 4</label>
            </div>

            <div className='CustomInput2'>
                <input type="radio" className="Button5" id='Button5' name='action' value="Button5" />
                <label for='Button5'>Button 5</label>
            </div>

            <div className='CustomInput2'>
                <input type="radio" className="Button6" id='Button6' name='action' value="Button6" />
                <label for='Button6'>Button 6</label>
            </div>
        </div>

    );
}

export default function Page2() {
    return (
        <div className='PageContainer-Page2'>
            <div className='Banner1'>
                LOGO
            </div>
            <div className='Banner2'>
                <div className='HomeBtn'>
                    Home
                </div>
                <div className='Title'>
                    TITLE
                </div>
                <button className='InfoBtn'>
                    i
                </button>
            </div>

            <div className='Container'>
                {FirstToggleBtn()}
                <p className='SubTitle'>Some Text here</p>
                {SecondToggleBtn()}
                <p className='SubTitle'>Some other Text here</p>
            </div>

            <div className='Folders'>

            </div>

        </div>
    );
}