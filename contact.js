const translations = {
    english: {
        title: "Contact Us",
        dateName:"Name",
        dateEmail:"E-mail",
        dateMessage:"Message",
        buttonSubmit:"SUBMIT"

    },
    French: {
        title: "Contactez-nous",
        dateName:"Nom",
        dateEmail:"E-mail",
        dateMessage:"Message",
        buttonSubmit:"SOUMETTRE"
    },
    georgian: {
        title: "შესვლა",
        dateName:"სახელი",
        dateEmail:"მეილი",
        dateMessage:"შეტყობინება",
        buttonSubmit:"დაკავშირება"
        
    }
};

function changeLanguage(language) {
    const { title,dateName,dateEmail,dateMessage,buttonSubmit} = translations[language];
    document.getElementById('title').textContent = title;
    document.getElementById('dateName').textContent = dateName;
    document.getElementById('dateEmail').textContent = dateEmail;
    document.getElementById('dateMessage').textContent = dateMessage;
    document.getElementById('buttonSubmit').textContent = buttonSubmit;
    
   
}