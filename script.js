const tableRows = document.querySelectorAll('.table-row')
const diagram = document.querySelectorAll('.diagram')
const parent = document.getElementById('container-1').closest('tr')


tableRows.forEach(elem => {
    elem.addEventListener('click', e => {
        console.log(elem.getAttribute('id'));
        diagram.forEach(elemDiagram => {
            if(elemDiagram.getAttribute('data-id') === elem.getAttribute('id')){
                elemDiagram.classList.toggle('active')
                
            }
        })
    })
})

for(let i = 0; i < tableRows.length; i++){
    let valueOne = tableRows[i].querySelector('.value-1').innerHTML
    let valueTwo = tableRows[i].querySelector('.value-2').innerHTML
    let valueThree = tableRows[i].querySelector('.value-3').innerHTML
    valueOne = valueOne.replace(/\s+/g, "")
    valueTwo = valueTwo.replace(/\s+/g, "")
    valueThree = valueThree.replace(/\s+/g, "")

    

    document.addEventListener('DOMContentLoaded', function () {
        const chart = Highcharts.chart(`container-${i}`, {
            chart: {
                type: 'line',
            },
            
            title: {
                enabled: true,
            },
            subtitle: {
                enabled: true,
            },
            xAxis: {
                reversed: false,
                title: {
                    enabled: false,
                    
                },
            },
            yAxis: {
                title: {
                    enabled: false,
                    
                },      
                tooltip: {
                    crosshairs: true,
                    shared: true
                },    
              lineWidth: 1
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                spline: {
                    marker: {
                        enable: false
                    }
                }
            },
            series: [{
                
                data: [
                    Number(valueOne), Number(valueTwo), Number(valueThree)
                ],
                color: "green",
            },]
        });
        
    });
}

let procentArray = [4,0,0,0,44,50,-9,0,-6,-6]

for(let n = 0; n < tableRows.length; n++){
    
    if(procentArray[n] > 0){
        tableRows[n].querySelector('.value-2').innerHTML += `<span class='procent-green'> ${procentArray[n]}%</span>`
        tableRows[n].querySelector('.value-2').classList.add('green')
    }
    else if(procentArray[n] === 0){
        tableRows[n].querySelector('.value-2').innerHTML += `<span class='procent-grey'> ${procentArray[n]}%</span>`
    }
    else{
        tableRows[n].querySelector('.value-2').innerHTML += `<span class='procent-red'> ${procentArray[n]}%</span>`
        tableRows[n].querySelector('.value-2').classList.add('red')
    }
}


