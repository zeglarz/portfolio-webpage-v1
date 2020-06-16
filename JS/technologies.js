const techs = ['html', 'css', 'js', 'react', 'flutter', 'sass', 'java', 'python', 'jquery', 'bootstrap', 'docker', 'angular', 'node',
    'mongodb', 'github', 'photoshop', 'rxjs', 'redux', 'linux', 'sketch', 'postgre', 'swift', 'express', 'styled-components'];

Technologies = techs.map(tech =>
    (`
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 skill-icon" data-toggle="tooltip" title="${tech.toUpperCase()}">
        <img class="img-fluid" src="img/skills/${tech}.png" id=${tech}>
    </div>
    `)
);
$('#technologies').append(Technologies);
