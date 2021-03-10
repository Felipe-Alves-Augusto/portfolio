class Site {


    constructor(){

        this.btnMenu = document.getElementById('btnMenu');
        this.mobile = document.getElementById('mobile');
        this.desktop = document.getElementById('desktop');
        this.name = document.getElementById('name');
        this.btnClose = document.getElementById('btnClose');
        this.menuMobile();
        
    }



    menuMobile(){

        this.btnClose.style.display = 'none';

        this.btnClose.addEventListener('click',event=>{

            if(this.mobile.classList.contains('show')){
                this.mobile.classList.add('hide');
                this.mobile.classList.remove('show');
                this.btnClose.style.display = 'none';
                this.btnMenu.style.display = 'block';
                this.name.style.display = 'block';
                this.name.style.top = '50%';
            }


        })

        this.btnMenu.addEventListener('click',event=>{

            if(this.mobile.classList.contains('hide')){

               
                this.mobile.classList.add('show');
                this.mobile.classList.remove('hide');
                this.name.style.display = 'none';
                this.btnMenu.style.display = 'none';
                this.btnClose.style.display = 'block';
                

            } else{
                
                this.mobile.classList.add('hide');
                this.mobile.classList.remove('show');
                this.name.style.display = 'block';
                this.name.style.top = "50%";
                
            }

            

        })

    }

}