import * as AiIcons from 'react-icons/ai';
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import swal from 'sweetalert';
import moment from 'moment';
import InfoIcon from '../Images/info-modal.png'
//Size
export const IconSize = 25;
export const valueWidth = {width:'100%'};

//API ROUTE 
export const ROUTE_API = 'http://localhost:4000';


//Strings
export const defaultTitleBarTable = 'Income / Expense bars table';
export const defaultTitleCakeTable = 'Income / Expense pie table';
export const formRegisterTitle = 'Transaction registration form';
export const deleteButtonText = "Delete";
export const editButtonText = "Edit";
export const defaultHorizontalTable = 'Income / Expense Horizontal table'
export const defaultLabel = 'Percentages of operations';
export const Ingress = 'Ingress';
export const Egress = 'Egress';
export const FilterButtonText = 'Filter Values'
export const IngressIconColor = 'green';
export const EgressIconColor = 'red';
export const showHalf = 'Show half of the list';
export const hideHalf = 'Collapse list in half';
export const types = ["Ingress", "Egress"];
export const options = ["AMOUNT","DATE","CONCEPT"]
export const defaultBackgroundColorEgress = 'rgba(247, 120, 112)';
export const defaultBackgroundColorIngress = 'rgba(53, 238, 198)';
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September', 'October', 'November', 'December'];
export const columnInfo = [
    {title:'Date'},
    {title:'Type'},
    {title:'Concept'},
    {title:'Amount'},
]


//Numbers
export const borderWidth = 1
export const amountIngress = [0,0,0,0,0,0,0,0,0,0,0,0]
export const amountEgress = [0,0,0,0,0,0,0,0,0,0,0,0]
export const filterAmountTypes = [
    "0 - 1000",
    "1000 - 5000",
    "5000 - 10000",
    "10000 - 50000",
    "+ 50000 "
]

//Functions
export const onShowInfo = value => {
    const found = infoModal.find(element => {
     
    return element.type === value
});
swal({
    type: 'info',
    title: found.text, 
    text: "Information Field", 
    icon: InfoIcon, 
    button: 'Continue',
})
}

export const infoFunction = type => onShowInfo(type)
export const parseNum = value => parseInt(value.split('-').slice(1).slice(0,1))
export const sumArray = (arr) => arr.reduce((sum, value) => ( sum + value ), 0);
export const totalEgressIngress = (arr, key) => arr?.filter(item => item.type === key).map(item => item.amount).reduce((sum, value) => ( sum + value ), 0)
export const sumAmountsByAmount = arr => { 

    const group = arr.reduce((p,c)=>{ 
        p[c.id] = (p[c.id]  || 0)+c.amount;
        return p;
    },{})
    
    const result = Object.keys(group).map(e=>{ 
        const o = {};
        o.id = e;
        o.amount = group[e];
        return o;
    })
    
    return result                                    
    }
export const formatDate = (date) => moment(date).format('YYYY-MM-DD')
export const calculateCurrentMoney = (arr) => arr.reduce((accum, currentValue) => accum - currentValue) 
export const keyExtract = (obj, value) => {
    let arr = [];
    let res 
    Object.entries(obj).forEach(
    ([key, value]) => {
        arr.push({[key] : value});
    });
    res = arr.filter(item => Object.keys(item)[0] === value)
    return res[0]
    }
export const setValueDefault = (obj) => {
    const [result] = Object.keys(obj).map(key => ({ value: obj[key] }));
    return result
}



//Info Objects
export const infoModal = [
    {type:"amount", text:"Enter the amount of money you want to deposit / withdraw."},
    {type:"concept", text:"Enter the concept of the record."},
    {type:"date", text:"Enter the date of registration."},
    {type:"type", text:"Select the type of record."}
]
export const fieldInfo = [
    {type:"text", 
    inputType:"input",
    name:"concept", 
    id:"concept", 
    placeHolder:"Ingress concept", 
    htmlFor:"concept", 
    labelText:"Concept", 
    icon:<FcIcons.FcSurvey 
    size={IconSize} 
    onClick={()=>infoFunction("concept")} />,
    registerInfo:{ required: {
        value: true,
        message:'Concept is required'
    },
    maxLength:{
        value: 20,
        message:'Maximum 20 characters'
    },
    minLength: {
        value: 5,
        message: 'Minimum 5 characters'
    },
    validate: (value) => {
        return [
            /^[A-Za-z\s]+$/ 
        ].every((pattern) => pattern.test(value)) || "Only letters"
        }
    }
},
    

    {type:"number", 
    inputType:"input", 
    name:"amount", 
    id:"amount", 
    placeHolder:"Ingress amount", 
    htmlFor:"amount", 
    labelText:"Amount", 
    icon:<FcIcons.FcMoneyTransfer
    size={IconSize} 
    onClick={()=>infoFunction("amount")} 
    />,
    registerInfo:{ required: {
        value: true,
        message:'Amount is required'
    },
    maxLength:{
        value: 5, 
        message:'Maximum 5 characters'
    },
    minLength: {
        value: 2,
        message: 'Minimum 2 characters'
    },
    validate: (value) => {
        return [
            /^[1-9]\d*$/
        ].every((pattern) => pattern.test(value)) || "Only Numbers"
    }
}
},


    {type:"date",
    inputType:"input",
    name:"date", 
    id:"date",
    placeHolder:"Ingress date", 
    htmlFor:"date", 
    labelText:"Date", 
    icon:<FcIcons.FcOvertime 
    size={IconSize} 
    onClick={()=>infoFunction("date")}
    />,
    registerInfo:{ required: {
        value: true,
        message:'Date is required'
    },
}
},

    {name:"type", 
    inputType:"select", 
    placeHolder:"Ingress date", 
    htmlFor:"date", 
    labelText:"Type", 
    optionText: types,
    icon:<FcIcons.FcRules size={IconSize} 
    onClick={()=>infoFunction("type")} 
    
    />},
]

export const fieldFilterAmount = [
    {name:"type", 
    inputType:"select", 
    placeHolder:"Select Amount", 
    htmlFor:"date", 
    labelText:"Filter by income",
    optionText: filterAmountTypes,
    }
]

export const fieldFilterMonths = [{
    name:"type", 
    inputType:"select", 
    placeHolder:"Select Month", 
    htmlFor:"date", 
    labelText:"Filter by months",
    optionText: months,
}]

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
    {
        title: 'Global Records',
        path: '/records',
        icon: <FiIcons.FiDatabase/>,
        cName: 'nav-text'
        },
];

export const fieldInfoRecords = [
    {type:"text", 
    inputType:"input",
    name:"concept", 
    id:"concept", 
    placeHolder:"Ingress concept", 
    htmlFor:"concept", 

},
    

    {type:"number", 
    inputType:"input", 
    name:"amount", 
    id:"amount", 
    placeHolder:"Ingress amount", 
    htmlFor:"amount", 
  
},
    {type:"date",
    inputType:"input",
    name:"date", 
    id:"date",
    placeHolder:"Ingress date", 
    htmlFor:"date",  
    registerInfo:{ required: {
        value: true,
        message:'Date is required'
            },
        }
    },
]