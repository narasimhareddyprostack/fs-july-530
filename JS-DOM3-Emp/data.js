let employees = [{ "id": 1, "name": "Jacques", "sal": "€24360,80" },
{ "id": 2, "name": "Paule", "sal": "€49214,89" },
{ "id": 3, "name": "Hayward", "sal": "€26104,96" },
{ "id": 4, "name": "Pedro", "sal": "€8495,30" },
{ "id": 5, "name": "Ruthy", "sal": "€10066,31" },
{ "id": 6, "name": "Far", "sal": "€18152,13" },
{ "id": 7, "name": "Lyndell", "sal": "€39545,53" },
{ "id": 8, "name": "Nevin", "sal": "€23367,06" },
{ "id": 9, "name": "Filippa", "sal": "€30247,79" },
{ "id": 10, "name": "Luce", "sal": "€20896,02" },
{ "id": 11, "name": "Lev", "sal": "€6729,21" },
{ "id": 12, "name": "Bianka", "sal": "€43518,25" },
{ "id": 13, "name": "Kinnie", "sal": "€13249,24" },
{ "id": 14, "name": "Lilla", "sal": "€16086,31" },
{ "id": 15, "name": "Zeke", "sal": "€46789,49" },
{ "id": 16, "name": "Anabal", "sal": "€12269,77" },
{ "id": 17, "name": "Lizzie", "sal": "€15907,68" },
{ "id": 18, "name": "Georgetta", "sal": "€17264,18" },
{ "id": 19, "name": "Chiquia", "sal": "€33516,93" },
{ "id": 20, "name": "Alida", "sal": "€16010,37" },
{ "id": 21, "name": "Charissa", "sal": "€37839,66" },
{ "id": 22, "name": "Brucie", "sal": "€17774,69" },
{ "id": 23, "name": "Rollie", "sal": "€43274,57" },
{ "id": 24, "name": "Wendeline", "sal": "€6395,77" },
{ "id": 25, "name": "Yulma", "sal": "€47675,13" },
{ "id": 26, "name": "Jenny", "sal": "€12769,36" },
{ "id": 27, "name": "Orland", "sal": "€38895,07" },
{ "id": 28, "name": "Abigail", "sal": "€43258,46" },
{ "id": 29, "name": "Vin", "sal": "€39720,30" },
{ "id": 30, "name": "Emera", "sal": "€28056,49" },
{ "id": 31, "name": "Claudina", "sal": "€46076,50" },
{ "id": 32, "name": "Kara", "sal": "€31684,44" },
{ "id": 33, "name": "Corenda", "sal": "€35145,84" },
{ "id": 34, "name": "Sydney", "sal": "€43278,04" },
{ "id": 35, "name": "Inga", "sal": "€7224,52" },
{ "id": 36, "name": "Munroe", "sal": "€8395,41" },
{ "id": 37, "name": "Philomena", "sal": "€45250,07" },
{ "id": 38, "name": "Jillayne", "sal": "€23811,47" },
{ "id": 39, "name": "Rafi", "sal": "€16034,61" },
{ "id": 40, "name": "Esma", "sal": "€25702,37" },
{ "id": 41, "name": "Kit", "sal": "€25483,48" },
{ "id": 42, "name": "Irena", "sal": "€37692,10" },
{ "id": 43, "name": "Jimmie", "sal": "€27486,67" },
{ "id": 44, "name": "Vikky", "sal": "€43864,14" },
{ "id": 45, "name": "Mahmoud", "sal": "€41620,33" },
{ "id": 46, "name": "Lizabeth", "sal": "€13375,11" },
{ "id": 47, "name": "Barr", "sal": "€34829,74" },
{ "id": 48, "name": "Marsh", "sal": "€22687,96" },
{ "id": 49, "name": "Lark", "sal": "€24864,80" },
{ "id": 50, "name": "Javier", "sal": "€22375,67" }]
function getEmployees() {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name.toUpperCase()}</td>
                            <td>${emp.sal.slice(1)}</td>
                        </tr>`
    }
    document.getElementById('tbody_Data').innerHTML = rows
}