import {AiFillHome} from 'react-icons/ai'
import {FaListUl} from 'react-icons/fa'
import {BsPeopleFill, BsFillSuitHeartFill,BsFillGearFill,BsFillDoorClosedFill} from 'react-icons/bs'
import {MdAlbum} from 'react-icons/md'

export const sideMenuData = [
    {
        id:1,
        name: 'Home',
        icon: <AiFillHome />,
        route: '/home'
    },
    {
        id:2,
        name: 'Playlists',
        icon: <FaListUl />,
        route: '/playlists'
    },
    {
        id:3,
        name: 'Artists',
        icon: <BsPeopleFill />,
        route: '/artists'
    },
    {
        id:4,
        name: 'Albums',
        icon: <MdAlbum />,
        route: '/albums'
    },
    {
        id:5,
        name: 'Favourite',
        icon: <BsFillSuitHeartFill />,
        route: '/favourite'
    },
    {
        id:6,
        name: 'Setting',
        icon: <BsFillGearFill />,
        route: '/setting'
    },
    {
        id:7,
        name: 'Log out',
        icon: <BsFillDoorClosedFill />,
        route: '/logout'
    },
    
]