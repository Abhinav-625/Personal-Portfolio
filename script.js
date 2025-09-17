emailjs.init("PUBLIC_KEY");

const enter = document.querySelector("#contactEnter");
const Name = document.querySelector("#contactName");
const Email = document.querySelector("#contactEmail");
const Paragraph = document.querySelector("#contactParagraph")

function sendMail() {
    let parms = {
        name: Name.value,
        email: Email.value,
        paragraph: Paragraph.value,
    };
    return emailjs.send("SERVICE_ID", "TEMPLATE_ID", parms);
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

const clear = () => {
    const err1 = document.querySelector("#contactNameError");
    const err2 = document.querySelector("#contactEmailError");
    const err3 = document.querySelector("#contactParagraphError");
    if (Name.value != "" && Email.value != "" && Paragraph.value != "" && isValidEmail(Email.value)) {
        sendMail().then(() => {
            alert("Email Sent!!");
            Name.value = "";
            Email.value = "";
            Paragraph.value = "";
            Paragraph.setAttribute("placeholder", "Thank You for your response...");
            err1.style.display = "none";
            err2.style.display = "none";
            err3.style.display = "none";
        })
            .catch((err) => {
                alert("Failed to send: " + err)
            });
        return;
    }
    if (Name.value === "") {
        err1.innerText = "Name Required!";
        err1.style.display = "block";
    }
    else {
        err1.style.display = "none";
    }
    if (Email.value === "") {
        err2.innerText = "Email required!";
        err2.style.display = "block";
    }
    else if (!isValidEmail(Email.value)) {
        err2.innerText = "Enter a valid Email!";
        err2.style.display = "block";
    }
    else {
        err2.style.display = "none";
    }
    if (Paragraph.value === "") {
        err3.innerText = "Field Required!";
        err3.style.display = "block";
    }
    else {
        err3.style.display = "none";
    }
}


enter.addEventListener("click", clear);
