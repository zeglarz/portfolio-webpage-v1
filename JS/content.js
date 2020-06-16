Content = {
    en: {
        about: {
            title: 'About Me',
            body: ` Hi there! My name is Konrad and I'm an aspiring Front-End Web Developer with a passion for design. I started 
            my journey to become full-blow professional web developer about one year ago and I feel like I'm ready to
            land my first job as Junior Front-End Web Developer. 
            <br>
            <br> When I'm not on the computer, I enjoy all forms of outdoor activities. I especially like running and
            seeking off-the-beaten-path adventures with my camera in the wild world. I cannot imagine winter without snowboard
            strapped to my feet somewhere in the beautiful snowy mountains.`,
            proclamation: {
                title: 'TL;DR?&nbsp;&nbsp;Self Proclamations:',
                icons: [
                    {
                        title: 'Web Developer',
                        icon: 'fa fa-desktop'
                    },
                    {
                        title: 'UX Enthusiast',
                        icon: 'fa fa-pencil-ruler'
                    },
                    {
                        title: 'Snowboarder',
                        icon: 'fa fa-mountain'
                    }
                ]
            }
        },
        navlinks: ['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact', 'Język'],
        skills: {
            head: 'Technical skills',
            sub: 'A representation of my proficiency in each skill'
        },
        experience: {
            head: 'Experience',
            sub: 'I\'ve been doing web development for the past 1 year or sa, and I\'m enjoying learning new stuff almost every day',
            desc: 'Some technologies I\'ve worked with:'
        },
        projects: {
            head: 'What I\'ve done',
            sub: '(more coming soon)'
        },
        contact: {
            head: 'Like what you see?',
            sub: 'Whether you have an idea for a cool project or just fancy small chatter, feel free to send me an email!',
            button: 'Get in touch'.toUpperCase()
        },
        filterButtons: ['All', 'Apps', 'Mobile', 'Web'],
        visitButtons: ['View Source', 'Visit Site'],
        closeModal: 'Close'
    },
    pl: {
        about: {
            title: 'O mnie',
            body: `Cześć! Mam na imię Konrad. <br> Od niespełna roku zajmuję się Front-End developmentem. Moja przygoda z prograwmowaniem
            zaczęła się od pierwszego kursu na Udemy. Można powiedzieć, że była to miłość od pierwszej linijki kodu, choć liczne bugi
            probowały mnie zniechęcić wielokrotnie, nie poddałem się i dzięki wytrwałości możesz teraz oglądać efekt mojej pracy.  
            <br>
            <br>
            Od kiedy pamiętam interesowałem się sztuką i dobry designem. Dzięki nowonabytej umiejętności programowania mogę
            połączyć go ze swoim zmysłem estetycznym w celu dotarczenia użytkowinkowi treści w możliwie interesujący sposób.
            <br>
            <br> Kiedy akurat nie siedzę przy komputerze programując, realizuję się na różne sposoby, głównie poprzez 
            uprawnienie różnych form aktywności fizycznej jak bieganie (mam już za sobą 2 maratony) tenis czy jazda na rowerze. Nie
            wyobrażam sobi zimy bez sniżnych szaleństw na snowboardzie.`,
            proclamation: {
                title: 'Za długie by czytać? Ja w pigułce: ',
                icons: [
                    {
                        title: 'Web Developer',
                        icon: 'fa-desktop'
                    },
                    {
                        title: 'Entuzajasta UX',
                        icon: 'fa-pencil-ruler'
                    },
                    {
                        title: 'Snowboardzista',
                        icon: 'fa-mountain'
                    }
                ]
            }
        },
        navlinks: ['Początek', 'O mnie', 'Umiejętności', 'Doświadczenie', 'Portfolio', 'Kontakt', 'Language'],
        skills: {
            head: 'Technical skills',
            sub: 'A representation of my proficiency in each skill'
        },
        experience: {
            head: 'Doświadczenie',
            sub: 'Zajmuję się web developmentem od około 1 roku i z zapałem uczę się nowych rzeczy każdego dnia',
            desc: 'Niektóre techonogie, których używałem w swoich projektach:'
        },
        projects: {
            head: 'Moje projekty',
            sub: '(więcej wkrótce)'
        },
        contact: {
            head: 'Spodobało Ci się co zobaczyłeś?',
            sub: 'Nieważne czy masz fajny pomysł na jakiś wspólny projekt lub ofertę pracy, czy może po prostu chesz mnie bliżej poznać, koniecznie wyślij maila!',
            button: 'Skontaktuj się'.toUpperCase()
        },
        filterButtons: ['Wszystkie', 'Aplikacje', 'Mobilne', 'Strony Web'],
        visitButtons: ['Zobacz Kod', 'Demo'],
        closeModal: 'Zamknij'
    }
};

const about = (lang) =>
    (`
      <div class="col-12" id="about_me">
        <h2>${Content[lang].about.title}</h2>
        <img src="img/ja-head.jpg" id="prof-pic"/>
        <p>${Content[lang].about.body}</p>
      </div>
`);

const proclamations = (lang) =>
    (`
     <h3>${Content[lang].about.proclamation.title}</h3>
     ${Content[lang].about.proclamation.icons.map(icon =>
        (`
         <div class="tldr-proc">
            <div class="tldr-icon" id="tldr-${icon.icon.split('-')[1]}"><i class="fa ${icon.icon}"></i></div>
            <h5>${icon.title}</h5>
         </div>
        `)).join('')}
    `);

const filterButtons = (lang) => {
    $('#all').text(Content[lang].filterButtons[0]);
    $('#apps').text(Content[lang].filterButtons[1]);
    $('#mobile').text(Content[lang].filterButtons[2]);
    $('#web').text(Content[lang].filterButtons[3]);
};

const navlinks = (lang) => {
    $('#home-link').text(Content[lang].navlinks[0]);
    $('#about-link').text(Content[lang].navlinks[1]);
    $('#skills-link').text(Content[lang].navlinks[2]);
    $('#experience-link').text(Content[lang].navlinks[3]);
    $('#portfolio-link').text(Content[lang].navlinks[4]);
    $('#contact-link').text(Content[lang].navlinks[5]);
    $('#navbarDropdown').text(Content[lang].navlinks[6]);
};
const experience = (lang) => {
    $('#experience h2').text(Content[lang].experience.head);
    $('#experience p').text(Content[lang].experience.sub);
    $('#experience h3').text(Content[lang].experience.desc);
};
const skillSection = (lang) => {
    $('#skills-sec h2').text(techBody[lang].head);
    $('#skills-sec .col-md-12 > p').text(techBody[lang].sub);
};
const projectSection = (lang) => {
    $('#portfolio h2').text(Content[lang].projects.head);
    $('#portfolio h5').text(Content[lang].projects.sub);
};
const contact = (lang) => {
    $('#contact h2').text(Content[lang].contact.head);
    $('#contact-desc').text(Content[lang].contact.sub);
    $('#email-button').text(Content[lang].contact.button);
};

const modalButtons = (lang) => projects.forEach(proj => {
    $(`#${proj.slug}-source`).text(Content[lang].visitButtons[0]);
    $(`#${proj.slug}-demo`).text(Content[lang].visitButtons[1]);
    $('.btn-default').text(Content[lang].closeModal);
});

$('#about_me').append(about('en'));
$('#tl-dr').append(proclamations('en'));
$('.navbar-nav').append(navlinks('en'));
$('#filters').append(filterButtons('en'));
