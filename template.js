var TP = TemplatePath;

function PageHeader(hn, param1) {
	document.write("<div class='header' style='position: relative; padding-top: 6px;'>" + hn + "</div>");
}

function TinyHeader(hn, param1) {
	if (hn != '') {
		document.write("<div class='theader' style='padding-top: 2px;'>" + hn + "</div>");
	}

}

function Box(hn, content, width, height) {
	TinyHeader(hn, '');
	document.write("<table border='0' align='center' cellpadding='0' cellspacing='0' class='menu' style='width: " + width + ";" + (height != '' ? "height: " + height : "") + "'><tr><td>" + content + "</td></tr></table>");
}

function ShadowBox(hn, content, width, height) {
	document.write('<div  style="width: ' + width + ';' + (height != '' ? 'height: ' + height : '') + '">');
	document.write('<div class="boxx" id="boxx">');
	document.write('<div class="boxx_background"></div>');
	document.write('<div class="boxx_contents">');

	TinyHeader(hn, '');
	document.write(content);
	document.write('</div>');
	document.write('</div>');
	document.write('</div>');
}

function VersionHeader(hn, param1) {
	TinyHeader(hn, '');
	document.write("<table border='0' align='center' cellpadding='0' cellspacing='0' class='menu'><tr><td valign=top class='menu'><img src='" + TP + "version.gif'></td></tr></table>");
}

function LogoBox(hn, content, width) {
	document.write("<table cellpadding='0' cellspacing='0'><tr><td><img src='" + TP + "image_10.png'></td><td rownspan=2>");
	TinyHeader(hn, '');
	document.write("<table border='0' align='center' cellpadding='0' cellspacing='0' class='box' style='width: " + width + "; height: 59px'>" + content + "</td><td class='rightbox'></td></tr></table>");
	document.write("</td></tr>");
}