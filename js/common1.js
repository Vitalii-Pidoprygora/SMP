// function - set iframe height on load
function iframeLoaded(elementId) {
  setTimeout(function () {

    var $iframe = $('#' + elementId).length ? $('#' + elementId) : window.parent.$('#' + elementId);
    var padding = -12;
    $iframe.css('height', '0px');
    var height = $iframe.get(0).contentWindow.document.body.scrollHeight + padding;
    $iframe.css('height', height + 'px');

  }, 50);
}
// function - create iframe 
function openModal(modalTitle, iframeSrc) {
  $('#cb-modal-title').html(modalTitle);
  $('#cb-modal-error').addClass('d-none');
  $('#cb-modal-body').html('<iframe frameborder="0" scrolling="no" id="cb-modal-frame" src="' + iframeSrc + '"></iframe>');
  $('#cb-modal-frame').on('load', function () {
    iframeLoaded(this.id);
  });
  $('#cb-modal').modal();
}
// function - get URL Vars
function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    hash[1] = unescape(hash[1]);
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }

  return vars;
}
var urlVars = getUrlVars();

// hide default submit button row at the bottom of inline forms
document.addEventListener('DataPageReady', function (event) {
  $('.cb-hide-submit input[type="submit"]').closest('tr').remove();
  $('.cb-btn-reset').bind('click', function () {
    $(this).closest('form').find('select, input[type="text"]').val('');
    $(this).closest('form').submit();
  });
});

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};
function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return monthIndex + 1 +"/"+ day + "/" + year;
}


function load_employee_navbar(active_nav) {
  $('#site-navbar').html(' \
		<div class="container-fluid cb-container-lg"> \
        <a class= "navbar-brand" href = "./" >\
          <img src="../img/logo.svg" style="height:30px;" />\
          Employee\
        </a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"\
          aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">\
          <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbar">\
          <ul class="navbar-nav ml-auto">\
            <li class="nav-item">\
              <a id="nav-mytasks" class="nav-link" href="my_tasks.html?cbResetParam=1">\
                <i class="fas fa-thumbtack"></i>\
                My Tasks\
              </a>\
            </li>\
            <li class="nav-item dropdown"> \
              <a id="nav-projects" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
                <i class="fas fa-project-diagram"></i> Manage Projects \
              </a> \
              <div class="dropdown-menu" aria-labelledby="navbarDropdown"> \
                <a class="dropdown-item" href="manage_project.html?cbResetParam=1">Projects</a> \
                <a class="dropdown-item" href="add_new_project.html?cbResetParam=1">Add new Project</a> \
              </div> \
					  </li> \
            <li class="nav-item">\
              <a id="nav-profile" class="nav-link" href="profile.html?cbResetParam=1">\
                <i class="fas fa-user"></i>\
                Profile\
               </a>\
            </li>\
            <li class="nav-item">\
              <a class="nav-link" href="https://c3fot067.caspio.com/folderlogout">\
                <i class="fas fa-sign-out-alt"></i>\
                Log Out\
              </a>\
            </li>\
          </ul>\
        </div>\
      </div >\
	');

  $('#nav-' + active_nav).addClass('active');
}

function load_admin_navbar(active_nav)
{
	$('#site-navbar').html(' \
		<div class="container-fluid cb-container-lg"> \
			<a class="navbar-brand" href="./"> <img src="../img/logo.svg" style="height:30px;" /> Admin </a> \
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> \
				<span class="navbar-toggler-icon"></span> \
			</button> \
			<div class="collapse navbar-collapse" id="navbar"> \
				<ul class="navbar-nav ml-auto"> \
					<li class="nav-item dashboard"> \
						<a id="nav-employee" class="nav-link" href="dashboard.html?cbResetParam=1"> <i class="fas fa-chart-line"></i> Dashboard </a> \
					</li> \
					<li class="nav-item dropdown manage-projects"> \
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
							<i class="fas fa-project-diagram"></i> Manage Projects \
						</a> \
						<div class="dropdown-menu" aria-labelledby="navbarDropdown"> \
							<a class="dropdown-item" href="all_projects.html?cbResetParam=1">All Project</a> \
							<a class="dropdown-item" href="inprogress_projects.html?cbResetParam=1">In Progress</a> \
							<a class="dropdown-item" href="completed_projects.html?cbResetParam=1">Completed</a> \
							<a class="dropdown-item" href="add_new_project.html?cbResetParam=1">Add new Project</a> \
						</div> \
					</li> \
					<li class="nav-item dropdown manage-tasks"> \
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> \
							<i class="fas fa-tasks"></i> Manage Tasks \
						</a> \
						<div class="dropdown-menu" aria-labelledby="navbarDropdown2"> \
							<a class="dropdown-item" href="manage_tasks.html?cbResetParam=1">All Tasks</a> \
							<a class="dropdown-item" href="mytasks.html?cbResetParam=1">My Tasks</a> \
						</div> \
					</li> \
					<li class="nav-item manage-users"> \
						<a id="nav-users" class="nav-link" href="manage_users.html?cbResetParam=1"><i class="fas fa-users"></i> Manage Users </a> \
					</li> \
					<li class="nav-item profile"> \
						<a id="nav-profile" class="nav-link" href="profile.html?cbResetParam=1"> <i class="fas fa-users"></i> Profile </a> \
					</li> \
					<li class="nav-item"> \
						<a class="nav-link" href="https://c3fot067.caspio.com/folderlogout"> <i class="fas fa-sign-out-alt"></i> Log Out </a> \
					</li> \
				</ul> \
			</div> \
		</div> \
	');

	$('.nav-item.' + active_nav).addClass('active');
}