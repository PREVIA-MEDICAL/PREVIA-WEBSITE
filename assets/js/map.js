<script type='text/javascript' src='https://www.google.com/jsapi'></script>
<script type='text/javascript'>google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

  function drawVisualization() {var data = new google.visualization.DataTable();

 data.addColumn('string', 'Country');
 data.addColumn('number', 'Value');
 data.addColumn({type:'string', role:'tooltip'});var ivalue = new Array();

 data.addRows([[{v:'US',f:'United States of America'},0,'438 Projects']]);
 ivalue['US'] = '';

 data.addRows([[{v:'GB',f:'United Kingdom'},1,'113 Projects']]);
 ivalue['GB'] = '';

 data.addRows([[{v:'DE',f:'Germany'},2,'289 Projects']]);
 ivalue['DE'] = '';

 data.addRows([[{v:'FR',f:'France'},3,'34 Projects']]);
 ivalue['FR'] = '';

 data.addRows([[{v:'ES',f:'Spain'},4,'20 Projects']]);
 ivalue['ES'] = '';

 data.addRows([[{v:'CA',f:'Canada'},5,'106 Projects']]);
 ivalue['CA'] = '';

 data.addRows([[{v:'IT',f:'Italy'},6,'17 Projects']]);
 ivalue['IT'] = '';

 data.addRows([[{v:'NL',f:'The Netherlands'},7,'129 Projects']]);
 ivalue['NL'] = '';

 data.addRows([[{v:'BR',f:'Brazil'},8,'11 Projects']]);
 ivalue['BR'] = '';

 data.addRows([[{v:'TR',f:'Turkey'},9,'4 Projects']]);
 ivalue['TR'] = '';

 data.addRows([[{v:'IN',f:'India'},10,'69 Projects']]);
 ivalue['IN'] = '';

 data.addRows([[{v:'RU',f:'Russia'},11,'16 Projects']]);
 ivalue['RU'] = '';

 data.addRows([[{v:'AU',f:'Australia'},12,'43 Projects']]);
 ivalue['AU'] = '';

 data.addRows([[{v:'CN',f:'China'},13,'24 Projects']]);
 ivalue['AU'] = '';

  data.addRows([[{v:'AR',f:'Argentina'},14,'10 Projects']]);
 ivalue['AU'] = '';

  data.addRows([[{v:'CL',f:'Chile'},15,'39 Projects']]);
 ivalue['AU'] = '';

  data.addRows([[{v:'CH',f:'Switzerland'},16,'20 Projects']]);
 ivalue['AU'] = '';

   data.addRows([[{v:'SE',f:'Sweden'},17,'71 Projects']]);
 ivalue['AU'] = '';


   data.addRows([[{v:'NO',f:'Norway'},18,'52 Projects']]);
 ivalue['AU'] = '';


   data.addRows([[{v:'FI',f:'Finland'},19,'31 Projects']]);
 ivalue['AU'] = '';

 var options = {
 backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 },
 // -------------------------------------------------0			1			2		3			4		5		6			7			8		9		10			11			12		13			14		15		16			17			18		19
 colorAxis:  {minValue: 0, maxValue: 19,  colors: ['#D95F0E','#D95F0E','#D95F0E','#FEC44F','#FEC44F','#D95F0E','#FFF7BC','#D95F0E','#FFF7BC','#FFF7BC','#D95F0E','#FFF7BC','#FEC44F','#FEC44F','#FFF7BC','#FEC44F','#FEC44F','#D95F0E','#D95F0E','#FEC44F']},
 legend: 'none',
 backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 },
 datalessRegionColor: '#F5F0E7',
 displayMode: 'regions',
 enableRegionInteractivity: 'true',
 resolution: 'countries',
 sizeAxis: {minValue: 1, maxValue:1,minSize:10,  maxSize: 10},
 region:'world',
 keepAspectRatio: true,
 width:600,
 height:400,
 tooltip: {textStyle: {color: '#444444'}, trigger:'focus'}
 };
  var chart = new google.visualization.GeoChart(document.getElementById('visualization'));
 chart.draw(data, options);
 }
 </script>
 <div id='visualization'></div>