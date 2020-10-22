const projects = [
    {
        title: 'News Feed API',
        subtitle: {
            en: 'Webpack JavaScript App | Personal Bootcamp Project @ Connectis',
            pl: 'Aplikacja JavaScript with Webpack | Samodzielny projekt z Bootcampu Connects'
        },
        description: {
            en: `Project features up to date news from all around the world which are delivered by NewsAPI npm 
            module. By selecting country and category of your choice you will be presented with 20 top news 
            cards which are dynamically rendered. You can even filter them out by custom search field.`,
            pl: `Pierwszy samodzielny projekt jaki wykonałem podczas bootcamp'u organizowanego przez Connectis
            na fron-end developera. Głównym założeniem było stworzenie aplikacji wyświetlającej w sposób dynamiczny newsy
            pozyskiwane z zewnętrznego API. Dane dostarczaje są przez backend oparty na NodeJS, który to z kolei fetchuje
            je z Newsapi.com. Użytkownik ma możliwość wyboru interesującej go kategorii oraz państwa, którego newsy mają
            dotyczć, po czym renderowanych jest 20 dynamicznych kart z newsami.`
        },
        stack: ['JavaScript', 'HTML', 'CSS', 'NodeJS', 'Express', 'REST API', 'jQuery', 'Bootstrap'],
        category: 'apps',
        img: 'img/newsfeed.png',
        slug: 'newsfeed',
        demoURL: 'https://newsify.konradrudnicki.com',
        gitURL: 'https://github.com/zeglarz/News-Feed-API'
    },
    {
        title: 'Random Person Generator',
        subtitle: {
            en: 'Flutter Mobile App | Personal Project',
            pl: 'Aplikacja mobilna Flutter | Projekt Samodzielny'
        },
        description: {
            en: `My first Flutter project which I published in Google Play Store. It features generation of random faux
            data of people along with their picture. Data is fetch using external REST API from https://randomuser.me . 
            The project taught me number of things such as working with http requests in Flutter via http package as well
            as it gave me good perspective on OOP, especially helped me grasp notion of classes. It's simple but yet I got
            good perspective on full spectrum of dev cycle from planning, designing, coding to deployment to Google Play
            Store.`,
            pl: `Mój jeden z pierwszych samodzielnych projektów napisany we Flutterze, który zdecydowałem się obulikować 
            w Google Play Store. Aplikacja służy do geenrowania randomowych danych personalnych fikcyjnych osób, które w 
            łatwy sposób można skopiować do schowka i użyć przy rejestracji w różnych serwisach internetowych, którym nie
            do końca ufamy w kontekście ochrony naszych cennych danych osobowych. Nauczenie się Darta powoliło mi lepiej
            zrozumieć zagadnienia związane z Object-orientated programming, a w szczególności sens tworzenia klas oraz 
            statycznego typowania. Pomimo, iż sam projekt jest dość proty, pozwolił mi przejść pełną ścieżkę product 
            developmentu, od pierwszego szkicu na kartce papieru, aż po sam deplyment do Play Store'a co pokazało mi jak
            wiele wyzwań i przeszkód czeka na drodze developera. Najważniejsza, że udało się dowieźć projekt do końca, 
            a efekt można zobaczyć na własne oczy pobierając aplikację ze sklepu Google, całkowicie za darmo i bez rekam :)`
        },
        stack: ['Flutter', 'Dart', 'Material', 'REST API'],
        category: 'mobile',
        img: 'img/randomperson.png',
        slug: 'randomperson',
        demoURL: 'https://play.google.com/store/apps/details?id=com.konradrudnicki.randompersongenerator',
        gitURL: 'https://github.com/zeglarz/random-person-generator-flutter'
    },
    {
        title: 'DevBook',
        subtitle: {
            en: 'Create React App | Personal Project',
            pl: 'Create React App | Projekt Samodzielny z Bootcampu Connects'
        },
        description: {
            en: `The app is social media site for developers. It allows users to sign up and create portfolio 
            profile page and see profiles of other users. Logged user is also able to read, write, comment and 
            like posts. Profile page features top user’s repositories from GitHub which are fetched from REST 
             API. Backend is based on NodeJS which connects to MongoDB database. In this project I first used state
             managment tool Redux. It helped me got broader understanding of `,
            pl: `Mój autorski pomysł na stworzenie aplikacji webowej dedykowanej developerom. Aplikacja zbydowana została
            przy wykorzystaniu stacku MERN, czyli React, NodeJS z Express oraz MongoDB czyli klasyka gatnku. Użytownik po 
            rejestracji ma możiwość edycji oraz uzupełnieniu swojego publicznego profilu z miejscami pracy, edukacją, 
            oraz umiejątnościami. Dodatkowo po wpisaniu nicku z githuba fetchowane są z wykorzystaniem REST API dane o 
            repozytoriach danego użytkownika wraz z liczbami gwiazdek oraz forków. Zalogowani użytkownicy mają do dyspozycji
            forum, w którym mogą pisać posty, komentować oraz like'ować posty innych użtykowników. Przy tym projekcie po 
            raz pierwszy skorzystałem z najpopularniejszego framewoka do zarządznia stanem, czyli Redux'a, który dzięki
            czemu nauczyłem się zasad pracy z tym framworkiem oraz lepszego zrozumienia zagadnień związanych z zarządzniem
            stanem ogólnie.`
        },
        stack: ['MERN: MongoDB', 'Express', 'React', 'Redux', 'NodeJS', 'JWT'],
        category: 'apps',
        img: 'img/devbook.png',
        slug: 'devbook',
        demoURL: 'https://devbook.konradrudnicki.com',
        gitURL: 'https://github.com/zeglarz/DevBook'
    },
    {
        title: 'Portfolio Website',
        subtitle: {
            en: 'Static Webpage | Personal Project',
            pl: 'Strona Statyczna | Projekt Samodzielny'
        },
        description: {
            en: `My very first portfolio website I've ever built. This project thought me a lot about HTML and CSS. This 
            is my first and probably last frameworkless project as future one are going to be build using React and Angular.
            Even though this project was mainly HTML I tried to separate data into several components which clean the code 
            as well as give me more straight forward way for future updates. 
            I've used few 3rd party libraries, main one was jQuery, but also I used Superslides for main full screen
            slideshow, owlCarousel for charts and Isotope for filtering my projects by categories.`,
            pl: `Mój pierwszy projekt strony - portfolio, którą w dalszym ciągu rozwijam i aktualizuje. Ten projekt nauczył
            mnie wiele odnośnie pracy z HTMLem CSS'em oraz JavaScript, a w szczególności z biblioteką jQuery. Jest to 
            zapewne mój ostatni projekt bez frameworku, kolejne będą wykorzystywały takie frameworki jak m. in. React i 
            Angular. Strona pokazuje moje podejście do designu, prezentacji danych oraz drobnych smaczków w postaci 
            animacji. Do zbudowania strony posłużyłem się w dużej mierze Boostrapem, jednak uzupełniłem go o wiele customowych
            elementów od siebie np. z wykorzystaniem Flexbox'a. Strona zbudowana zgodnie z filozofią 'mobile first', zatem
            jest w pełni responsywna, czyli tak jak być powinno.`
        },
        stack: ['HTML', 'JavaScript', 'CSS', 'jQuery', 'Bootstrap', 'RWD', 'Sketch'],
        category: 'web',
        img: 'img/portfolio.png',
        slug: 'portfolio',
        demoURL: 'https://konradrudnicki.com',
        gitURL: 'https://github.com/zeglarz/portfolio-webpage-v1'
    },
    {
        title: 'BookMates',
        subtitle: {
            en: 'React Create App | Team BootCamp Final Project',
            pl: 'React Create App | Projekt zespołowy zaliczeńowy BootCamp Connectis '
        },
        description: {
            en: `Project BookMates was coded by group of 4 people as final assignment for Connectis' C_School Full 
            Stack Boot Camp. App is build using React in front-end, NodeJS in back-end coupled with PostgreSQL. The main
            goal of a project was to deliver an app that will connect people interested in books. My field of responsibility
            is to implement fetching book data using Google REST API, connecting with SQL database in the backend and 
            handling searching and presenting of the book data on the front-end. All of the requirements were fulfilled 
            `,
            pl: `Projekt grupowy, który był końcowym projektem zaliczeniowym bootcampu full-stackowego, który odbywałem 
            na przełomie roku 2019/2020 w Connectis w Warszawie. Zespół poza mną liczył 3 osoby. Głównym założeniem projektu
            było storzenie serwisu spłecznośćiowego skupiającego miłośników książek. Moja odpowiedzialność za 
            projekt polegała zarówno na front-endzie jaki i back-endzie. Jeśli chodzi o back-end, oparty on został na 
            NodeJS oraz Expressie. Zajmowałem się tworzeniem endpontów oraz pisaniu logiki do przetwarzania danych 
            o książkach oraz użytkownikach oraz komunikacją z bazą danych PotgreSQL. Wykorzystałem w tym 
            celu bazę danych Google Boooks, z którym komunikowałem się przez interfejs API. Na front-endzie pracowaliśmy w Reacie 
            i tutaj odpowiadałem, za prezentację książek użytkownikom, formularz ręczngo dodania książki, wyszukiwania 
            ksiązki, oraz indywidualne strony książek wraz z możliwością oceniania ich z wykorzystaniem gwiazdek`
        },
        stack: ['PERN: React', 'PostgreSQL', 'JavaScript', 'NodeJS', 'Express', 'SCSS'],
        category: 'apps',
        img: 'img/bookmates.png',
        slug: 'bookmates',
        demoURL: 'https://bookmates.krzysztofziemski.com',
        gitURL: 'https://github.com/KrzysztofZiemski/bookmates'
    },
    {
        title: 'Social Ape',
        subtitle: {
            en: 'Gatsby | Follow Along Project',
            pl: 'Gatsby | Prejekt Tutorialowy'
        },
        description: {
            en: `This was a follow along guide on how to create twitter clone app which I decided to undertake for the purpose of familiarizing myself
            with Firebase services. This over 11 hour tutorial was very helpful with conveying ins and outs of firebase
            functionality such as storage, cloud functions, authentication and authorization and last but not least to
            perform CRUD operations on non-sql database provided by firebase. This project gave me some more practice with
            state management tool Redux. I made some twists and turns to tweak this follow-along project to my liking. 
             For example I made use of skeleton loading for the first time which is more modern approach over old turning
             wheel when data loads. More and more big apps are using it nowadays and basically what it is, is as the name
             suggest to see a skeleton in form of blocks and circles which pulse in exact place of where data is going to 
             reveal itself when it's been fetched.`,
            pl: `Projekt tutorialowy, który podjąłem wcelu nauczenia się korzystania z funkcjonalności dostarczenej przez
            serwis Firebase i polegał on na stworzeniu klona Twittera. ten ponad 11-godzinny kurs pozlolił mi nauczyć się korzystać ze storage, cloud functions, 
            jak i komunikacji z niereleacyjną bazą danych oraz uwierzytelniania użytkownika. Tutorial pozwolił mi również 
            utrwalić wiedzę związaną z wykorzystywaniem Reduxa do zarządznia stanem aplikacji. Pewnym smaczkiem wprowadzonum przeze
            mnie było wprowadzenie tzw. sceleton loadingu, czyli wyświetlania szkieletu treśći, które dopiero są fetchowane,
            zmiast przestarzałego już podejścia, czyli tzw. loader'a najczęściej pod postacią kręcącego się kółka.`
        },
        stack: ['React', 'Redux', 'Firebase', 'PostgreSQL', 'JavaScript', 'NodeJS', 'Express', 'SCSS'],
        category: 'apps',
        img: 'img/socialape.png',
        slug: 'socialape',
        demoURL: 'https://socialape-659f4.web.app',
        gitURL: 'https://github.com/zeglarz/socialape-firebase-frontend'
    },
    {
    id: 7,
    title: 'Portfolio Website v2',
    subtitle: {
      en: 'Create React App TypeScript | Personal Portfolio v2',
      pl: 'Create React App TypeScript | Portfolio Personalne 2 odsłona',
    },
    description: {
      en: `The second version of my portfolio website, this time made with React. The development process was very 
           challenging and full of various pitfalls, but I learned a lot during this time. I must admit that by far the hardest was to learn TypeScript and make the compiler happy for the most part. I won't be lying to say that I had a few moments of doubt and had thoughts of going back to old and familiar JavaScript, but I forced my way through, and I will never forget this lesson. Hopefully, will I have a bright future in my next TS endeavors? For the
           visual part of the website, I worked with Styled-Components which I learned to love and won't ditch it for other styling solutions anytime soon. I also gave a shot and try my best with Framer-Motion in regard to making
           my page more visually appealing with help of animations. Working with framer-motion proved easier than I initially
           had thought, I'm very happy with the final result, and I hope you would enjoy it too as well.`,
      pl: `Druga odsłona mojego osobistego portfolio, tym razem napisana w Reakcie. Projekt ten okazał się dużym
           wyzwaniem, podczas którego nauczyłem się wielu nowych rzeczy. Pierwszą i najważniejszą jest TypeScript. Jest
           to pierwsza strona od postaw napisana w tymże języku. Nie ukrywam, że krzywa uczenia była przy tym projekcie
           dość stroma, miałem kilka momentów zwątpień, kiedy kompilator rozbłyskiwał czerwonymi kolorami niczym choinka
           i myślałem o powrocie do starego poczciwego JavaScript-a, ale nie,
           powiedziałem sobie, że się nie poddam! I nie żałuje tej decyzji, gdyż nie tylko udało mi się dowieźć ten projekt do końca,
           ale chyba nawet polubiliśmy się na tyle, że kompilator już tak często się na mnie nie złości.`,
    },
    stack: [
      'React',
      'TypeScript',
      'Styled-Components',
      'Framer-Motion',
      'Material UI',
      'Formik',
      'Sketch',
    ],
    category: 'apps',
    img: 'img/portfolio-v2.jpg',
    slug: 'portfolio-v2',
    demoURL: 'https://konradrudnicki.com',
    gitURL: 'https://github.com/zeglarz/portfolio-website-v2',
  }
];

const card = (slug, img, title, category) => (`
            <div class="flex-item ${category}" data-toggle="modal" href="#${slug}Modal">
                <div class="portfolio-item">
                    <div class="portfolio-overlay"></div>
                    <div class="links">
                        <a class="image-link"><i class="fa fa-search-plus"></i></a>
                    </div>
                    <img class='image' src="${img}" alt="image">
                    <div class="portfolio-info">
                        <h3>${title}</h3>
                    </div>
                </div>
            </div>
`);

const modal = (slug, title, subtitle, img, description, stack = null, gitURL, demoURL = null) => (`
         <div class="modal fade" id="${slug}Modal" tabindex="-1" role="dialog" aria-labelledby="${slug}Modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header d-block">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">${title}</h4>
                        <h6 class="modal-title-description">${subtitle}</h6>
                    </div>
                    <div class="modal-body">
                        <p>
                            <img class="img-fluid" src=${img} alt="">
                        </p>
                        <p class="modal-description">${description}</p>
                        <br>
                        ${stack ? `<p class="modal-description"><strong>Stack: </strong>${stack.join(', ')}</p>` : ''}
                        <p class="visit">
                            <a href="${gitURL}" target="_blank" class="visit-btn" id="${slug}-source">View Source</a>
                             ${(demoURL ? `or 
                            <a href=${demoURL} target="_blank" class="visit-btn" id="${slug}-demo">Visit Site</a>` : '')}
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
`);

const Cards = projects.map(({ slug, img, title, category }) => card(slug, img, title, category));
const Projects = (lang) => projects.map(({ slug, title, subtitle, img, description, stack, gitURL, demoURL }) =>
    modal(slug, title, subtitle[lang], img, description[lang], stack, gitURL, demoURL));

$('#card-modal-container').append(Cards);
$('body').append(Projects('en'));


