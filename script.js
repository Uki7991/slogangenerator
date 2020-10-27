import allSlogans from './slogans.js';

$(document).ready(function() {
	console.log("Number of slogans: " + allSlogans.length);
	
	$('#slogan_edit').keypress((e) => {
		if (e.which == 13) {
			generateSlogans();
			changeSloganTitle($(e.currentTarget).val());
		}
	});

	function changeSloganTitle(title) {
		if (title != '') {
			$('#slogan_text').find('h1').each((index, item) => {
				const regex = /###[a-z]+###/gm;
				let changedTitle = $(item).data('text').replace(regex, `###`+title+`###`);
				console.log(changedTitle);
				$(item).attr('data-text', changedTitle);
				$(item).text(removeSymbols(changedTitle));
			})
		}
	}

	$('#generate').click(e => {
		e.preventDefault();
		generateSlogans();
		changeSloganTitle($('#slogan_edit').val());
	})

	function removeSymbols(text) {
		const regex = /###/gm;

		return text.replace(regex, ``);
	}

	function generateSlogans() {
		if ($('#slogan_edit').val() != '') {
			$("#slogan_text").empty()
			$('#generate').text('Generate more');
			for(let i = 0; i < 3; i++) {
				var randomIndex = Math.floor(Math.random() * (allSlogans.length + 1));
				console.log("Displaying slogan #" + randomIndex);
				let text = '<h1 data-text="'+allSlogans[randomIndex]+'">'+removeSymbols(allSlogans[randomIndex])+'</h1>';
				$("#slogan_text").append(text);
		
			}
		}
	}

	// generateSlogans();
});
