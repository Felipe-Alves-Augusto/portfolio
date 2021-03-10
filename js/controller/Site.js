class Site {


    constructor(){

        this.btnMenu = document.getElementById('btnMenu');
        this.mobile = document.getElementById('mobile');
        this.desktop = document.getElementById('desktop');
        this.name = document.getElementById('name');
        this.menuMobile();
        
    }



    menuMobile(){


        this.btnMenu.addEventListener('click',event=>{

            if(this.mobile.classList.contains('hide')){

                this.mobile.classList.add('show');
                this.mobile.classList.remove('hide');
                this.name.style.display = 'none';
                

            } else{
                
                this.mobile.classList.add('hide');
                this.mobile.classList.remove('show');
                this.name.style.display = 'block';
                this.name.style.top = "50%";
                
            }

            

        })

    }

}