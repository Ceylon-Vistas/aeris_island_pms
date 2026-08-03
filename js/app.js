$(function () {
    $("#selectedDate")
        .val(new Date().toISOString().split("T")[0])
        .on("change", showReservations)
        .on("click", function () {
            if (this.showPicker) {
                this.showPicker();
            }
        });
    showReservations();
});

function showReservations() {

    let date = $("#selectedDate").val();
    let html = "";
    let found = false;

    $.each(reservations, function (i, res) {
        if (res.checkIn === date) {
            found = true;
            html += `
<div class="card mb-3 shadow-sm">
<div class="card-body">
<p class="mb-1"><b>Guest Name:</b> ${res.guestName}</p>
<p class="mb-1"><b>Check In  :</b> ${res.checkIn}</p>
<p class="mb-1"><b>Check Out :</b> ${res.checkOut}</p>
<p class="mb-1"><b>No of Nights :</b> ${res.noOfNights}</p>
<p class="mb-1"><b>No of Guests :</b> ${res.noOfGuests}</p>
<p class="mb-1"><b>Room No :</b> ${res.roomNo}</p>
<p class="mb-1"><b>Meal Plan :</b> ${res.mealPlan}</p>
<p class="mb-1"><b>Room Rate (LKR) :</b> ${res.roomRate}</p>
<p class="mb-1"><b>Meal Rate (LKR) :</b> ${res.mealRate}</p>
<p class="mb-1"><b>Advance Paid (LKR) :</b> ${res.advancePaid}</p>
<p class="mb-1"><b>Balance Due (LKR) :</b> ${res.balanceDue}</p>
<p class="mb-1"><b>Special Notes :</b> ${res.specialNotes}</p>
<p class="mb-0"><b>Date :</b> ${res.date}</p>
</div>
</div>`;
        }
    });

    if (!found) {
        html = `<div class="alert alert-secondary">No reservations</div>`;
    }
    $("#reservationList").html(html);
}