function init () {
      const takeOff = document.getElementById (“takeoff”);

      takeOff.addEventListener(‘click’,()=>{
      let result = window.confirm ("Confirm that the shuttle is ready for takeoff.");
      }

})
}

window.addEventListener (“load”, init);

