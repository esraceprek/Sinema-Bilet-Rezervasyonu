const container= document.querySelector('.container');

const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats =document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
     
        e.target.classList.toggle('selected');
        calculateTotal();
     
    }
});

select.addEventListener('change',function(e){
    calculateTotal();

});

function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected');
     
    const selectedSeatArr =[];
    const seatArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatArr.push(seat);
    });

    seats.forEach(function(seat){
        seatArr.push(push);
    });

    let selectedSeatIndex = selectedSeatArr.map(function(seat){
        return selectedSeatArr.indexOf(seat);
    });


    let   selectedSeatCount = selectedSeats.length;
        let price =select.value;
     count.innerText=selectedSeatCount;
     amount.innerText = selectedSeatCount * price;
     
function getFromLocalStorage(){
 const selectedSeats = JSON.parse(localStorage.getItem('selectedMovieIndex'));

 if(selectedSeats != null && selectedSeats > 0){
     seats.forEach(function(seat,index){
         if(selectedSeats.indexOf(index) > -1){
             seat.classList.add('selected');
         }
     });
 }
}


     function saveToLocalStorage(index){
         localStorage.setItem('selectedSeats',JSON.stringify(index));
         localStorage.setItem('selectedMovieIndex',select.selectedIndex);
     }
}