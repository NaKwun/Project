const sasam = "https://covid19.th-stat.com/api/open/today";
$(function () {

    $.get(sasam, function (data) {
        $("#Confirmed").empty();
        const nasam =
        data.Confirmed
      $("#Confirmed").append(nasam);

      $("#Recovered").empty();
        const recov =
        data.Recovered
      $("#Recovered").append(recov);

      $("#Hospitalized").empty();
        const hos =
        data.Hospitalized
      $("#Hospitalized").append(hos);

      $("#Deaths").empty();
      const dead =
      data.Deaths
    $("#Deaths").append(dead);

    $("#UpdateDate").empty();
    const time =
    data.UpdateDate
  $("#UpdateDate").append(time);

  $("#NewConfirmed").empty();
  const New =
  data.NewConfirmed
$("#NewConfirmed").append(New);

$("#NewRecovered").empty();
const Newre =
data.NewRecovered
$("#NewRecovered").append(Newre);

$("#NewHospitalized").empty();
const Newhop =
data.NewHospitalized
$("#NewHospitalized").append(Newhop);

$("#NewDeaths").empty();
const Newde =
data.NewDeaths
$("#NewDeaths").append(Newde);


    });
});