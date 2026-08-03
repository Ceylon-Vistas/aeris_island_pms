$(function(){

    $("#selectedDate").val("2026-08-03");

    showReservations();

    $("#selectedDate").on("change",function(){

        showReservations();

    });

});

function showReservations(){

    let date=$("#selectedDate").val();

    let html="";

    let found=false;

    $.each(reservations,function(i,res){

        if(res.checkIn===date){

            found=true;

            html+=`

<div class="card mb-3 shadow-sm">

<div class="card-body">

<h5>${res.guestName}</h5>

<p class="mb-1">
<b>Check In :</b> ${res.checkIn}
</p>

<p class="mb-1">
<b>Check Out :</b> ${res.checkOut}
</p>

<p class="mb-0">
<b>Room Type :</b> ${res.roomType}
</p>

</div>

</div>

`;

        }

    });

    if(!found){

        html=`

<div class="alert alert-secondary">

No reservations.

</div>

`;

    }

    $("#reservationList").html(html);

}