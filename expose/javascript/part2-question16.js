let statistics = {
    redCars : 21,
    blueCars: 45,
    greenCars: 12
}

for(property in statistics)
{
    if(property[0]=='r' || statistics[property] % 2 == 1)
    {
        console.log(statistics[property]);
    }
}