//alert ('testing js file')
var re = new Array(); //relevant_experiences
var title = '';
var img = '';
var points = new Array();
var links = new Array();
var writeBackString;
function write2html (connect) {
	var writeBackString;
	writeBackString = document.write(connect);
	return writeBackString;
}

function relevant_experiences () {
	var writeBackREs = '';
	while (re.length){
      writeBackREs = '<article class="6u 12u$(xsmall) work-item">'  + re.pop() + '</article>' + writeBackREs;
	}
	/* for (i=0; i < member; i++)
	{
		var writeBackString;
		writeBackString = write2html ('\
		<article class="6u 12u$(xsmall) work-item">\
		</article> \
		'); 
	}
	return 0; */
	write2html (writeBackREs);
	return 0;
}

function add_relevant_experience (title) {
	var writeBackRE = '';
	writeBackRE = return_image() + 
		return_title() + 
		return_bullet_points() + 
		return_links();
	re.push(writeBackRE);
	return 0;
}

function add_title (title_) {
	title = title_;
	return 0;
}

function return_title(){
	return '<h3>' + title + '</h3>';
}

function add_image(img_, link_){
	img = '\<a href="' + link_ + '" class="image fit thumb"><img src="' + img_ + '" alt="" /></a>';
	return 0;
}

function add_image_no_link(img_){
	img = '<img class="image fit thumb" src="' + img_ + '" alt="" />'
	return 0;
}

function return_image(){
	return img;
}

function add_link (connect, link_) {
	var writeBackLink = '';
	writeBackLink = '<a href="' + link_ + '">' + connect + '</a>';
	links.push(writeBackLink);
	return 0;
} 

function return_links () {
	var writeBackLinks = '';
	while (links.length){
		if(links.length > 1)
			writeBackLinks = '/' + links.pop() + writeBackLinks;
		else
			writeBackLinks = links.pop() + writeBackLinks;
	}
	writeBackLinks = '<p align="right">'  + writeBackLinks + '</p>';
	//write2html(writeBackLinks);
	return writeBackLinks;
} 

function add_bullet_point (connect) {
	points.push(connect);
	return 0;
} 

function return_bullet_points () {
	var writeBackPoints = '';
	while (points.length){
      writeBackPoints = '<p>• '  + points.pop() + '</p>' + writeBackPoints;
	}
	//write2html(writeBackPoints)
	return writeBackPoints;
}