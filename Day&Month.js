let $date=$1;
let $month=$2;
console.log(" date / month ");
if ([[ $month == 3 && $date >= 20 && $date <= 31 ]] || [[ $month == 4 && $date <= 30 && $date >= 1 ]] 
|| [[ $month == 5 && $date <= 31 && $date >= 1 ]] || [[ $month == 6 && $date <= 20 && $date >= 1 ]])

{
    console.log( "True");

}
else
{
    console.log("False");
}