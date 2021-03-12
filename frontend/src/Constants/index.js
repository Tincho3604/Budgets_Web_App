import * as AiIcons from 'react-icons/ai';
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";

import swal from 'sweetalert';

//Size
export const IconSize = 25

//Strings
export const Ingress = 'Ingress';
export const showHalf = 'Show half of the list'
export const hideHalf = 'Collapse list in half'
export const types = ["Ingress", "Egress"]


//Function
export const onShowInfo = value => {
    const found = infoModal.find(element => {
    return element.type === value
});
    swal({
        title: "Information",
        text: found.text,
        icon: "info",
        button: "Ok"
        });
    }
export const infoFunction = type => onShowInfo(type)


//Info Objects
export const infoModal = [
    {type:"amount", text:"Enter the amount of money you want to deposit / withdraw."},
    {type:"concept", text:"Enter the concept of the record."},
    {type:"date", text:"Enter the date of registration."},
    {type:"type", text:"Select the type of record."}
]
export const fieldInfo = [
    {type:"text", inputType:"input", name:"concept", id:"concept", placeHolder:"Ingress concept", htmlFor:"concept", labelText:"Concept", icon:<FcIcons.FcSurvey size={IconSize} onClick={()=>infoFunction("type")} />},
    {type:"number", inputType:"input", name:"amount", id:"amount", placeHolder:"Ingress amount", htmlFor:"amount", labelText:"Amount", icon:<FcIcons.FcMoneyTransfer size={IconSize} onClick={()=>infoFunction("amount")} />},
    {type:"date", inputType:"input", name:"date", id:"date", placeHolder:"Ingress date", htmlFor:"date", labelText:"Date", icon:<FcIcons.FcOvertime size={IconSize} onClick={()=>infoFunction("date")} />},
    {inputType:"select", placeHolder:"Ingress date", htmlFor:"date", labelText:"Type", 
    optionText: types,
    icon:<FcIcons.FcRules size={IconSize} onClick={()=>infoFunction("type")} />},
]




// Nav Info
export const SidebarData = [
    {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
},
    {
    title: 'Statistics',
    path: '/statistics',
    icon: <BsIcons.BsGraphUp />,
    cName: 'nav-text'
    },
    {
    title: 'Register operation',
    path: '/register',
    icon: <BsIcons.BsPencil/>,
    cName: 'nav-text'
    },
];