//Handling errors with try/catch
function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable=true;

        if(isServiceAvailable){
            resolve("Success!Customer Profile loaded.");
        }else{
            reject("Unsuccessfull!! Customer Profile unavailable.");
        }
        });
    }

    async function showCustomerProfile(){
        try{
            const message=await loadCustomerProfile();
            console.log(message);
        }catch(error){
            console.log("Error:",error);
        }
    }
    showCustomerProfile();
