 $( function() {
    $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  } );
      
      
		$(function () {
			$('.checkbox2').checkator();
			$('#activate_checkator4').click(function () {
				if ($('#checkbox2_1').data('checkator') === undefined) {
					$('.checkbox2').checkator();
					$('#activate_checkator4').val('destroy checkator');
				} else {
					$('.checkbox2').checkator('destroy');
					$('#activate_checkator4').val('activate checkator');
				}
			});
		});
      
      
      function openNav() {
            document.getElementById("mySidenav").classList.add('displayblock');
            document.getElementById("opennav").style.display = "none";
            document.getElementById("mySidenav").classList.remove('displaynone');
            document.getElementById("leftside").classList.remove('fullwidth');
            document.getElementById("rightside").classList.remove('displaynone');
  
      }
     function closeNav() {
         document.getElementById("mySidenav").classList.add('displaynone');
         document.getElementById("opennav").style.display = "block"; 
         document.getElementById("mySidenav").classList.remove('displayblock');
         document.getElementById("leftside").classList.add('fullwidth');
         document.getElementById("rightside").classList.add('displaynone');
     }
    
    function purpletheme() {
        document.getElementById("mySidenav").classList.add('purple');
     }
    function bluetheme() {
        document.getElementById("mySidenav").classList.add('blue');
     }
    function greentheme() {
        document.getElementById("mySidenav").classList.add('green');
     }
    function orangetheme() {
        document.getElementById("mySidenav").classList.add('orange');
     }
      
