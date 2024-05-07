
import { series } from './data';

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('series-list') as HTMLTableSectionElement;
    let totalSeasons = 0;
    
    series.forEach(serie => {
        totalSeasons += serie.seasons;
        const row = tbody.insertRow();
        row.innerHTML = `<td>${serie.id}</td><td>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td>`;
    });

    const averageSeasons = totalSeasons / series.length;
    const tfoot = document.getElementById('average-seasons') as HTMLTableCellElement;
    tfoot.textContent = `Seasons average: ${averageSeasons.toFixed(2)}`;
});
