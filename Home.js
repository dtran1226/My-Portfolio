var slideIndex = 1;
var colorFlag = 0;
// Starts showing slides automatically
autoSlide();
// Calls changeColor() after 1 second
setTimeout(changeColor, 1000);

// Changes 'Know More' color between 'white' and 'orchid' colors
function changeColor() {
    var knowMore = document.getElementsByClassName("knowMore")[0];
    if (colorFlag == 0) {
        knowMore.style.color = "white";
        colorFlag = 1;
    } else {
        knowMore.style.color = "orchid";
        colorFlag = 0;
    }
    // Changes 'Know More' clickable text color every second
    setTimeout(changeColor, 1000);
}

// Shows previous or next slide when clicking on Prev/Next buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Shows suitable slide when clicking on dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    // Makes sure slides are switched between first and last slides	
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    // Hides all slides first
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Inactives all dots first
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Displays a specific slide and dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Automatically changes slides by calling showSlides() every 4 seconds
function autoSlide() {
    showSlides(slideIndex);
    slideIndex++;
    setTimeout(autoSlide, 4000);
}

// Scrolls the view to a specific section to see its content
function scrollView(a) {
    var elmnt = document.getElementById(a);
    elmnt.scrollIntoView();
    // Needs to adjust a bit based on different window sizes
    var scrolledY = window.scrollY;
	if (window.innerWidth >= 1000) {
		window.scroll(0, scrolledY-208); 
	} else if (window.innerWidth >= 367) {
		if (window.innerHeight >= 1000) {
			window.scroll(0, scrolledY-252);
		} else if (window.innerHeight >= 700) {
			window.scroll(0, scrolledY-250);
		} else {
			window.scroll(0, scrolledY-248);
		}
	} else if (window.innerWidth >= 160){
		window.scroll(0, scrolledY-200);
	} else {
		window.scroll(0, scrolledY-218);
	}
}

// Shows suitable content when clicking on a sub-section of Profile section
function proClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[0];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
    switch (a) {
        case 1:
            h3.innerHTML = "Address";
            p.innerHTML = "200 Old Carriage, Kitchener, ON (N2P 0C7)";
            break;
        case 2:
            h3.innerHTML = "Phone";
            p.innerHTML = "(226) 898-3262";
            break;
        case 3:
            h3.innerHTML = "Email";
            p.innerHTML = "<a href='mailto: thuctdt@gmail.com'>&nbsp;thuctdt@gmail.com</a>";
            break;
        case 4:
            h3.innerHTML = "LinkedIn";
            p.innerHTML = "<a href='https://www.linkedin.com/in/dang-tri-thuc-tran-bb0637105/'>Dang Tri Thuc Tran</a>";
            break;
	case 5:
            h3.innerHTML = "GitHub";
            p.innerHTML = "<a href='https://github.com/dtran1226'>dtran1226</a>";
            break;
        default:
            break;
    }
}
// Shows suitable content when clicking on a sub-section of Objective section
function objClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[1];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
    switch (a) {
		case 1:
            h3.innerHTML = "Objective";
            p.innerHTML = "A new grad from the postgraduate Mobile Solutions Development program at Conestoga College with 1 year of working experience in Software Development looking for a full-time job in software-related fields starting right away.";
            break;
        default:
            break;
    }
}
// Shows suitable content when clicking on a sub-section of Skills section
function skiClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[2];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
    switch (a) {
		case 1:
            h3.innerHTML = "Programming Skills";
            p.innerHTML = "<b><u style='color:blue'>Application development:</u></b>&nbspC, C++, C#, Java, Android, iOS (Swift), Spring MVC, Hibernate, Servlets, Web Services, JUnit, NUnit.<br /><br /><b><u style='color:blue'>Website development:</u></b>&nbspHTML, CSS, JavaScript, Bootstrap, JQuery, AngularJS, NodeJS, XML, JSON.<br /><br /><b><u style='color:blue'>System design:</u></b>&nbspUML, Design Patterns, ERD.<br /><br /><b><u style='color:blue'>Database processing:</u></b>&nbspMicrosoft SQL Server, MySQL, MongoDB, SQLite.";
            break;
		case 2:
            h3.innerHTML = "Tools";
            p.innerHTML = "Visual Studio, NetBeans, Eclipse, IntelliJ, Android Studio, XCode, Microsoft SQL Server, MySQL Workbench, SVN, GitHub, GitKraren, VSCode, Trello, Microsoft Project, JIRA.";
            break;
		case 3:
            h3.innerHTML = "Development Methodologies";
            p.innerHTML = "Waterfall, Scrum (Agile).";
            break;
        default:
            break;
    }
}
// Shows suitable content when clicking on a sub-section of Experience section
function expClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[3];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
	var div = pageCont.getElementsByTagName("div")[0]
    switch (a) {
		case 1:
            h3.innerHTML = "AdNovum";
			div.innerHTML = "<span id='title'>Junior Software Developer</span><span id='period'>Oct 2015 – Feb 2016</span>"
            p.innerHTML = "Part of a team of colleagues from Switzerland, Hungary, Singapore and Vietnam tasked with developing a banking application (using core Java, based on Eclipse RCP) for the biggest bank in Switzerland, which helps to boost customers’ investment to the bank.<br /><br />Frequently joined in meetings with colleagues and experts from different countries to discuss and find out solutions for existing problems.";
            break;
		case 2:
            h3.innerHTML = "FPT Software";
			div.innerHTML = "<span id='title'>Software Developer (Intern)</span><span id='period'>Jan 2014 – Aug 2014</span>"
            p.innerHTML = "<b><u style='color:blue'>AMWEB:</u></b>&nbspTested and fixed bugs for TOSHIBA’s content management website in HTML, CSS, JavaScript to make sure the website works properly.<br /><br /><b><u style='color:blue'>DPET:</u></b>&nbspDesigned and built the Android application for Japanese customers from scratch, which is mainly based on voice and face recognition to help customers and their pets remotely and virtually interacting to each other.<br /><br /><b><u style='color:blue'>CPS:</u></b>&nbspMigrated a bus line management website for FUSO corporation using Java, HTML, CSS and JavaScript from the existing C++ application to improve the way users access the services.";
            break; 
        default:
            break;
    }
}
// Shows suitable content when clicking on a sub-section of Education section
function eduClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[4];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
	var div = pageCont.getElementsByTagName("div")[0]
    switch (a) {
		case 1:
            h3.innerHTML = "Conestoga College (Kitchener, ON)";
			div.innerHTML = "<span id='title'>Mobile Solutions Development (Postgraduate)</span><span id='period'>Sep 2017 – Apr 2019</span>"
            p.innerHTML = "<b><u style='color:blue'>Courses:</u></b>&nbspC# Programming, UI Design, System Design and Development, Web Design, Technology Infrastructure, Android, Database Management, Web Technologies, Mobile Design, Software Quality Assurance, iOS development, Design Patterns, Computer and Application Security.<br /><br /><b><u style='color:blue'>Certificates:</u></b>&nbspGraduation with Distinction, Dean’s Honour List";
            break;
		case 2:
            h3.innerHTML = "FPT University (Ho Chi Minh, Vietnam)";
			div.innerHTML = "<span id='title'>Software Engineering (Bachelor)</span><span id='period'>Sep 2011 – Sep 2015</span>"
            p.innerHTML = "<b><u style='color:blue'>Courses:</u></b>&nbspCore Java, Advanced Java, C# .NET, Data Structure and Algorithms, Object Oriented Paradigm, Advanced Database, Software Architect and Design, Web Development, Operating System, Advanced Math, Discrete Math, Statistic and Probability, Software Requirements, Software Quality and Testing, Human Computer, Interaction, Project Management, Computer Network, Cloud Computing.<br /><br /><b><u style='color:blue'>Certificates:</u></b>&nbspEXCELLENT (1 semester), GOOD student certificate (3 semesters), Highest Grade Point certificate in Advanced Math, Online Programming Foundations with JavaScript, HTML and CSS in Coursera (from Duke University)<br /><br /><b><u style='color:blue'>Capstone Project (Danang Utility Map):</u></b>&nbspAnalyzed, designed, implemented, tested and managed a Google Map-based responsive website which helps tourists discover Danang city in the easiest, fastest and most enjoyable way."
            break; 
        default:
            break;
    }
}
// Shows suitable content when clicking on a sub-section of Activities section
function actiClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[5];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
    switch (a) {
		case 1:
            h3.innerHTML = "Self-Study";
            p.innerHTML = "Self-study and research to learn new skills and knowledge to improve expertise, such as Android, Swift, AngularJS, NodeJS, JQuery, Bootstrap, CSS, etc.";
            break;
		case 2:
            h3.innerHTML = "Volunteer";
            p.innerHTML = "Worked as a volunteer in Conestoga College to support new students with their first steps in Canada.<br /><br />Joined in Blood Donation Day twice during studying and working period."
            break;
		case 3:
            h3.innerHTML = "Team-Building";
            p.innerHTML = "Took part in sports (handball, football, table-tennis, billiards) and entertainment (dancing, singing) activities of former companies during working time."
            break;
		case 4:
            h3.innerHTML = "Hobbies";
            p.innerHTML = "Love travelling and discovering new places around the world.<br /><br />Enjoying listening to music and self-performing various genres of songs."
            break; 
        default:
            break;
    }
}