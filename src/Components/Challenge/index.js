import AOS from 'aos'
import React, {useState} from 'react'
import './challenge.css'
import data from '../../data'

AOS.init({
    duration: 1000
  })

const Challenge = () => {
    const [value, setIsValue] = useState(data);
    const [noOfElement, setNoOfElement] = useState(4);

    const slice = value.slice(0, noOfElement);
    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement)
    }
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
                            <input type="submit" value="Chest" onClick={() => handleClick('chest')} className="dynamic-btn"/>
                            <input type="submit" value="Arm" onClick={() => handleClick('arm')} className="dynamic-btn"/>
                            <input type="submit" value="Legs" onClick={() => handleClick('leg')} className="dynamic-btn"/>
                            <input type="submit" value="Abs" onClick={() => handleClick('abs')} className="dynamic-btn"/>
                            <input type="submit" value="Back" onClick={() => handleClick('back')} className="dynamic-btn"/>
                        </div>
                    </div>
                

                <div className='result'>
                    { 
                        slice.map((programme) => (

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
                <div className="load-more">
                        <button className="load-more-btn" onClick={loadMore}>Load More</button>
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
