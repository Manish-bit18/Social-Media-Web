const WelcomeMessage = ({ ongetpostClick }) => {
    return(
        <center>
            <h1>Welcome to the Social Media App!</h1>
             <button 
             type="button" 
             className="btn btn-success" 
             onClick = {ongetpostClick} >Success</button>
        </center>
    )
}

export default WelcomeMessage;