
import { useState } from 'react';
import './Page1.css'

function Acordion() {
    const [Hidden, setHidden] = useState(false)
    return (
        <div className="FormSelect">
            <br/>
                <div className="border" style={{width: Hidden ? "100%": 0}} />
            <br/>

            <form className="FormGroup">
                <div className="Accordion">
                    <h2 className="form-title">Create New</h2>
                    <div className='ColapesBtn'>
                        <button  type="button" 
                        className='AccordionBtn' 
                        style={{transform: Hidden ? "rotate(180deg)": ""}}
                        onClick={()=>setHidden(!Hidden)}>

                        </button>
                    </div>
                </div>

                <div className='Hidden' style={{height : Hidden ?"100%" :0 , overflow: Hidden?'show':"hidden"}}>
                    <div className="FormQ1">
                        <div>
                            <label for="question1">Question 1?</label>
                            <p className="description">question 1 example</p>
                        </div>
                        <div className="ToggleGroup">
                            <input type="radio" className="YesButton" name="action" value="yes" />
                            <label for="YesTxt">Yes</label>
                            <input type="radio" className="NoButton" name="action" value="no" />
                            <label for="NoTxt">No</label>
                        </div>

                    </div>
                    <br/>
                        <div className="border" style={{width: '95%', borderColor: 'grey' }}/>
                    <br/>
                    <div className="FormQ2">
                        <div>
                            <label for="question2">Question 2?</label>
                            <p className="description">Question 2 example.</p>
                        </div>

                        <form className="ToggleGroup">
                            <input type="radio" className="YesButton" name="action" value="yes" />
                            <label for="YesTxt">Yes</label>
                            <input type="radio" className="NoButton" name="action" value="no" />
                            <label for="NoTxt">No</label>
                        </form>

                    </div>

                    <div className="FormDate">
                        <div className='Decade'>
                            <label for="DecadeLable">Decade*</label>
                            <select className="DecadeSelect" name="decade">
                                <option value="2020s">2020's</option>
                                <option value="2020s">2010's</option>
                            </select>
                        </div>

                        <div className='Year'>
                            <label for="YearLable">Year</label>
                            <select className="YearSelect" name="year">
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>

                        <div className='Month'>
                            <label for="month">Month</label>
                            <select className="MonthSelect" name="month">
                                <option value="">?</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>

                        <div className='Day'>
                            <label for="day">Day</label>
                            <select className="DaySelect" name="day">
                                <option value="">?</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </div>
                    </div>

                    <div className='BinButton'>
                        <button className='Bin'></button>
                    </div>

                    <div className='CompleteButton'>
                        <button className='complete'></button>
                        <label for='complete'>Comfirm Changes</label>
                    </div>
                </div>

            </form>
        </div>

    );
}

export default function Page1() {
    return (
        <div className="PageContainer-page1">

            <div className="Banner">
                <h1 className="Title-page1">TITLE TITLE PAGE</h1>
                <p className='SubTitle'>this is the title</p>
            </div>
            
            
            {Acordion()}


            <br/>
                <div className="border" />

            <div className="CreateForm">
                
                <button className='Create'> + </button>
                <div className='CreateText'>
                    <label for="CreateNewForm">Create New</label>
                    <input type="text" className="NewFormTilte" placeholder='e.g placeholder'></input>
                </div>
            </div>

            <div className="FormDone">
                <button className="DoneBtn">Done</button>
                <p className="MaybeLaterBtn">Not now - Maybe later</p>
            </div>
        </div>
    );
}