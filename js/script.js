// ------------------------ Responsive menu ----------------
		window.addEventListener("load", function(){
		  addRequiredClasses();
		});


		function addRequiredClasses()
		{
		  if(window.innerWidth < 860)
		  {
		    document.body.classList.add('mobile');
		  }
		  else
		  {
		    document.body.classList.remove('mobile');
		  }
		}

		let hamberger = document.querySelector('.hamberger');
		let mobileNav = document.querySelector('.nav-list');

		let bars = document.querySelectorAll('.hamberger span');

		let isActive = false

		hamberger.addEventListener('click', function(){
		  mobileNav.classList.toggle('open');
		  
		  if(!isActive)
		  {
		    bars[0].style.transform = 'rotate(45deg)';
		    bars[1].style.opacity = '0'
		    bars[2].style.transform = 'rotate(-45deg)';
		    isActive = true
		  }
		  else
		  {
		    bars[0].style.transform = 'rotate(0deg)';
		    bars[1].style.opacity = '1'
		    bars[2].style.transform = 'rotate(0deg)';
		    isActive = false
		  }
		});
		// ------------------------ Responsive menu ----------------

		let logo=document.querySelector(".brand img");
		logo.src="img/abhikarta-logo.png"
		let title=document.querySelector("title");
		title.textContent="Abhikarta | Be sucure for future!"
		let footer=document.querySelector(".footer-container p");
		footer.textContent="© 2024 Swagnik. All Rights Reserved";