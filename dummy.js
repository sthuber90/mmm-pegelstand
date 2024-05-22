let out
fetch('https://www.hvz.baden-wuerttemberg.de/js/hvz_peg_stmn.js')
  .then((res) => res.text())
  .then((res) => {
    out = res
  })
let res = out.split('\r\n')
let pegel = res.slice(6, res.length - 4)
pegel
  .map((i) => ({
    data: JSON.parse(
      i.slice(i.indexOf('['), i.indexOf(']') + 1).replaceAll("'", '"')
    ),
  }))
  .filter((i) => i['data'][1] === 'Ebnet')[0]['data']
/* [
  "00389",
  "Ebnet",
  "Dreisam",
  3,
  "88",
  "cm",
  "21.05.2024 23:45 MESZ",
  "10.8",
  "m³/s",
  "21.05.2024 23:45 MESZ",
  0,
  "EBNET",
  1,
  1,
  1,
  1,
  1,
  1,
  3417885,
  5317218,
  7.899736,
  47.988729,
  417843,
  5315531,
  "1.50",
  "257",
  "307.79",
  "NHN+m",
  "24.436",
  "0",
  151,
  199,
  222,
  253,
  274,
  44.3,
  90.4,
  111,
  140,
  164,
  69,
  5.69,
  "",
  31,
  0.33,
  "",
  0,
  "",
  "",
  0,
  "",
  "",
  "",
  "Regionalisierung (Stand: 03.12.2013)",
  "",
  "Regionalisierung (Stand: 01.03.2016)",
  "",
  "Regionalisierung (Stand: 01.03.2016)",
  "",
  "",
  0,
  0,
  1,
  "Regierungspräsidium Freiburg",
  "https://rp.baden-wuerttemberg.de/",
  "",
  "",
  "",
  179,
  70.7,
  1,
  1
]
*/
