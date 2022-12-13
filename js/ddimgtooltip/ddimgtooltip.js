/* Image w/ description tooltip v2.0
 * Created: April 23rd, 2010. This notice must stay intact for usage
 * Author: Dynamic Drive at http://www.dynamicdrive.com/
 * Visit http://www.dynamicdrive.com/ for full source code
 */

var ddimgtooltip = {
  tiparray: (function () {
    var tooltips = []
	//define the width of the tooltip-boxes
	let box_w = "405px"
    
	//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
    //For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
    //For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

    tooltips[1] = [ "img/01_pub.jpg",
      "Zur Vervollständigung der PSMA (Prostata-<br>spezifisches Membranantigen)-Therapie am USB<br>haben wir das komplementäre Radiodiagnostikum<br>Ga-68-PSMA-11 eingeführt.<br>Damit können wir die notwendigen Werkzeuge<br>für die Behandlung des Prostatakarzinoms aus<br>eigener Herstellung – flexibel und unabhängig –<br>anbieten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[2] = [ "img/02_pub.jpg",
      "Beeinflusst das Wetter die Entstehung von Poly-<br>traumata und führt zu mehr Ganzkörper-CTs?<br>Anhand der Daten zu Wetter und CTs hat das<br>Forschungsteam um Dr. Martin Segeroth,<br>Assistenzarzt der Radiologie, jene Wetter-<br>bedingungen ermittelt, die mit einer Erhöhung der<br>Ganzkörper-CTs durch Polytrauma-Patient*innen<br>in Zusammenhang stehen. Demnach korreliert<br>heisseres Wetter mit mehr Sonnenschein bzw.<br>geringerer Bewölkung und schwachem Wind mit<br>einer höheren Anzahl von Polytrauma-CTs.<br>Zudem wurden von April bis September mehr<br>Polytrauma-CTs durchgeführt. Die Ergebnisse,<br>welche die Planung der Ressourcen vereinfachen<br>könnten, wurden an der Jahrestagung der Radio-<br>logical Society of North America (RSNA) vorgestellt<br>und sogleich vom radiologischen Fachforum Aunt-<br>minnie aufgegriffen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[3] = [ "img/03_18_pub.jpg",
      "Der Young Researcher Award des European<br>Journal of Radiology wurde PD Dr. David Winkel,<br>stv. Oberarzt der kardialen und thorakalen Dia-<br>gnostik, für seine Co-Autorschaft einer Publikation<br>zur Genauigkeit eines Deep-Learning-Algorithmus<br>in der Krebsdiagnostik verliehen.<br>Die Wissenschaftler zeigten, dass die diagnos-<br>tische Genauigkeit eines Deep-Learning-Algo-<br>rithmus zur Klassifikation von Prostatakarzinom-<br>Läsionen in der MRT so gut ist wie in klinischen<br>Befunden.<br>Diese Erkenntnis könnte ein weiterer Schritt in<br>Richtung der klinischen Implementierung von<br>Deep-Learning-Algorithmen sein."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[4] = [ "img/04_pub.jpg",
      "4	 	Künstliche Intelligenz zur Diagnostik von Hirn-<br>blutungen und zur Verbesserung des Arbeits-<br>ablaufs in der Notaufnahme: Unsere Neuro-<br>radiolog*innen um Letztautorin Dr. Kristine Black-<br>ham zeigten Genauigkeit und Sensitivität eines<br>Deep-Learning-Algorithmus zur Diagnose intra-<br>kranieller Blutungen in der CT und stellten eine<br>Beschleunigung der Arbeitsabläufe fest –<br>diese war möglich bei sorgfältiger Optimierung.<br>Der Artikel wurde sofort vom radiologischen<br>Fachforum Auntminnie aufgegriffen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[5] = [ "img/05_pub.gif",
      "Erneute Auszeichnung unseres Strahlenschutzes:<br>Zum 2. Mal hat die Europäische Gesellschaft für<br>Radiologie die Anwendung des Strahlenschutzes<br>der Radiologie am USB evaluiert und wiederum<br>mit der Höchstnote bewertet. Beurteilt wurden<br>primär die Angemessenheit der durchgeführten<br>Untersuchungen, die Einhaltung der Referenz-<br>werte, die Modernität der technischen Ausstattung<br>und die Einhaltung des Prinzips der Minimaldosis<br>(as low as reasonably achievable).<br>Die Auszeichnung ist von besonderem Wert ange-<br>sichts der steigenden Nachfrage nach medizi-<br>nischer Bildgebung."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[6] = [ "img/06_pub.jpg",
      "Die radiopharmazeutische Chemie erhielt ein hoch-<br>kompetitives Stipendium (PI: Prof. Melpomeni Fani)<br>der Innosuisse.<br>Mit Fördermitteln in Höhe von CHF 716'600 soll<br>die Behandlung von Karzinomen durch Präzisions-<br>bildgebung der Tumormikroumgebung verbessert<br>werden."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[7] = [ "img/07_pub.png",
      "Unsere Assistenzärztinnen Dr. Hildegard Wicht-<br>mann, Dr. Nadja Schönberg und Dr. Verena Hof-<br>mann erhielten für ihre herausragenden Ergeb-<br>nisse (summa cum laude, magna cum laude und<br>cum laude) bei den Facharzt-Teilprüfungen<br>Prüfungspreise der Schweizerischen Gesellschaft<br>für Radiologie (SGR-SSR).<br>Erfolgreich waren alle Assistenzärzt*innen unserer<br>Klinik – alle haben die Teilprüfungen bestanden."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[8] = [ "img/08_pub.jpg",
      "400 Terabyte:<br>Unser Bildarchivierungs- und Informationssystem<br>ist so umfangreich wie 200‘000 Stunden Video<br>in Fernsehqualität."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[9] = [ "img/09_pub.jpg",
      "Radiologische Bilder zeigen manchmal Überraschen-<br>des. Die Darstellung des Absaugsystems eines<br>speziellen Verbands in der Computertomografie<br>führte bei den Radiolog*innen der muskuloskelettalen<br>Diagnostik zu beispielloser Erheiterung."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[10] = [ "img/10_pub.jpg",
      "Wozu braucht die Radiologie ein Labor für radioaktive Substanzen?<br>Die in der nuklearmedizinischen Diagnostik und Thera-<br>pie eingesetzten Substanzen (Radiopharmazeutika)<br>werden spezifisch für unsere Patient*innen hergestellt.<br>Zu diesem Zweck gibt es am Unispital ein spezielles<br>Labor der radiopharmazeutischen Chemie."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[11] = [ "img/11_pub.jpg",
      "In einem Röntgenbild unserer muskuloskelettalen Dia-<br>gnostik zeigten sich charmant geformte Edelstahl-<br>drähte.<br>Sie dienen der Fixierung von Knochenfragmenten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[12] = [ "img/12_pub.jpg",
      "Fast wie ein Abendstern sah der Blasenstein aus,<br>den die Radiolog*innen der abdominellen Diagnostik<br>in der Computertomografie entdeckten."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[13] = [ "img/13_pub.jpg",
      "Die Energiekrise wird auch für die Radiologie spürbar<br>sein; die Geräte laufen nicht von allein.<br>26 Familien (à 4 Personen) brauchen so viel Strom<br>wie 1 Magnetresonanztomograf."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[14] = [ "img/14_22_pub.jpg",
      "1,2 mm beträgt der winzige Durchmesser eines<br>Gefässzugangs der interventionellen Radiologie.<br>Sie ist spezialisiert auf die Diagnostik und Therapie<br>von Gefässkrankheiten, Entzündungen, Tumoren und<br>Schmerzen.<br>Mithilfe kleinster Instrumente werden deren Ursachen<br>gezielt und möglichst schonend behandelt. Die Be-<br>handlung wird daher als minimalinvasive Therapie<br>bezeichnet. Auf diesen Angiografie-Bildern sieht man<br>die hintere Gehirnarterie: vor (links) und nach (rechts)<br>der Entfernung eines Gerinnsels."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[15] = [ "img/15_pub.jpg",
      "Eine unserer acht Abteilungen beschäftigt sich<br>mit radiologischer Physik. Die forschungsorientierte<br>Abteilung entwickelt neue Magnetresonanzverfahren<br>zur Verbesserung der Bildgebung verschiedener<br>Organe, etwa der Lungen.<br>Zudem arbeiten die Strahlenphysiker, welche für die<br>Einhaltung und Optimierung des Strahlenschutzes<br>am Unispital zuständig sind, in der radiologischen<br>Physik."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[16] = [ "img/18 Haben Radiologinnen.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]
	
	tooltips[17] = [ "img/18 Haben Radiologinnen.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]
	  
    tooltips[18] = [ "img/03_18_pub.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]
    
	tooltips[19] = [ "img/19_pub.png",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]
    
	tooltips[20] = [ "img/20_pub.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]
    
	tooltips[21] = [ "img/21_pub.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]
	  
	tooltips[22] = [ "img/14_22_pub.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]	  

	tooltips[23] = [ "img/23_pub.jpg",
      "Haben Radiolog*innen den Röntgenblick?<br>Mittlerweile sind zahlreiche andere Verfahren etabliert;<br>insofern könnte man beispielsweise auch vom CT-,<br>MRI-, Ultraschall-, PET- und SPECT-Blick sprechen.<br>Am Unispital setzen wir das gesamte Leistungs-<br>spektrum der modernen Radiologie und Nuklear-<br>medizin ein, inklusive der minimalinvasiven und<br>endovaskulären Therapie und der Radionuklid-<br>therapie."
      ,{ background: "white", opacity: 0.98, width:box_w}]	  
	  
	 

    return tooltips; //do not remove/change this line
  })(),

  tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

  //***** NO NEED TO EDIT BEYOND HERE

  tipprefix: "imgtip", //tooltip ID prefixes

  createtip: function ($, tipid, tipinfo) {
    if ($("#" + tipid).length == 0) {
      //if this tooltip doesn't exist yet
      var text = tipinfo[1] || "";
      var cssStyles = tipinfo[2] || {};

//MiB: auskommentiert um <br> auch auf dem Smartphone korrekt darzustellen
      // if (window && window.screen && (window.screen.width <= 576)) {
        // // text = text.replaceAll("<br>", "");
        // text = text.split("<br>").join("");
        // cssStyles.maxWidth = "400px";
      // }

      return $('<div id="' + tipid + '" class="ddimgtooltip" />')
        .html(
          '<div style="text-align:center; margin-top:20px; margin-left:5px; margin-right:5px"><img src="' +
            tipinfo[0] +
            '" style="width:100%"/></div>' +
            '<div style="text-align:left; margin-left:5px; margin-right:5px;\
				margin-top:30px">' +
                text +
                "</div>"
        )
        .css(cssStyles)
        .appendTo(document.body);
    }
    return null;
  },

  positiontooltip: function ($, $tooltip, e) {
    var x = e.pageX + this.tooltipoffsets[0],
      y = e.pageY + this.tooltipoffsets[1];
    var tipw = $tooltip.outerWidth(),
      tiph = $tooltip.outerHeight(),
      x = x + tipw > $(document).scrollLeft() + $(window).width() ? x - tipw - ddimgtooltip.tooltipoffsets[0] * 2 : x;
    y =
      y + tiph > $(document).scrollTop() + $(window).height()
        ? $(document).scrollTop() + $(window).height() - tiph - 10
        : y;
    $tooltip.css({ left: x, top: y });
  },

  showbox: function ($, $tooltip, e) {
    $tooltip.show();
    this.positiontooltip($, $tooltip, e);
  },

  hidebox: function ($, $tooltip) {
    $tooltip.hide();
  },

  init: function (targetselector) {
    jQuery(document).ready(function ($) {
      var tiparray = ddimgtooltip.tiparray;
      var $targets = $(targetselector);
      if ($targets.length == 0) return;
      var tipids = [];
      $targets.each(function () {
        var $target = $(this);
        $target.attr("rel").match(/\[(\d+)\]/); //match d of attribute rel="imgtip[d]"
        var tipsuffix = parseInt(RegExp.$1); //get d as integer
        var tipid = (this._tipid = ddimgtooltip.tipprefix + tipsuffix); //construct this tip's ID value and remember it
        var $tooltip = ddimgtooltip.createtip($, tipid, tiparray[tipsuffix]);
        $target.mousedown(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseup(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseenter(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.showbox($, $tooltip, e);
        });
        $target.mouseleave(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.hidebox($, $tooltip, e);
        });
        $target.mousemove(function (e) {
          var $tooltip = $("#" + this._tipid);
          ddimgtooltip.positiontooltip($, $tooltip, e);
        });
        if ($tooltip) {
          $tooltip.mouseenter(function () {
            ddimgtooltip.hidebox($, $(this));
          });
          $tooltip.mousedown(function () {
            ddimgtooltip.hidebox($, $(this));
          });
          $tooltip.mouseup(function () {
            ddimgtooltip.hidebox($, $(this));
          });
        }
      });
    }); //end dom ready
  }
};

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]");
