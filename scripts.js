// TODO: change registration link; committe list; partners; program

const edition = "13th";
const year = 2024;
const month = "July";
const days = "15-19";
const place = "Enschede, Netherlands";
const registrationLink = "https://www.utwente.nl/en/eemcs/fois2024/";
const uploadPapersLink = "https://easychair.org/my/conference?conf=fois2024"
const JOWOlink = "http://iaoa.org/jowo/";

const importantDates = 
'<li> Paper submission deadline: <strike>24 April 2024</strike> 02 May 2024 </li>\n' +
'<li> Notification of acceptance: <strike> 22 May 2024</strike> 29 May 2024 </li>\n' +
'<li> Author registration: 03 June 2024 </li>\n' +
'<li> JOWO workshop days co-located with FOIS 2024 (exact FOMI date TBD): 15-17 July 2024 </li>\n' +
'<li> Camera-ready submission (post-conference proceedings): 30 July 2024 </li>\n'
const events = [ // Array of date and text pairs
    // { date: "July 2, 2021", text: "The deadline for submission of papers for FOMI2021 has been extend until 9. July 2021." },
    // { date: "May 27, 2021", text: "We partnered with the Industrial Ontologies Foundry (IOF) to join efforts and present its current activities as part of the FOMI 2021 workshop." },
    // { date: "May 27, 2021", text: "We partnered with the OntoCommons project to join efforts and present a special session on OntoCommons activities as part of the FOMI 2021 workshop." },
    { date: "Gen 15, 2024", text: "FOMI 2024 web site is public." },
    { date: "Feb 02, 2024", text: "Updated call dates." },
];
const organizers = [
    { name: "Francesco Compagno", email: "francesco.compagno@unitn.it" },
    { name: "Anna Fensel", email: "anna.fensel@wur.nl" },
    { name: "Walter Terkaj", email: "walter.terkaj@stiima.cnr.it" },
]
const committeeList = 

'<li>Alessandro Oltramari, Bosch, USA</li>' +
'<li>Alessandro Umbrico, CNR-ISTC, Italy</li>' +
'<li>Ana Correia, ATB-Bremen, Germany</li>' +
'<li>Arkopaul Sarkar, INP-ENIT, University of Toulouse, France</li>' +
'<li>Bahar Aameri, University of Toronto, Canada</li>' +
'<li>Boonserm Kulvatunyou, National Institute of Standards and Technology, USA</li>' +
'<li>Daniele Spoladore, CNR-STIIMA, Italy</li>' +
'<li>Elisa Negri, Politecnico di Milano, Italy</li>' +
'<li>Emilio Sanfilippo, CNR-ISTC, Italy</li>' +
'<li>Farhad Ameri, Arizona State University, USA</li>' +
'<li>Francesco Zaccarini, University of Bologna, Italy</li>' +
'<li>Hervé Panetto, University of Lorraine, France</li>' +
'<li>Laura Daniele, TNO, Netherlands</li>' +
'<li>Laure Vieu, IRIT-CNRS, France</li>' +
'<li>Lorenzo Solano, Polytechnic University of Valencia, Spain</li>' +
'<li>Marcela Vegetti, CONICET, Argentina</li>' +
'<li>María Poveda, Universidad Politécnica de Madrid, Spain</li>' +
'<li>Peter Klein, Fraunhofer ITWM, Germany</li>' +
'<li>Pieter Pauwels, Eindhoven University of Technology, Netherlands</li>' +
'<li>Rebeca Arista, Airbus, France</li>' +
'<li>Riichiro Mizoguchi, Japan Advanced Institute of Science and Technology, Japan</li>' +
'<li>Silvia Chiacchiera, STFC UKRI, UK</li>' 

function createTable() {
    var tableHTML = '';

    events.forEach(function (event) {
        tableHTML += '<tr><td>' + event.date + '</td><td>' + event.text + '</td></tr>';
    });

    return tableHTML;
}
function createOrganizersList() {
    var list = '';

    organizers.forEach(function (organizer) {
        list += '<li>' + organizer.name + '</li><ul><li> Email: <a href="mailto:' + organizer.email + '">'+organizer.email+'</a></ul>';
    });

    return list;
}

function pprint(variable) { // wrapper for the deprecated document.write
    document.write(variable);
} 

const newsTable = createTable();
const organizersList = createOrganizersList();
const date = days + " "+ month + " " + year;
const title = edition + " International Workshop on Formal Ontologies meet Industry";
