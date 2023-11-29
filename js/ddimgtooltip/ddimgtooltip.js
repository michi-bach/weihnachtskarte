/* Image w/ description tooltip v2.0
 * Created: April 23rd, 2010. This notice must stay intact for usage
 * Author: Dynamic Drive at http://www.dynamicdrive.com/
 * Visit http://www.dynamicdrive.com/ for full source code
 */

var ddimgtooltip = {
  tiparray: (function () {
    var tooltips = []
	//define the width of the tooltip-boxes
	let box_w = "350px"
    
	//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
    //For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
    //For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

    tooltips[1] = [ "img/01_pub_v3.gif",
      "Blutfluss in Aorta, Pulmonalarterien und im Herzen<br>– in 4D: Wir konnten eine neue MR-Technik imple-<br>mentieren, mit der wir den Blutfluss in den Thorax-<br>gefässen in jeder beliebigen Raumrichtung zeit-<br>aufgelöst messen können.<br>Dr. Maurice Pradella, stv. Leiter der kardiothora-<br>kalen Diagnostik, hat die Technik mit PD Dr. Gregor<br>Baumann (wissenschaftlicher Mitarbeiter radiolo-<br>gische Physik) und Dr. Markus Klarhöfer umgesetzt.<br>Die derzeit in Vergleichsstudien getestete Technik<br>soll zukünftig für Patient*innen verfügbar sein."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[2] = [ "img/02_pub.jpg",
      "Publikation zu Radioliganden in renommiertem<br>Editorial: Wegweisende Forschungsergebnisse<br>der radiopharmazeutischen Chemie wurden im<br>European Journal of Nuclear Medicine and<br>Molecular Imaging publiziert und in dessen Editorial<br>thematisiert.<br>Erforscht wurden Strategien zur Erhöhung der<br>Verweildauer bestimmter Radioliganden (radioaktiv<br>markierte Substanzen, die spezifisch an ein Ziel-<br>protein, z. B. einen Rezeptor auf einer Tumorzelle,<br>binden und so gezielt Tumorgewebe zerstören,<br>gesundes Gewebe aber schonen)."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[3] = [ "img/03_pub.jpg",
      "Flinker Segmentierer: Unser Totalsegmentator wird<br>weltweit von über 32.000 Nutzer*innen eingesetzt,<br>täglich kommen mehr als 100 Neuinstallationen<br>hinzu.<br>Unterstützt durch künstliche Intelligenz erkennt<br>und analysiert die Software vollautomatisch ana-<br>tomische Strukturen (117 Klassen) in Computer-<br>tomografien. Sie steht unter totalsegmentator.com<br>zur Verfügung."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[4] = [ "img/04_pub.jpg",
      "SNF-Gelder für unsere Forschung zur Behandlung<br>intrakranieller Gefässverschlüsse:<br>Prof. Marios Psychogios, Leiter der Neuroradiologie,<br>erhielt Projektfördermittel des Schweizerischen<br>Nationalfonds (SNF) im Umfang von CHF 960'000<br>für die ICARUS-Studie.<br>Die randomisiert-kontrollierte Studie untersucht,<br>ob Patient*innen mit intrakraniellem Gefäss-<br>verschluss auf Basis einer Stenose mit zusätz-<br>lichem Stenting behandelt werden sollen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[5] = [ "img/05_pub.jpg",
      "Schaltet auch das CT aus! Unsere Wissenschaftler-<br>*innen haben am europäischen Radiologiekongress<br>die Ergebnisse ihrer Massnahmen zum Umgang mit<br>Energie in Radiologie und Nuklearmedizin – den<br>energieintensivsten Fachbereichen eines Spitals –<br>präsentiert.<br>Sie führten zu Einsparungen von jährlich 70’000<br>Kilowattstunden Strom – mehr als 9,3 Tonnen CO<sub>2</sub>-<br>Emissionen bzw. CHF 56'000.<br>Das radiologische Fachforum Auntminnie und der<br>USB-Nachhaltigkeitsbericht nahmen die Resultate<br>auf; das USB verlieh uns den KVP-Preis (Kategorie<br>Nachhaltigkeit)."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[6] = [ "img/06_pub.jpg",
      "Mit Kompetenz und Begeisterung: Dr. Annika Lonak<br>– Oberärztin der Neuroradiologie – hat den SIWF-<br>Award 2023 erhalten.<br>Die Auszeichnung für besonders engagierte Weiter-<br>bildungsverantwortliche wird jährlich vom Schwei-<br>zerischen Institut für ärztliche Weiter- und Fort-<br>bildung (SIWF) vergeben.<br>Nominiert wurde Lonak von ehemaligen Assis-<br>tierenden, die im Rahmen ihrer Facharzt-/Schwer-<br>punkt-Weiterbildung von ihr betreut worden waren."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[7] = [ "img/07_pub.jpg",
      "Preisgekrönte Entwicklung eines kupfer-61-basier-<br>ten Radiodiagnostikums zum Nachweis neuroendo-<br>kriner Tumoren:<br>Die Neuroendocrine Tumor Research Foundation<br>zeichnete Prof. Melpomeni Fani, Dr. Guillaume<br>Nicolas und Prof. Damian Wild (radiopharma-<br>zeutische Chemie bzw. Nuklearmedizin) mit dem<br>renommierten Investigator Award für die Initiierung<br>und Ausführung einer klinischen Phase-1-Studie<br>mit einem neuen, auf Kupfer-61 basierenden PET-<br>Tracer für neuroendokrine Tumoren aus."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[8] = [ "img/08_pub.jpg",
      "Sechs auf einen Streich: Gleich mit sechs wissen-<br>schaftlichen Beiträgen waren wir am Joint Meeting<br>der europäischen Gesellschaften für kardiovasku-<br>läre und Thorax-Radiologie (ESCR und ESTI)<br>vertreten – neben unserem Fortbildungsprogramm.<br>Hervorzuheben ist der Vortrag unseres Master-<br>studenten Daniel Hinck (Betreuer: Dr. Maurice Pra-<br>della), der die Weiterentwicklung des Totalsegmen-<br>tators von Dr. Jakob Wasserthal, wissenschaftlicher<br>Mitarbeiter der Radiologie, präsentierte.<br>Unterstützt durch künstliche Intelligenz erkennt und<br>analysiert dieser vollautomatisch anatomische<br>Strukturen (wie etwa die Herzkammern oder Blut-<br>gefässe im Bild) in Computertomografien."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[9] = [ "img/09_pub.jpg",
      "Magna cum laude – im Doppel: Bei den Teil-<br>prüfungen zur Erlangung des Facharzttitels für<br>Radiologie FMH haben unsere Assistenzärzt*innen<br>Dr. Dominik Jäschke und Dr. Johanna Ospel<br>(mittlerweile externe Dozentin) für ihre heraus-<br>ragenden Ergebnisse Prüfungspreise der Schwei-<br>zerischen Gesellschaft für Radiologie (SGR-SSR)<br>erhalten.<br>Dr. Jäschke und Dr. Ospel haben jeweils die 1. Teil-<br>prüfung 2023 bzw. die 2. Teilprüfung 2022 mit der<br>Auszeichnung magna cum laude abgeschlossen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[10] = [ "img/10_pub.jpg",
      "Klingende Patientin: Damit eine robuste Doppel-<br>gängerin angefertigt, untersucht und bespielt<br>werden kann, wurde eine Renaissanceflöte aus<br>Birnbaumholz radiologisch begutachtet.<br>So soll ihr Klang, der Forscher- und Musiker*innen<br>interessiert, ertönen, ohne dass das Original Scha-<br>den nimmt. Das Musikmuseum des Historischen<br>Museums Basel liess die venezianische, über 400-<br>jährige Flöte – eine Seltenheit unter ihresgleichen<br>– computertomografisch exakt untersuchen. "
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[11] = [ "img/11_pub.jpg",
      "Förderung eines neuen Ansatzes gegen meta-<br>stasierten Prostatakrebs: Die Nuklearmedizin hat<br>– zusammen mit dem Paul Scherrer Institut und der<br>ETH Zürich – kompetitive Fördermittel (Total:<br>CHF 1.8 Mio) der ETH-Förderlinie Personalized<br>Health and Related Technologies für ein klinisches<br>Terbium-161-Projekt erhalten. Terbium-161 soll<br>bei Patienten mit metastasiertem Prostatakrebs<br>eingesetzt werden, die auf vorhandene Medi-<br>kamente nicht ansprechen."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[12] = [ "img/12_pub.jpg",
      "Gleich zwei Projekte der Radiologie erhielten einen<br>der vier KVP-Preise (kontinuierlicher Verbesse-<br>rungsprozess).<br>Damit würdigt das USB jedes Jahr Projekte, die zur<br>Verbesserung des klinischen Alltags – für Patient*-<br>innen und Mitarbeitende – beitragen.<br>Ausgezeichnet wurde ein Projekt, das zur Erhöhung<br>der Bildqualität von Mammografien und damit zur<br>Patientensicherheit beiträgt sowie eines, das zu<br>Einsparungen von 72’000 kWh Strom führt (dies<br>entspricht CHF 56'000 und 9,3 Tonnen CO<sub>2</sub>-Emi-<br>ssionen)."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[13] = [ "img/13_pub.jpg",
      "Fördermittel des SNF für MR-Forschung zu neuro-<br>muskulären Erkrankungen: Für das Projekt<br>Advancing Neuromuscular Disease Evaluation:<br>Developing Novel Multiparametric MRI Methods for<br>Myotonic Dystrophy Assessment and Management<br>erhielten Dr. Francesco Santini, wissenschaftlicher<br>Mitarbeiter der radiologischen Physik und<br>Dr. Regina Schläger, Oberärztin der Neurologie,<br>vom Schweizerischen Nationalfonds (SNF) einen<br>Zuschuss in der Höhe von CHF 762'000."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[14] = [ "img/14_pub.jpg",
      "Wissenschaftspreis für verbesserte Beurteilung<br>der Brustdichte: Dr. Noemi Schmidt, Leiterin der<br>Mammadiagnostik, wurde für ihre Forschung geehrt.<br>Eine hohe Brustdichte ist ein Risikofaktor für Brust-<br>krebs, deren standardisierte, exakte Beurteilung<br>daher entscheidend.<br>Schmidts Team entwickelte ein künstliches neuro-<br>nales Netzwerk, das die Brustdichte in zweidimen-<br>sionalen Tomosynthese-Rekonstruktionen mithilfe<br>künstlicher Intelligenz automatisch, genau und stan-<br>dardisiert klassifiziert. Schmidt erhielt den mit<br>CHF 3000 dotierten HOLOGIC Science Award der<br>Schweizerischen Gesellschaft für Senologie."
      ,{ background: "white", opacity: 0.98, width:box_w}]

    tooltips[15] = [ "img/15_pub.jpg",
      "Tag der Radiologie: Am 8. November, dem Jahres-<br>tag der Entdeckung der Röntgenstrahlen,<br>wurde weltweit der International Day of Radiology<br>gefeiert – auf Initiative der amerikanischen und<br>europäischen Gesellschaft für Radiologie. Auch am<br>USB wurde der Tag gewürdigt. Um auf ihn aufmerk-<br>sam zu machen, haben Radiologie und Nuklear-<br>medizin Plakate und Flaggen angebracht sowie eine<br>informative Website entworfen. "
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
          '<div style="text-align:left;"><img src="' +
            tipinfo[0] +
            '" style="text-align:center; width:250px; margin-left:35px"/></div>' +
            '<div style="text-align:left; margin-left:5px; margin-right:5px;\
				margin-top:16px">' +
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
