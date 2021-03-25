import * as AiIcons from 'react-icons/ai';
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import swal from 'sweetalert';
import moment from 'moment';
import InfoIcon from '../Images/info-modal.png'
//SIZE
export const IconSize = 25;
export const valueWidth = {width:'100%'};

//API ROUTE 
export const ROUTE_API = 'http://localhost:4000';


//STRINGS
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
const monthsFilter = [
    {id:'01', value:'January'},
    {id:'02', value:'February'}, 
    {id:'03', value:'March'}, 
    {id:'04', value:'April'},
    {id:'05', value:'May'}, 
    {id:'06', value:'June'}, 
    {id:'07', value:'July'},
    {id:'08', value:'August'},
    {id:'09', value:'September'}, 
    {id:'10', value:'October'}, 
    {id:'11', value:'November'}, 
    {id:'12', value:'December'},
    ];
export const columnInfo = [
    {title:'Date'},
    {title:'Type'},
    {title:'Concept'},
    {title:'Amount'},
]


//NUMBERS
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

//FUNCTIONS
export const saveToken = (value) => {
    localStorage.setItem('token',value)
    window.location.reload(); 
} 
export const logOut = () => {swal({
    title: "Are you sure you want to log out?",
    text: "You will be redirected to the login form.",
    icon: "warning",
    buttons: true,
    dangerMode: true,
}).then((out) => {
if (out) {
    localStorage.removeItem('token')
        swal("Goodbyle, see you soon", {
            icon: "success",
        }).then((res) => {
            window.location.reload(); 
        })
    }
})

}
export const firstTenRecors = (arr) => arr.splice(0,10)
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
export const none = () => console.log("")
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
export const replaceElement = (arr, value) => arr.map((dato) => {
    if(dato.id === value.id){
        dato = value
    }
        return dato;
    });

export const filterDate = (arr, dateParam, amountParam) => {
        let dataIndex
        let amountParams = amountParam.split('-').map(item => parseInt(item))
            dataIndex = monthsFilter.find(item => item.value === dateParam)
            const filterValue = arr.filter(item => moment(item.date).format('MM') === dataIndex.id).filter(item => ((item.amount >= amountParams[0])&&(item.amount <= amountParams[1])))
        return filterValue
    }




// OBJECTS
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

export const fieldFilterInfo = [
    {name:"amount", 
    inputType:"select", 
    placeHolder:"Select Amount", 
    htmlFor:"amount", 
    labelText:"Filter by income",
    optionText: filterAmountTypes,
    },
    {
        name:"date", 
        inputType:"select", 
        placeHolder:"Select Month", 
        htmlFor:"date", 
        labelText:"Filter by months",
        optionText: months,
    }
]



// NAV INFO
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        func: none
},
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <BsIcons.BsGraphUp />,
        cName: 'nav-text',
        func: none
    },
    {
        title: 'Register operation',
        path: '/register',
        icon: <BsIcons.BsPencil/>,
        cName: 'nav-text',
        func: none
    },
    {
        title: 'Global Records',
        path: '/records',
        icon: <FiIcons.FiDatabase/>,
        cName: 'nav-text',
        func: none
    },
    {
        title: 'Log Out',
        path: '/SignIn',
        icon: <FiIcons.FiUserX/>,
        cName: 'nav-text',
        func: logOut
    },
];

export const fieldsEditForm = [
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

export const fieldsUserInfo = [
    {type:"text", 
    inputType:"input",
    name:"username", 
    id:"username", 
    placeHolder:"Ingress username", 
    htmlFor:"username", 
    labelText:"Username", 
    registerInfo:{ required: {
        value: true,
        message:'username is required'
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

    {
    type:"email", 
    inputType:"input", 
    labelText:"E-mail", 
    name:"email", 
    id:"email", 
    placeHolder:"Ingress email", 
    htmlFor:"email",
    registerInfo:{ required: {
        value: true,
        message: "Enter a valid e-mail address",
    },
    validate: (value) => {
        return [
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        ].every((pattern) => pattern.test(value)) || "E-mail format wrong"
    }
}
},
    {
    type:"password", 
    inputType:"input",
    labelText:"Password", 
    name:"password", 
    id:"password", 
    placeHolder:"Ingress password", 
    htmlFor:"password", 
    registerInfo:{ required: {
        value: true,
        message: "Password is required",
        },
    },
}
]