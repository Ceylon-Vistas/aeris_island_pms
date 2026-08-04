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

    let selectedDate = new Date(date);
    let runningTotal = 0;

    $.each(reservations, function (i, res) {
        if (new Date(res.checkIn) <= selectedDate) {
            runningTotal += Number(res.roomRate) + Number(res.others);
        }
    });

    $.each(reservations, function (i, res) {
        if (res.checkIn === date) {
            found = true;
            html += `
<div class="card mb-3 shadow-sm">
<div class="card-body">
<p class="mb-1"><b style="display:inline-block;width:153px;">Guest Name</b>: ${res.guestName}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Check In</b>: ${res.checkIn}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Check Out</b>: ${res.checkOut}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">No of Nights</b>: ${res.noOfNights}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">No of Guests</b>: ${res.noOfGuests}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Room No</b>: ${res.roomNo}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Meal Plan</b>: ${res.mealPlan}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Room Rate (LKR)</b>: ${res.roomRate.toLocaleString()}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Advance Paid (LKR)</b>: ${res.advancePaid.toLocaleString()}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Balance Due (LKR)</b>: ${res.balanceDue.toLocaleString()}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Special Notes</b>: ${res.specialNotes}</p>
<p class="mb-0"><b style="display:inline-block;width:153px;">Date</b>: ${res.date}</p>
<p class="mb-1"><b style="display:inline-block;width:153px;">Others (LKR)</b>: ${res.others.toLocaleString()}</p>
</div>
</div>`;
        }
    });

    if (!found) {
        html = `<div class="alert alert-secondary">No reservations</div>`;
    }

    html += `
<h4 class="text-center mt-4">LKR ${runningTotal.toLocaleString()}</h4>
</div>
</div>`;

    $("#reservationList").html(html);
}