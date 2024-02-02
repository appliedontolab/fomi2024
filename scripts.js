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
'<li> 24 April 2024 - Paper submission deadline.</li>\n' +
'<li> 22 May 2024 - Notification of acceptance.</li>\n' +
'<li> 15-19 July 2024 - JOWO workshop days co-located with FOIS 2024 (exact FOMI date TBD).</li>\n' +
'<li> 30 July 2024 - Camera-ready submission (post-conference proceedings).</li>\n'
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
        '<li> [to be determined] </li'
    // '<li>Bahar Aameri, University of Toronto, Canada</li>\n' +
    // '<li>Farhad Ameri, Texas State University, USA</li>\n' +
    // '<li>Rebeca Arista Rangel, Airbus, Spain</li>\n' +
    // '<li>Stefano Borgo, ISTC-CNR, Italy</li>\n' +
    // '<li>Hyunmin Cheong, Autodesk Research, Canada</li>\n' +
    // '<li>Michael Gruninger, University of Toronto, Canada</li>\n' +
    // '<li>Eeva J&#228;rvenp&#228;&#228;, Tampere University of Technology, Finland</li>\n' +
    // '<li>Hedi Karray, ENIT, France</li>\n' +
    // '<li>Dimitris Kiritsis, &#201;cole Polytechnique F&#233;d&#233;rale de Lausanne, Switzerland</li>\n' +
    // '<li>David Koonce, Ohio University, USA</li>\n' +
    // '<li>Boonserm Kulvatunyou, National Institute of Standards and Technology, USA</li>\n' +
    // '<li>Riichiro Mizoguchi, Japan Advanced Institute of Science and Technology, Japan</li>\n' +
    // '<li>Dimitris Mourtzis, University of Patras, Greece</li>\n' +
    // '<li>Elisa Negri, Politecnico di Milano, Italy</li>\n' +
    // '<li>Herv&#233; Panetto, University of Lorraine, France</li>\n' +
    // '<li>Jos&#233; Parente De Oliveira, Technological Institute of Aeronautics, Brazil</li>\n' +
    // '<li>Pieter Pauwels, Eindhoven University of Technology, Netherlands</li>\n' +
    // '<li>Mar&#237;a Poveda-Villalon, Universidad Polit&#233;cnica de Madrid, Spain</li>\n' +
    // '<li>Tiago Prince Sales, Free University of Bozen-Bolzano, Italy</li>\n' +
    // '<li>Pedro Rosado Castellano, Universitat Jaume I de Castell&#243;, Spain</li>\n' +
    // '<li>Emilio Sanfilippo, ISTC-CNR, Italy</li>\n' +
    // '<li>Arkopaul Sarkar, ENIT, France</li>\n' +
    // '<li>Georg Schneider, Schaeffler, Germany</li>\n' +
    // '<li>Lorenzo Solano, Polytechnic University of Valencia, Spain</li>\n' +
    // '<li>Daniele Spoladore, STIIMA-CNR, Italy</li>\n' +
    // '<li>Amanda Vizedom, Credit Suisse, Switzerland</li>\n' +
    // '<li>Bob Young, Loughborough University, UK</li>\n'

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
