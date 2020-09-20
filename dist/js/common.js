		function trim(sString) 
		{ 
		  sTrimmedString = ""; 
		   if (sString != "") 
		   { 
			  var iStart = 0; 
			  var iEnd = sString.length - 1; 
			  var sWhitespace = " \t\f\n\r"; 
			  
			  while (sWhitespace.indexOf(sString.charAt(iStart)) != -1) 
			  { 
				 iStart++; 
				 if (iStart > iEnd) 
					break; 
			  } 
			  
			  // If the string not just whitespace 
			  if (iStart <= iEnd) 
			  { 
				 while (sWhitespace.indexOf(sString.charAt(iEnd)) != -1) 
					iEnd--; 
				   sTrimmedString = sString.substring(iStart,++iEnd); 
			  } 
		   } 
		   return sTrimmedString; 
		} 

		function trim_final(sString) 
		{ 
			var iStart = 0; 
			var i = 0;
			var fTrimmedString = "";
			var iEnd = sString.length - 1; 
			var sWhitespace = " \t\f\n\r"; 
			for(iStart=0;iStart <= iEnd;iStart++)
			{ 
				if(sWhitespace.indexOf(sString.charAt(iStart)) != -1)
				{
					i++;
				}
				else
				{
					i = 0;
				}
				if(i <2)
				{
					fTrimmedString = fTrimmedString + sString.charAt(iStart);
				}
			}
			return fTrimmedString; 
		}

		// milind_pingale@hotmail.com
		function check_space(sString) 
		{ 
		   if (sString != "") 
		   { 
				var iStart = 0; 
				var iEnd = sString.length - 1; 
				var sWhitespace = " \t\f\n\r"; 
				
				for(iStart=0;iStart <= iEnd;iStart++)
				{ 
					if(sWhitespace.indexOf(sString.charAt(iStart)) != -1)
					{
						alert("Remove white space from title, title must be single word");
						return false;
					} 
				}
				return true;
		   }
		}

		//check numeric value for float							
		function check_float(sString) 
		{ 
			if(!sString.match(/^[0-9]*[\.]{0,1}[0-9]{0,2}$/i)) 
			{
				return false;
			}
			else
			{
				if(sString.length == 0) 
					return false;
				else
					return true;
			}
		}

		//check numeric value integer
		function check_integer(sString) 
		{ 
			if(!sString.match(/^[0-9]*$/i)) 
			{
				return false;
			}
			else
			{
				if(sString.length == 0) 
					return false;
				else
					return true;
			}
		}

		function isValidEmail(str) 
		{
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if(reg.test(str) == false) {
				return false;
			}
			return true;
		}
