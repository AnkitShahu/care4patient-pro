import { useState } from 'react'
import Link from "next/link";

const DropdownMenu = ({ menu, closeMobileMenu }) => {
    const [click, setClick] = useState(false);
    const handleOnClick = () => {
        setClick(!click)
    }
    return (
        <>
            <ul onClick={handleOnClick} className={`${click ? 'dropdownMenu clicked' : 'dropdownMenu'}   shadow p-3 bg-white`}>
                {
                    menu === "about" ? [
                        { id: "about-menu-1", title: "PATIENT REFERRAL PROGRAM", path: "/referral-program/" },
                        { id: "about-menu-2", title: "PAYMENT PLAN", path: "/payment-plan/" },
                        { id: "about-menu-3", title: "NEW TECHNOLOGIES", path: "/new-technologies/" },
                        { id: "about-menu-4", title: "OFFER", path: "/offer/" },
                        { id: "about-menu-5", title: "MEET OUR TEAM", path: "/meet-our-team/" },
                        { id: "about-menu-6", title: "COVID-19", path: "/how-we-can-reduce-the-spread-of-corona-virus-together/" }
                    ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link href={item.path}>
                            <a className='nav-link text-dark'>{item.title}</a>
                        </Link>
                    </li>) : menu === 'service' ? [{ id: "service-menu-1", title: "MISSING TEETH", path: "/service/missing-teeth/", submenu: null },
                        { id: "service-menu-2", title: "WISDOM TEETH REMOVAL", path: "/service/wisdom-teeth-removal/", submenu: null },
                    { id: "service-menu-3", title: "CHILD BENEFIT", path: "/service/child-benefit/", submenu: null },
                    { id: "service-menu-4", title: "DENTAL IMPLANTS", path: "/service/dental-implants/", submenu: null },
                    { id: "service-menu-5", title: "DENTURE", path: "/service/dentures/", submenu: null },
                    { id: "service-menu-6", title: "TEETH WHITENING", path: "/service/teeth-whitening/", submenu: null },
                    { id: "service-menu-7", title: "CROWN AND BRIDGES", path: "/service/crowns-and-bridge/", submenu: null },
                    { id: "service-menu-8", title: "VENEERS", path: "/service/veneers/", submenu: null },
                    {
                        id: "service-menu-9", title: "INVISALIGN", path: "/service/teeth-aligners/", submenu: [
                            { id: "services-menu-9.1", link: "/invisalign-open-day/", text: "INVISALIGN OPEN DAY" },
                        ]
                    },
                    { id: "service-menu-10", title: "ROOT CANAL", path: "/service/root-canal/", submenu: null },
                    { id: "service-menu-11", title: "TEETH CLEANING", path: "/service/teeth-cleaning/", submenu: null },
                    { id: "service-menu-12", title: "DENTAL EMERGENCY", path: "/service/dental-emergency/", submenu: null },
                    { id: "service-menu-13", title: "TOOTH FILLING", path: "/service/tooth-fillings/", submenu: null },
                    { id: "service-menu-14", title: "SMILE DESIGN", path: "/service/smile-design/", submenu: null },
                    { id: "service-menu-15", title: "DIGITAL DENTURES", path: "/service/digital-dentures/", submenu: null },
                    { id: "service-menu-16", title: "IMPLANT SUPPORTED DENTURE", path: "/service/implant-supported-denture/", submenu: null }].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link href={item.path}>
                            <a className='nav-link text-dark'>{item.title}</a>
                        </Link>
                        {
                            item.submenu !== null ? <ul className='ps-3 ms-3' style={{ borderLeft: "1px solid #555" }}>
                                {
                                    item.submenu.map(menu => <li className="nav-item mb-2" key={menu.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                                        <Link legacyBehavior={true} href={menu.link}>
                                            <a className='nav-link text-dark'>{menu.text}</a>
                                        </Link>
                                    </li>)
                                }
                            </ul> : null
                        }
                    </li>) : menu === "dentalProblems" ? [
                          { id: "dentalProblems-1", title: "WISDOM TOOTH PAIN", path: "/dental-problems/wisdom-tooth-pain" },
                          { id: "dentalProblems-2", title: "TOOTH GAPS", path: "/dental-problems/tooth-gap" },
                          { id: "dentalProblems-3", title: "TEETH SENSITIVITY", path: "/dental-problems/teeth-sensitivity/" },
                          { id: "dentalProblems-4", title: "STAINED TEETH", path: "/dental-problems/stained-teeth" },
                          { id: "dentalProblems-5", title: "SEVERE TOOTHACHE", path: "/dental-problems/severe-toothache" },
                          { id: "dentalProblems-6", title: "KNOCKED OUT TEETH", path: "/dental-problems/knocked-out-tooth" },
                          { id: "dentalProblems-7", title: "GUM DISEASE", path: "/dental-problems/gum-disease" },
                          { id: "dentalProblems-8", title: "DRY SOCKET", path: "/dental-problems/dry-socket" },
                          { id: "dentalProblems-9", title: "DENTAL ABSCESS", path: "/dental-problems/dental-abscess" },
                          { id: "dentalProblems-10", title: "CROOKED TEETH", path: "/dental-problems/crooked-teeth" },
                          { id: "dentalProblems-11", title: "CHIPPED OR CRACKED TOOTH", path: "/dental-problems/chipped-or-cracked-tooth" },
                          { id: "dentalProblems-12", title: "BRUXISM", path: "/dental-problems/bruxism" },
                          { id: "dentalProblems-13", title: "BLEEDING GUMS", path: "/dental-problems/bleeding-gums" },
                          { id: "dentalProblems-14", title: "BITE PROBLEMS", path: "/dental-problems/bite-problems" },
                           { id: "dentalProblems-15", title: "BAD BREATH", path: "/dental-problems/bad-breath" },
                    ].map(item => <li className="nav-item mb-2" key={item.id} onClick={() => { setClick(false); closeMobileMenu() }}>
                        <Link href={item.path}>
                            <a className='nav-link text-dark'>{item.title}</a>
                        </Link>
                    </li>) : null
                }
            </ul>
        </>
    )
}

export default DropdownMenu