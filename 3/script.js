
// <----------------First method:-------------------->

// function a() {
//   const form = document.getElementById("form");
//   form.innerHTML = `
//     <form action="/submit" method="post">
//       <label for="name">Enter your name:</label>
//       <input type="text" id="name" name="name" required /><br /><br />

//       <label for="email">Enter your email:</label>
//       <input type="email" id="email" name="email" required /><br /><br />

//       <label for="phone">Enter your phone number:</label>
//       <input type="tel" id="phone" name="phone" required /><br /><br />

//       <label for="message">Your message:</label><br />
//       <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />

//       <label for="options">Choose an option:</label>
//       <select id="options" name="options" required>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select><br /><br />

//       <label>Choose one:</label><br />
//       <input type="radio" id="radio1" name="radioGroup" value="radio1" required />
//       <label for="radio1">Radio 1</label><br />
//       <input type="radio" id="radio2" name="radioGroup" value="radio2" />
//       <label for="radio2">Radio 2</label><br />
//       <input type="radio" id="radio3" name="radioGroup" value="radio3" />
//       <label for="radio3">Radio 3</label><br /><br />

//       <input type="submit" value="Submit" />
//     </form>
//   `;
// }


// <---------------second method:------------------->
const formContainer=document.getElementById("formContainer");

const form=document.createElement("form");
form.setAttribute("action","/submit");
form.setAttribute("method","post");
formContainer.appendChild(form);

const labelName=document.createElement("label");
labelName.setAttribute("for","name");
labelName.textContent="Name: ";
formContainer.appendChild(labelName);

const inputName=document.createElement("input");
inputName.setAttribute("type","text");
inputName.setAttribute("id","name");
inputName.setAttribute("name","name");
inputName.setAttribute("required","true");
formContainer.appendChild(inputName);

formContainer.appendChild(document.createElement("br"));
formContainer.appendChild(document.createElement("br"));


const labelEmail=document.createElement("label");
labelEmail.setAttribute("for","name");
labelEmail.textContent="Email: ";
formContainer.appendChild(labelEmail);

const inputEmail=document.createElement("input");
inputEmail.setAttribute("type","text");
inputEmail.setAttribute("id","Email");
inputEmail.setAttribute("name","name");
inputEmail.setAttribute("required","true");
formContainer.appendChild(inputEmail);

formContainer.appendChild(document.createElement("br"));
formContainer.appendChild(document.createElement("br"));


const labelPhone=document.createElement("label");
labelPhone.setAttribute("for","name");
labelPhone.textContent="Phone: ";
formContainer.appendChild(labelPhone);

const inputPhone=document.createElement("input");
inputPhone.setAttribute("type","text");
inputPhone.setAttribute("id","Phone");
inputPhone.setAttribute("name","name");
inputPhone.setAttribute("required","true");
formContainer.appendChild(inputPhone);

formContainer.appendChild(document.createElement("br"));
formContainer.appendChild(document.createElement("br"));


const labelMessage=document.createElement("label");
labelMessage.setAttribute("for","name");
labelMessage.textContent="Message: ";
formContainer.appendChild(labelMessage);

formContainer.appendChild(document.createElement("br"));


const text=document.createElement("textarea");
text.setAttribute("id","message");
text.setAttribute("name","Message");
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br")); 
formContainer.appendChild(text);
formContainer.appendChild(document.createElement("br"));

const option=document.createElement("label");
option.setAttribute("for","option");
option.textContent="Option: ";
formContainer.appendChild(option);


const select=document.createElement("select");
select.setAttribute("id","option");
select.setAttribute("name","option");
select.setAttribute("required",true);
formContainer.appendChild(select);

const option1=document.createElement("option");
option1.setAttribute("value","option1");
option1.textContent=option1;
select.appendChild(option1);

const option2=document.createElement("option");
option2.setAttribute("value","option2");
option2.textContent=option2;
select.appendChild(option2);

const option3=document.createElement("option");
option3.setAttribute("value","option3");
option3.textContent=option3;
select.appendChild(option3);

formContainer.appendChild(document.createElement("br"));
formContainer.appendChild(document.createElement("br"));

const labelChoose=document.createElement("label");
form.appendChild(document.createElement("br"));
formContainer.appendChild(labelChoose);

const input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("value","radio1");
input.setAttribute("required","true");
formContainer.appendChild( input);

const labelRadio=document.createElement("label");
labelRadio.setAttribute("for","Radio");
labelRadio.textContent="radio1";
formContainer.appendChild(labelRadio);

formContainer.appendChild(document.createElement("br"));


const inputradio=document.createElement("input");
inputradio.setAttribute("type","Radio");
inputradio.setAttribute("name","RadioGroup");
inputradio.setAttribute("value","Radio2");
formContainer.appendChild(inputradio);

const labelradio2=document.createElement("label");
labelradio2.setAttribute("for","Radio");
labelradio2.textContent="radio2";
formContainer.appendChild(labelradio2);

formContainer.appendChild(document.createElement("br"));

const inputradio3=document.createElement("input");
inputradio3.setAttribute("type","Radio");
inputradio3.setAttribute("name","RadioGroup");
inputradio3.setAttribute("value","Radio3");
formContainer.appendChild(inputradio3);

const labelradi3=document.createElement("label");
labelradi3.setAttribute("for","Radio3");
labelradi3.textContent="radio3";
formContainer.appendChild(labelradi3);

formContainer.appendChild(document.createElement("br"));
formContainer.appendChild(document.createElement("br"));


const submit=document.createElement("input");
submit.setAttribute("type","submit");
formContainer.appendChild(submit);