import React from 'react';

const kingStyle = {
    position: 'absolute',
    zIndex: '100',
    transform: 'translate(-50%,-50%)',
    left: '50%',
    top: '50%',
    width: '380px'
}

const Loader = () => {
    return (
        <React.Fragment>
            <div className="loader-wrapper">
                <div className="loader">
                </div>
                <img alt="King" style={kingStyle} src="/img/king.png" />
            </div>
        </React.Fragment>
    )
}


export default Loader 