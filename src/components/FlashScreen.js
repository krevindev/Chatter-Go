import './FlashScreen.css';
import chatterGoLogo from '../res/images/logo/ChatterGoLogo.png';
import loadingCircle from '../res/images/svg/loading-circle.svg';

export default function FlashScreen() {
    return (
        <div id="FlashScreen">
            <div id='flash-screen-content'>
                <img id='flash-main-logo' src={chatterGoLogo} />
                <p>Chatter On. Anywhere.</p>
                <img id='flash-loading-img' src={loadingCircle} />
            </div>
        </div>
    )
}