import AOS from 'aos'
import React, {useState} from 'react'
import './challenge.css'
import data from '../../data'

AOS.init({
    duration: 1000
  })

const Challenge = () => {
    const [value, setIsValue] = useState(data);

    const handleClick = (e) => {
        const updatedItems = data.filter((curElem) => {
            return curElem.type === e;
        })
        
        setIsValue(updatedItems);
    }
    // const getData = (e) => {
    //     setIsLoading(true);
    //     e.preventDefault();
    //     setIsResult(data.programmes);
    // }
    return (
        <div className="challenge-container-page">
        <div className="challenge-page-image">
            <div className="video-content">
                    <h1 className="video-content-heading">CHALLENGE YOURSELF</h1>
                    <p className="video-content-paragraph">Home/Challenge</p>
                </div>
            </div>
            <div className="challenge-container">
            
                <h1 className="question">Select your Category</h1>
                    <div className="question-div">
                        <div className="gender">
                            <input type="submit" value="Bicep" onClick={() => handleClick('hard')} className="dynamic-btn"/>
                            <input type="submit" value="Tricep" onClick={() => handleClick('light')} className="dynamic-btn"/>
                            <input type="submit" value="legs" onClick={() => handleClick('light')} className="dynamic-btn"/>
                            <input type="submit" value="hips" onClick={() => handleClick('light')} className="dynamic-btn"/>
                            <input type="submit" value="abs" onClick={() => handleClick('light')} className="dynamic-btn"/>
                            <input type="submit" value="shoulder" onClick={() => handleClick('light')} className="dynamic-btn"/>
                            <input type="submit" value="abs" onClick={() => handleClick('light')} className="dynamic-btn"/>
                            <input type="submit" value="back" onClick={() => handleClick('light')} className="dynamic-btn"/>
                        </div>
                    </div>
                

                <div className='result'>
                    { 
                        value.map((programme) => (

                            <div className="card-item" key={programme.id} data-aos="zoom-in">
                                <div className="image-div">
                                    <video type='video/mp4' loop muted src={programme.video} alt="card-img" 
                                    className="card-img"
                                    onMouseOver={e => e.target.play()}
                                    onMouseOut={e => e.target.pause()}
                                    ></video>
                                </div>
                                <div className="programme-details-div">
                                    <p className='card-name'>{programme.name}</p>
                                    <p className="programme-details">{programme.set}Sets X {programme.rep}Reps</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )


    // const [menuItem, setMenuItem] = useState(data);
    // const [buttons, setButtons] = useState(allTypes);

    // const filter = (button) => {
    //     if(button ==='All'){
    //         setMenuItem(data);
    //         return;
    //     }

    //     const filteredData = data.programmes.filter(item => item.type === button);
    //     setMenuItem(filteredData)
    // }
    // return(
    //     <div className="challenge-container">
    //         <div className="title">
    //             <h1>
    //                 filter
    //             </h1>
    //         </div>
        
    //         <Button button={buttons} filter={filter} />
    //         <Menu menuItem={menuItem} />
    //     </div>
    // );
}

export default Challenge
