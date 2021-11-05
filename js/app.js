function Checked(e) {
   const ident = e.target.id;


   switch (ident) {
      case 'checkbox-checked-1':
         document.getElementById('type__section-1').classList.toggle('type__section-active');

         break;

      case 'checkbox-checked-2':
         document.getElementById('type__section-2').classList.toggle('type__section-active');
         break;

      
      case 'checkbox-checked-3':
         document.getElementById('type__section-3').classList.toggle('type__section-active');
         break;
      default:
         break;
   }
}
document.getElementById('cat__inner').addEventListener('click' , Checked);


document.getElementById('nav').addEventListener('click' , function (e) {
   e.preventDefault();
   const ident = e.target.id;
   let ob;
   if (ident === 'prod__scroll') {
      ob = document.getElementById('cat');
      ob.scrollIntoView(top);
   }
});

document.getElementById('scroll__down').addEventListener('click' , function (e) {
   e.preventDefault();

   document.querySelector('footer').scrollIntoView({
      behavior: 'smooth',
   });
});








