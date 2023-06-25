import './topbar.scss'
import { Person, AlternateEmail, GitHub, More, Web, Dashboard } from "@material-ui/icons";
// import portfolio from "../portfolio/Portfolio"
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="logo">
                        <a href='#intro'>
                            kxpatil02⚡
                        </a>
                    </div>
                    <div className="items">
                        <Person className='icons' />
                        <a href='https://wa.link/00ucug' target="_blank"
                            rel="noopener noreferrer" >
                            <span>+91 8552099723</span>

                        </a>
                    </div>


                    <div className="items">
                        <AlternateEmail className='icons' />
                        <a href="mailto: kxpatil02@gmail.com">
                            <span>kxpatil02@gmail.com</span>
                        </a>
                    </div>

                    <div className="items">
                        <More className='icons' />
                        <a href="#portfolio">
                            <span>Portfolio</span>
                        </a>

                    </div>

                    <div className="items">
                        <Dashboard className='icons' />
                        <a href="#contact">
                            <span>Contact-Me</span>
                        </a>

                    </div>



                </div>
                <div className="right">
                    <div className="items">
                        <GitHub className='icons' />
                        <a href="https://github.com/kxpatil02" target='#blank'>
                            <span>GITHUB</span>
                        </a>
                    </div>
                    <div className="items">
                        <Web className='icons' />
                        <a href='#' target='#blank'>
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
