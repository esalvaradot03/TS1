import { series } from './data';
document.addEventListener('DOMContentLoaded', function () {
    var tbody = document.getElementById('series-list');
    var totalSeasons = 0;
    series.forEach(function (serie) {
        totalSeasons += serie.seasons;
        var row = tbody.insertRow();
        row.innerHTML = "<td>".concat(serie.id, "</td><td>").concat(serie.name, "</td><td>").concat(serie.channel, "</td><td>").concat(serie.seasons, "</td>");
    });
    var averageSeasons = totalSeasons / series.length;
    var tfoot = document.getElementById('average-seasons');
    tfoot.textContent = "Seasons average: ".concat(averageSeasons.toFixed(2));
});
