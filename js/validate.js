export function validateName(name, helpText) {
    if (name.value.length < 2) {
        return false;
    } else {
        return true;
    }
}

// export class Validate {
//     makeProp(elem, helpElem, status) {
//             return { elem, helpElem, status }
//         }
//         // name = { obj: null, status: true };
//         // login = { obj: null, status: true };
//         // password = { obj: null, status: true };
//         // email = { obj: null, status: true };

//     constructor(name, helpName, login, helpLogin) {
//         console.log(name)
//         this.name = this.makeProp(name, helpName, true)
//         this.name.elem.onblur = function() {

//             if (name.value.length < 2) {
//                 console.log('error name')
//                 name.style.borderColor = "red";
//                 helpName.style.color = "red";
//                 helpName.innerHTML = "Минимум 2 символа";
//                 this.name.status = false;
//             } else {
//                 name.style.borderColor = "black";
//                 helpName.innerHTML = "";
//                 this.name.status = true;
//             }

//         }
//         this.login = this.makeProp(login, helpLogin, true)
//         login.onblur = function() {

//                 if (login.value.length < 6) {
//                     login.style.borderColor = "red";
//                     helpLogin.style.color = "red";
//                     helpLogin.innerHTML = "Минимум 6 символов";
//                     this.login.status = false;
//                 } else {
//                     login.style.borderColor = "black";
//                     helpLogin.innerHTML = "";
//                     this.login.status = true;
//                 }

//             }
//             // this.password = this.makeProp(password, helpPassword, true)
//             // this.email = this.makeProp(email, helpEmail, true)
//     }


// }