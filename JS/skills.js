const skills = [
    {
        name: 'JavaScript',
        level: '80',
        desc: {
            en: 'Used in majority of my web projects',
            pl: 'Wykorzystywany w większości moich projektów'
        }
    },
    {
        name: 'HTML',
        level: '90',
        desc: {
            en: 'Used in majority of my web projects',
            pl: 'Wykorzystywany w większości moich projektów'
        }
    },
    {
        name: 'CSS',
        level: '90',
        desc: {
            en: 'Used in majority of my web projects',
            pl: 'Wykorzystywany w większości moich projektów'
        }
    },
    {
        name: 'Flutter / Dart',
        level: '40',
        desc: {
            en: 'Recently  got really hooked up by this framework',
            pl: 'Dość świeżo poznany framework, a już zaowocował pierwszą aplikacją w Google Play Store'
        }
    },
    {
        name: 'Swift',
        level: '30',
        desc: {
            en: 'I\'m learning it currently',
            pl: 'Uczę się aktualnie'
        }
    },
    {
        name: 'Python',
        level: '30',
        desc: {
            en: 'I\'ve done some projects in the past',
            pl: 'Zrealizowałem kilka mniejszych projektów w przeszłości'
        }
    }
];

const techBody = {
    en: {
        head: 'TECHNICAL SKILLS',
        sub: 'A representation of my proficiency in each skill'
    },
    pl: {
        head: 'Języki Programowania',
        sub: 'Poniższe wykresy pokazuję mój poziom umiejętności w poszczególnych językach programowania.'
    }
};


Skills = (lang) => (`
   <div class="owl-carousel owl-theme">

        ${skills.map(skill =>
    (`
            <div class="skill">
                <span class="chart" data-percent="${skill.level}%">
                <span class="percent">${skill.level}</span>
                <canvas height="152" width="152"></canvas>
                </span>
                <h4 class="skill-name">${skill.name}</h4>
                <p>${skill.desc[lang]}</p>
            </div>
            `)).join(' ')}
        </div>
`);

$('#skills-sec').append(Skills('en'));
