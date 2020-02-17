var slideIndex = 1;
var colorFlag = 0;
autoSlide();
setTimeout(changeColor, 1000);

function changeColor() {
    var knowMore = document.getElementsByClassName("knowMore")[0];
    if (colorFlag == 0) {
        knowMore.style.color = "white";
        colorFlag = 1;
    } else {
        knowMore.style.color = "orchid";
        colorFlag = 0;
    }
    setTimeout(changeColor, 1000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function autoSlide() {
    showSlides(slideIndex);
    slideIndex++;
    setTimeout(autoSlide, 4000);
}

function scrollView(a) {
    var elmnt = document.getElementById(a);
    elmnt.scrollIntoView();
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
            p.innerHTML = "<a href='https://www.linkedin.com/in/danny-tran-bb0637105/'>Danny Tran</a>";
            break;
		case 5:
            h3.innerHTML = "GitHub";
            p.innerHTML = "<a href='https://github.com/dtran1226'>dtran1226</a>";
            break;
        default:
            break;
    }
}

function objClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[1];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
    switch (a) {
		case 1:
            h3.innerHTML = "Objective";
            p.innerHTML = "A new grad from the postgraduate Mobile Solutions Development program at Conestoga College, with 1 year of work experience at 2 software companies, looking for a full-time job in software-related fields starting as soon as possible.";
            break;
        default:
            break;
    }
}

function skiClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[2];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
    switch (a) {
		case 1:
            h3.innerHTML = "Programming Skills";
            p.innerHTML = "<b><u style='color:blue'>Application development:</u></b>&nbsp<b>Java, C#</b>, Android, iOS (Swift), C, C++, <b>Spring Boot</b>, Servlets, Hibernate, JSP, <b>JUnit, NUnit</b>, WPF, Swing, Eclipse RCP.<br></br><b><u style='color:blue'>Website development:</u></b>&nbsp<b>HTML, CSS, JavaScript</b>, Bootstrap, <b>jQuery</b>, AngularJS, NodeJS, <b>JSON, XML</b>, Web Services (<b>REST</b>, SOAP).<br></br><b><u style='color:blue'>System design:</u></b>&nbspUML, Design Patterns, <b>MVC</b>, ERD.<br></br><b><u style='color:blue'>Database:</u></b>&nbsp<b>Microsoft SQL Server, MySQL</b>, MongoDB, SQLite, Oracle DB, DB2.";
            break;
		case 2:
            h3.innerHTML = "Tools";
            p.innerHTML = "Android Studio, <b>Visual Studio, Eclipse, IntelliJ</b>, XCode, SVN, Git, GitKraken, VSCode, Trello, Microsoft Project, JIRA, Jenkins, Collaborator, Maven, Gradle.";
            break;
		case 3:
            h3.innerHTML = "Software Development Methodologies";
            p.innerHTML = "Waterfall, <b>Scrum (Agile)</b>.";
            break;
		case 4:
            h3.innerHTML = "Operating Systems";
            p.innerHTML = "Linux, <b>Windows</b>.";
            break;	
        default:
            break;
    }
}

function expClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[3];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
	var div = pageCont.getElementsByTagName("div")[0]
    switch (a) {
		case 1:
            h3.innerHTML = "AdNovum";
			div.innerHTML = "<span id='title'>Junior Software Developer</span><span id='period'>Oct 2015 – Feb 2016</span>";
            p.innerHTML = "Enhanced customers’ experience by designing and building an automated investment management application for a global leader in wealth management (UBS) with the cooperation of the software development team of 15 people from 4 countries via phone, video calls and in-person meetings.<br></br>Boosted customers’ investments to the bank up to 15% by creating personalized investment options from analyzing their collected data.<br></br><b><u>Skills:</u></b><br></br>Eclipse RCP, Spring, SOAP, JPA, Java, Oracle DB, JUnit, GIT, Jenkins, JIRA, Collaborator, Linux, Maven.";
            break;
		case 2:
            h3.innerHTML = "FPT Software";
			div.innerHTML = "<span id='title'>Software Developer (Intern)</span><span id='period'>Jan 2014 – Aug 2014</span>";
            p.innerHTML = "<b><u>Projects:</u></b><br></br><b><u style='color:blue'>DPET:</u></b>&nbspSelf-studied to design and develop an Android application for Japanese customers from scratch, which utilizes speech and facial recognition to help customers and their pets to remotely and virtually interact to each other. The application is then successfully presented to the client after 4 months.<br></br><b><u style='color:blue'>AMWEB:</u></b>&nbspEnsured the TOSHIBA’s content management website is fully operational through vigorously testing and fixing bugs by utilizing HTML, CSS, and JavaScript.<br></br><b><u style='color:blue'>CPS:</u></b>&nbspImproved the user experience when accessing the bus services from FUSO corporation by migrating the existing C++ bus line management application into a modern website.<br></br><b><u>Skills:</u></b><br></br>Java, JSP, Hibernate, JUnit, Android, DB2, SQLite, HTML, CSS, JavaScript, Maven, Gradle, SCRUM.";
            break;
		case 3:
            h3.innerHTML = "Conestoga College";
			div.innerHTML = "<span id='title'>Capstone Project</span><span id='period'>Jan 2019 – Apr 2019</span>";
            p.innerHTML = "Improved the usability of the Hospital Management System by piloting its main features from desktop-based application to mobile (Android/iOS) versions.<br></br>Propitiated users (patients, doctors and nurses) in their daily tasks through the implementation of appointments management feature on mobile applications, which can save 50% of users’ time when booking appointments.<br></br>Increased users’ retention by integrating Notifications feature which alerts the users for their immediate responses.<br></br><b><u>Skills:</u></b><br></br>Java for Android, Swift for iOS, MySQL, Microsoft Project, Trello.";
            break;
		case 4:
            h3.innerHTML = "FPT University";
			div.innerHTML = "<span id='title'>Capstone Project</span><span id='period'>May 2015 – Aug 2015</span>";
            p.innerHTML = "Enhanced tourists’ experience by providing customized suggested itineraries to maximize their utility through the use of data analytics.<br></br>Utilized algorithms to show the most efficient route with suggestions of nearby attractions and landmarks to the tourists, which helps them to save 1-5 hours of driving depends on the number of destinations.<br></br><b><u>Skills:</u></b><br></br>Spring Boot, Java, Trello, HTML, CSS, JavaScript, Google Map APIs, SQL, Maven, JUnit, Bootstrap.";
            break;
        default:
            break;
    }
}

function eduClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[4];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
	var div = pageCont.getElementsByTagName("div")[0]
    switch (a) {
		case 1:
            h3.innerHTML = "Conestoga College (Kitchener, ON)";
			div.innerHTML = "<span id='title'>Mobile Solutions Development (Postgraduate)</span><span id='period'>Sep 2017 – Apr 2019</span>";
            p.innerHTML = "<b><u style='color:blue'>GPA:</u></b>&nbsp3.86/4.00<br></br><b><u style='color:blue'>Certificates:</u></b>&nbspGraduation with Distinction, Dean’s Honour List, Co-Curricular Record.<br></br><b><u style='color:blue'>Courses:</u></b>&nbspC# Programming, UI Design, System Design and Development, Android, Database Management, Web Technologies, Software Quality Assurance, iOS development, Design Patterns, Computer and Application Security.<br></br><b><u style='color:blue'>Outcomes:</u></b>&nbspAll my software development skills and knowledge have been significantly sharpened and improved in detail.";
            break;
		case 2:
            h3.innerHTML = "FPT University (Ho Chi Minh, Vietnam)";
			div.innerHTML = "<span id='title'>Software Engineering (Bachelor)</span><span id='period'>Sep 2011 – Sep 2015</span>";
            p.innerHTML = "<b><u style='color:blue'>Certificates:</u></b>&nbspHighest Grade in Advanced Math, Programming Foundations with JavaScript, HTML and CSS (online course from Duke University).<br></br><b><u style='color:blue'>Courses:</u></b>&nbspJava, C# .NET, Data Structure and Algorithms, Object Oriented Paradigm, Database, Software Architect and Design, Web Development, Operating System, Advanced Math, Discrete Math, Statistic and Probability, Software Requirements, Software Quality and Testing, Human Computer Interaction, Project Management, Computer Network, Cloud Computing.<br></br><b><u style='color:blue'>Outcomes:</u></b>&nbspI gained the general understanding of all aspects of the Software Development Life Cycle, from analyzing customer’s requirements to design, implementation, testing and maintenance; especially, my Java and SQL skills.";
            break; 
        default:
            break;
    }
}

function actiClick(a) {
    var pageCont = document.getElementsByClassName("pageContent")[5];
	var h3 = pageCont.getElementsByTagName("h3")[0];
    var p = pageCont.getElementsByTagName("p")[0];
    switch (a) {
		case 1:
            h3.innerHTML = "Self-Study";
            p.innerHTML = "Self-study and research to learn new skills and knowledge to improve expertise, such as Android, Swift, AngularJS, NodeJS, JQuery, Bootstrap, CSS, etc.<br></br>Achieved online &#34Programming Foundations with JavaScript, HTML and CSS&#34 course from Duke University on Coursera.";
            break;
		case 2:
            h3.innerHTML = "Volunteer";
            p.innerHTML = "Worked as a volunteer in Conestoga College to support new students with their first steps in Canada.<br></br>Joined in Blood Donation Day twice during studying and working period.<br></br>Achieved Co-Curricular Records from Conestoga College by doing volunteers and joining workshops.";
            break;
		case 3:
            h3.innerHTML = "Team-Building";
            p.innerHTML = "Took part in sports (handball, football, table-tennis, billiards) and entertainment (dancing, singing) activities of former companies during working time.";
            break;
		case 4:
            h3.innerHTML = "Hobbies";
            p.innerHTML = "Love travelling and discovering new places around the world.<br></br>Enjoying listening to music and self-performing various genres of songs.";
            break; 
        default:
            break;
    }
}
