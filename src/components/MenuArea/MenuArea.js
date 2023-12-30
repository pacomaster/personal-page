import { HashLink  } from 'react-router-hash-link';
import "./MenuArea.css";
import menuIcon from './icons/icons8-menu-64.png';

export default function MenuArea(){
    function openNav() {
        console.log("open");
        document.getElementById("mySidenav").style.width = "250px";
        }

    function closeNav() {
        console.log("close");
        document.getElementById("mySidenav").style.width = "0";
        }

    return (
        <div className="menu-area">
            <div id="mySidenav" class="sidenav">
              <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav() }>&times;</a>
              <span><HashLink onClick={() => closeNav()} to='#personal-info'>Personal Info</HashLink></span>
              <span><HashLink onClick={() => closeNav()} to='#summary'>Summary</HashLink></span>
              <span><HashLink onClick={() => closeNav()} to='#experience'>Experience</HashLink></span>
              <span><HashLink onClick={() => closeNav()} to='#education'>Education</HashLink></span>
              <span><HashLink onClick={() => closeNav()} to='#skills'>Skills</HashLink></span>
              <span><HashLink onClick={() => closeNav()} to='#strengths'>Strengths</HashLink></span>
              <span><HashLink onClick={() => closeNav()} to='#certifications'>Certifications</HashLink></span>
            </div>

            <span style={{fontSize: '30px', cursor: 'pointer'}} onClick={() => openNav() }><img src={menuIcon}/></span>
        </div>
    );
}