import React, { useState } from "react";
import "./CardActivityStyles.scss";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

const CardActivity = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (visible) => {
        if (visible) {
            setIsVisible(true);
        }
    };

    return (
        <VisibilitySensor onChange={handleVisibilityChange}>
            <div className={`containerCard ${isVisible ? "visible" : ""}`}>
                <div className={`card ${isVisible ? "visible" : ""}`}>
                    <Link
                        to={{
                            pathname: `/activity/${props.dataimg.id}`,
                            state: { id: props.dataimg.id },
                        }}
                    >
                        <img
                            className={`CardBackground ${isVisible ? "visible" : ""}`}
                            src={props.dataimg.img}
                            alt={props.dataimg.title}
                        />
                    </Link>
                    <p className={`textCard ${isVisible ? "visible" : ""}`}>
                        {props.dataimg.title}
                    </p>
                </div>
            </div>
        </VisibilitySensor>
    );
};

export default CardActivity;
