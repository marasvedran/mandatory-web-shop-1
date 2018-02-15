
//object med input??


//button listener to check for validation on form

let continueBtn = document.getElementsByTagName("button")[0];

continueBtn.addEventListener("click", function () {

    if(document.formBeforePay.fname.value === "")
    {
        document.formBeforePay.fname.required = true;
        //alert( "Förnamn måste vara ifyllt!" );
        document.formBeforePay.fname.focus() ;
        return false;
    }
    if( document.formBeforePay.lname.value === "" )
    {
        document.formBeforePay.lname.required = true;
        //alert( "Efternamn måste vara ifyllt!" );
        document.formBeforePay.lname.focus() ;
        return false;
    }

    let emailID = document.formBeforePay.email.value;
    atSign = emailID.indexOf("@");
    dotSign = emailID.lastIndexOf(".");

    if (atSign < 1 || ( dotSign - atSign < 2 ))
    {
        document.formBeforePay.email.required = true;
        //alert("Please enter correct email ID");
        document.formBeforePay.email.focus() ;
        return false;
    }

    if( document.formBeforePay.postnr.value !== "" &&
        document.formBeforePay.postnr.value.length !== 10)
    {
        //document.formBeforePay.phoneNumber.required = false;
        alert( "Inte korrekt ifyllt telefonnummer, hemtelefon eller mobilnummer: 9 -10 nummer" );
        document.formBeforePay.postnr.focus() ;
        return false;
    }

    if( document.formBeforePay.address.value === "" )
    {
        document.formBeforePay.address.required = true;
       // alert( "Stad måste vara ifyllt" );
        return false;
    }

    if( document.formBeforePay.stad.value === "" )
    {
        document.formBeforePay.stad.required = true;
       // alert( "Stad måste vara ifyllt" );
        return false;
    }

    if( document.formBeforePay.postnr.value === "" ||
        isNaN( document.formBeforePay.postnr.value ) ||
        document.formBeforePay.postnr.value.length !== 5 )
    {
        document.formBeforePay.postnr.required = true;
        //alert( "Inte ifyllt postnr, 5 siffrig postnummer." );
        document.formBeforePay.postnr.focus() ;
        return false;
    }


    return( true );

});
//function checkForValidation() {

