let ArrData = [];
let i;
for (i=1; i<=5; i++)
{

    let RanVal = Math.floor(Math.random()*900 +100);
    ArrData[i] = RanVal;
    console.log(ArrData[i])
}
let MaxValue = Math.max( ArrData);
let MinValue = Math.min(ArrData);
console.log(MaxValue);
console.log(MinValue);
