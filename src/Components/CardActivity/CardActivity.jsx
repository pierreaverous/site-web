import React from "react";
import "./CardActivityStyles.scss";
import {Link} from 'react-router-dom'

const CardActvity = (props) => {

    return(
        <>
            <div className='containerCard'>
              <div className='card'>
                  <Link to={{
                      pathname: `/activity/${props.dataimg.id}`,
                      state: {id: props.dataimg.id}
                  }}>
                    <img className='CardBackground'src={props.dataimg.img} alt={props.dataimg.title}/>
                  </Link>
                  <p className='textCard'>{props.dataimg.title}</p>
              </div>
            </div>
        </>

    )

}

export default CardActvity