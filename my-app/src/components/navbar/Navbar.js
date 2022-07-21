import React from 'react';
import NavButton from '../buttons/NavButton'
import './Navbar.css';
import logos from '../../images/nav-logos.png'

export default function Navbar(props)
{
    return (
        <div className="nav-container">
            <div className="logos-container">
                <img src={logos} alt="spr, joynext, gmina, powiat"></img>
            </div>
            <div className="links-container">
            <NavButton
                value="Aktualności"
                link="/aktualnosci"
            />
            <NavButton
                value="Mecze"
                link="/mecze"
            />
            <NavButton
                value="Zespół"
                link="/zespol"
            />
            <NavButton
                value="Druzyny"
                link="/druzyny"
            />
            <NavButton
                value="Młodziez"
                link="/mlodziez"
            />
            <NavButton
                value="Kibice"
                link="/kibice"
            />
            </div>
        </div>
    )
}