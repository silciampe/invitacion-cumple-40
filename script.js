const formulario = document.getElementById('formulario')
    const userName = document.getElementById('nombre')
    const userMensaje = document.getElementById('conQuien')

    const regUserName = /^[A-Za-zÑñÄáÉéÍíÓóÚú\s]+$/;
    

    const enviar = () => {
        
        if (!regUserName.test(userName.value)) {
                alert('El Nombre no es válido');
                userName.focus()
                return false;
            }
        
        return true;                        
    }           
   
        let form = document.getElementById('formulario');

        form.addEventListener('submit', handlesubmit);

        async function handlesubmit(event) {
            event.preventDefault();
            let valido = enviar();
            if (valido == true) {
                let form= new FormData (this);
                let response = await fetch(this.action, {
                method: this.method, 
                body: form,
                headers:{
                    'Accept': 'application/json'
                }
                })
                if (response.ok) {
                    this.reset();
                    alert ('Te esperamos en la joda!!!... sino te la perderás ;)');
                }
            }
            
        }
