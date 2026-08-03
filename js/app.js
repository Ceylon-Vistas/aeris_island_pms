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

<div class="row justify-content-center mb-3">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <div class="card shadow-sm">
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
    </div>
</div>`;
        }
    });

    if (!found) {
        html = `<div class="alert alert-secondary">No reservations</div>`;
    }
    $("#reservationList").html(html);
}